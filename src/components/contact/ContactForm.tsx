'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, ShieldCheck, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  serviceRequired: string;
  budget: string;
  projectDescription: string;
  honeypot: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phoneNumber?: string;
  serviceRequired?: string;
  projectDescription?: string;
  general?: string;
}

export const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [form, setForm] = useState<FormState>({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    serviceRequired: '',
    budget: '',
    projectDescription: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);

  useEffect(() => {
    if (serviceParam) {
      if (serviceParam.includes('ai')) {
        setForm(prev => ({ ...prev, serviceRequired: 'AI Automation & AI Agents' }));
      } else if (serviceParam.includes('web')) {
        setForm(prev => ({ ...prev, serviceRequired: 'Website Development' }));
      } else if (serviceParam.includes('seo')) {
        setForm(prev => ({ ...prev, serviceRequired: 'SEO, AEO & GEO' }));
      }
    }
  }, [serviceParam]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!form.companyName.trim() || form.companyName.trim().length < 2) {
      newErrors.companyName = 'Please enter your business or company name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid business email address.';
    }

    const phoneRegex = /^[\d\s+\-()]{7,20}$/;
    if (!form.phoneNumber.trim() || !phoneRegex.test(form.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid telephone contact number.';
    }

    if (!form.serviceRequired) {
      newErrors.serviceRequired = 'Please select a primary service category.';
    }

    if (!form.projectDescription.trim() || form.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please provide at least 15 characters describing your requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined, general: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ general: data.message || 'Submission failed. Please try again or call us directly.' });
        }
        setIsSubmitting(false);
        return;
      }

      setSubmittedReference(data.referenceId || 'MT-CONFIRMED');
      setIsSubmitting(false);
    } catch (err) {
      setErrors({
        general: `Unable to reach submission endpoint. Please call ${COMPANY_INFO.primaryPhone} or WhatsApp ${COMPANY_INFO.whatsappNumber} directly.`,
      });
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({
      fullName: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      serviceRequired: '',
      budget: '',
      projectDescription: '',
      honeypot: '',
    });
    setErrors({});
    setSubmittedReference(null);
  };

  // Success State View
  if (submittedReference) {
    return (
      <div className="bg-white border border-motive-border rounded-xl p-8 sm:p-10 shadow-premium text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold px-2.5 py-1 bg-emerald-50 rounded">
            ENQUIRY LOGGED SUCCESSFULLY
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-motive-black">
            Thank you for reaching out.
          </h3>
          <p className="text-sm text-motive-grey max-w-md mx-auto leading-relaxed">
            Your project enquiry has been registered under reference:
          </p>
          <div className="font-mono text-sm font-bold text-motive-black bg-motive-offwhite border border-motive-border py-2 px-4 rounded max-w-xs mx-auto">
            {submittedReference}
          </div>
        </div>

        <p className="text-xs text-motive-grey max-w-lg mx-auto leading-relaxed">
          Our engineering leadership will review your operational requirements and reach out via email or phone within 24 business hours to coordinate an architecture consultation.
        </p>

        <div className="pt-4 border-t border-motive-border flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-motive-offwhite border border-motive-border text-xs font-mono font-semibold text-motive-black rounded hover:bg-zinc-100"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Enquiry</span>
          </button>
          <a
            href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
            className="text-xs font-mono text-motive-red font-semibold hover:underline"
          >
            Immediate Urgency? Call {COMPANY_INFO.primaryPhone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-motive-border rounded-xl p-6 sm:p-10 shadow-premium space-y-6"
      noValidate
    >
      {/* Honeypot field for bot mitigation (invisible to real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url">Do not fill this</label>
        <input
          type="text"
          id="website_url"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="border-b border-motive-border pb-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-motive-grey block mb-1">
          PROJECT INQUIRY FORM
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-motive-black">
          Send Your Technical Scope
        </h3>
        <p className="text-xs text-motive-grey mt-1">
          Fill out the details below. All submitted information is strictly confidential.
        </p>
      </div>

      {errors.general && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
          <span>{errors.general}</span>
        </div>
      )}

      {/* Grid: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-motive-black font-semibold mb-2">
            Full Name <span className="text-motive-red">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-4 py-3 bg-white border rounded text-xs text-motive-black focus:outline-none transition-colors ${
              errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-motive-border focus:border-motive-black'
            }`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="companyName" className="block text-xs font-mono uppercase tracking-wider text-motive-black font-semibold mb-2">
            Business / Company Name <span className="text-motive-red">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="e.g. Apex Logistics Ltd"
            className={`w-full px-4 py-3 bg-white border rounded text-xs text-motive-black focus:outline-none transition-colors ${
              errors.companyName ? 'border-red-500 bg-red-50/20' : 'border-motive-border focus:border-motive-black'
            }`}
          />
          {errors.companyName && (
            <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.companyName}</p>
          )}
        </div>
      </div>

      {/* Grid: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-motive-black font-semibold mb-2">
            Business Email <span className="text-motive-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g. rahul@company.com"
            className={`w-full px-4 py-3 bg-white border rounded text-xs text-motive-black focus:outline-none transition-colors ${
              errors.email ? 'border-red-500 bg-red-50/20' : 'border-motive-border focus:border-motive-black'
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-xs font-mono uppercase tracking-wider text-motive-black font-semibold mb-2">
            Phone Number <span className="text-motive-red">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="e.g. +91 9876543210"
            className={`w-full px-4 py-3 bg-white border rounded text-xs text-motive-black focus:outline-none transition-colors ${
              errors.phoneNumber ? 'border-red-500 bg-red-50/20' : 'border-motive-border focus:border-motive-black'
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.phoneNumber}</p>
          )}
        </div>
      </div>

      {/* Grid: Service Dropdown & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="serviceRequired" className="block text-xs font-mono uppercase tracking-wider text-motive-black font-semibold mb-2">
            Service Required <span className="text-motive-red">*</span>
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            value={form.serviceRequired}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border rounded text-xs text-motive-black focus:outline-none transition-colors ${
              errors.serviceRequired ? 'border-red-500 bg-red-50/20' : 'border-motive-border focus:border-motive-black'
            }`}
          >
            <option value="">-- Select Required Capability --</option>
            <option value="AI Automation & AI Agents">AI Automation &amp; AI Agents</option>
            <option value="Website Development">Website Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="SEO, AEO & GEO">SEO, AEO &amp; GEO (Search &amp; AI Visibility)</option>
            <option value="Multiple Services">Multiple Integrated Services</option>
            <option value="Other">Other Custom Technical Scope</option>
          </select>
          {errors.serviceRequired && (
            <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.serviceRequired}</p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-motive-black font-semibold mb-2">
            Estimated Project Budget <span className="text-motive-grey font-normal font-sans">(Optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-motive-border rounded text-xs text-motive-black focus:outline-none focus:border-motive-black transition-colors"
          >
            <option value="">-- Select Budget Tier --</option>
            <option value="Under ₹1,00,000">Under ₹1,00,000</option>
            <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000</option>
            <option value="₹3,00,000 - ₹10,00,000">₹3,00,000 - ₹10,00,000</option>
            <option value="₹10,00,000+">₹10,00,000+ (Enterprise Architecture)</option>
            <option value="Flexible / To Be Scoped">Flexible / To Be Scoped</option>
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="projectDescription" className="block text-xs font-mono uppercase tracking-wider text-motive-black font-semibold mb-2">
          Project Description &amp; Objectives <span className="text-motive-red">*</span>
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={5}
          value={form.projectDescription}
          onChange={handleChange}
          placeholder="Briefly describe your business challenge, existing technical stack, key milestones, or specific deliverables required..."
          className={`w-full px-4 py-3 bg-white border rounded text-xs text-motive-black focus:outline-none transition-colors ${
            errors.projectDescription ? 'border-red-500 bg-red-50/20' : 'border-motive-border focus:border-motive-black'
          }`}
        />
        {errors.projectDescription && (
          <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.projectDescription}</p>
        )}
      </div>

      {/* Form Submission Bar */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover disabled:opacity-50 transition-all duration-200 shadow group"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>TRANSMITTING ENQUIRY...</span>
            </>
          ) : (
            <>
              <span>SEND PROJECT ENQUIRY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Strict Confidentiality &bull; No Spam</span>
        </div>
      </div>
    </form>
  );
};
