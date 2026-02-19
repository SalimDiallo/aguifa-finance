"use client";

import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { Forminit } from 'forminit';

interface ContactFormProps {
  /** Show company field (optional) */
  showCompany?: boolean;
  /** Use select dropdown for subject instead of text input */
  useSubjectSelect?: boolean;
  /** Number of rows for message textarea */
  messageRows?: number;
  /** Custom class for the form container */
  className?: string;
  /** Forminit Form ID */
  formId?: string;
}

export default function ContactForm({
  showCompany = false,
  useSubjectSelect = false,
  messageRows = 5,
  className = '',
  formId = 'j09jkmkjdoc', // Replace with your Forminit Form ID
}: ContactFormProps) {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const forminit = new Forminit({ proxyUrl: '/api/forminit' });

  const subjectOptions = [
    { value: '', label: t.contact.selectSubject },
    { value: 'development', label: 'Development Finance & Public Policies' },
    { value: 'investment', label: 'Investment & Private Capital' },
    { value: 'digital', label: 'Digital & MSME Finance' },
    { value: 'data', label: 'Data & Research' },
    { value: 'green', label: 'Green & Sustainable Finance' },
    { value: 'tenders', label: t.contact.tenderSupport },
    { value: 'other', label: t.contact.otherRequest },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const { error: submitError } = await forminit.submit(formId, formData);

    if (submitError) {
      setStatus('error');
      setError(submitError.message);
      return;
    }

    setStatus('success');
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      {/* Name & Email Row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide"
          >
            {t.contact.name} *
          </label>
          <input
            type="text"
            id="firstName"
            name="fi-sender-firstName"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm disabled:bg-slate-50 disabled:cursor-not-allowed"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide"
          >
            {t.contact.email} *
          </label>
          <input
            type="email"
            id="email"
            name="fi-sender-email"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm disabled:bg-slate-50 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      {/* Company Field (optional) */}
      {showCompany && (
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide"
          >
            {t.contact.company}
          </label>
          <input
            type="text"
            id="company"
            name="fi-sender-company"
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm disabled:bg-slate-50 disabled:cursor-not-allowed"
          />
        </div>
      )}

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide"
        >
          {t.contact.subject} *
        </label>
        {useSubjectSelect ? (
          <select
            id="subject"
            name="fi-select-subject"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm bg-white disabled:bg-slate-50 disabled:cursor-not-allowed"
          >
            {subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            id="subject"
            name="fi-text-subject"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors text-sm disabled:bg-slate-50 disabled:cursor-not-allowed"
          />
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide"
        >
          {t.contact.message} *
        </label>
        <textarea
          id="message"
          name="fi-text-message"
          required
          rows={messageRows}
          disabled={status === 'loading'}
          className="w-full px-4 py-3 border border-slate-200 focus:border-slate-400 focus:outline-none transition-colors resize-none text-sm disabled:bg-slate-50 disabled:cursor-not-allowed"
          placeholder={t.contact.messagePlaceholder}
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
          {error || t.contact.errorMessage}
        </div>
      )}

      {/* Success Message */}
      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-sm">
          {t.contact.successMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {t.contact.sending}
          </span>
        ) : (
          t.contact.send
        )}
      </button>
    </form>
  );
}
