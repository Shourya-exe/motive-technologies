import { NextRequest, NextResponse } from 'next/server';
import { sendContactEnquiryEmail } from '@/lib/resend';

interface ContactRequestBody {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  serviceRequired: string;
  budget?: string;
  projectDescription: string;
  honeypot?: string; // spam protection field
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();

    // 1. Spam protection via honeypot
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Return success silently for bots
      return NextResponse.json(
        { success: true, message: 'Enquiry received' },
        { status: 200 }
      );
    }

    // 2. Server-side validation
    const errors: Record<string, string> = {};

    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!body.companyName || body.companyName.trim().length < 2) {
      errors.companyName = 'Company name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      errors.email = 'A valid email address is required.';
    }

    const phoneRegex = /^[\d\s+\-()]{7,20}$/;
    if (!body.phoneNumber || !phoneRegex.test(body.phoneNumber.trim())) {
      errors.phoneNumber = 'A valid phone number is required.';
    }

    if (!body.serviceRequired || body.serviceRequired.trim() === '') {
      errors.serviceRequired = 'Please select a service category.';
    }

    if (!body.projectDescription || body.projectDescription.trim().length < 15) {
      errors.projectDescription = 'Please provide at least 15 characters describing your project.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please verify your submitted fields.',
          errors,
        },
        { status: 400 }
      );
    }

    // 3. Structured enquiry artifact generation
    const enquiryReference = `MT-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const sanitizedEnquiry = {
      referenceId: enquiryReference,
      receivedAt: new Date().toISOString(),
      client: {
        name: body.fullName.trim(),
        company: body.companyName.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phoneNumber.trim(),
      },
      project: {
        service: body.serviceRequired.trim(),
        budget: body.budget ? body.budget.trim() : 'Unspecified',
        description: body.projectDescription.trim(),
      },
      status: 'NEW_INQUIRY_RECEIVED',
    };

    // Log the received enquiry cleanly in server output
    console.log('[MOTIVE TECHNOLOGIES] Project Enquiry Received:', JSON.stringify(sanitizedEnquiry, null, 2));

    // 4. Dispatch notification email to motivetechnologies1@gmail.com via Resend
    const emailResult = await sendContactEnquiryEmail(sanitizedEnquiry);

    // Return structured success response
    return NextResponse.json(
      {
        success: true,
        referenceId: enquiryReference,
        message: 'Your project enquiry has been securely received by Motive Technologies. A senior solutions architect will contact you within 24 business hours.',
        emailDelivered: emailResult.success,
        enquiry: {
          referenceId: enquiryReference,
          service: sanitizedEnquiry.project.service,
          submittedAt: sanitizedEnquiry.receivedAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[MOTIVE TECHNOLOGIES] Contact API Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected internal error occurred while processing your enquiry. Please contact us directly via phone.',
      },
      { status: 500 }
    );
  }
}
