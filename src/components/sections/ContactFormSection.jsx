import React, { useState } from 'react';
import { Send, Check, Loader2, AlertCircle } from 'lucide-react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: 'Residential Construction',
    budget: '₹50 Lakhs - ₹1 Crore',
    message: '',
    agreeTerms: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data = {};
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const textResponse = await response.text();
        console.warn('Received non-JSON API response:', textResponse);
        data = {
          success: false,
          message: response.status === 404
            ? 'API route /api/contact not found (404). If deploying to Vercel, ensure the function is published.'
            : `Server returned unexpected status ${response.status}`,
        };
      }

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          projectType: 'Residential Construction',
          budget: '₹50 Lakhs - ₹1 Crore',
          message: '',
          agreeTerms: false,
        });
      } else {
        setErrorMessage(data.message || 'Failed to send message. Please check your inputs or try again later.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('Network error. Could not submit form. Please check your internet connection.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-[1246px] mx-auto space-y-12">
          {/* Header */}
          <div className="max-w-[946px] space-y-3">
            <h2 className="font-urbanist font-semibold text-4xl md:text-5xl lg:text-[48px] text-black leading-snug">
              Let's Connect
            </h2>
            <p className="font-urbanist font-medium text-lg text-[#999999]">
              Have a project in mind or searching for the right property? Reach out to us and turn your vision into reality.
            </p>
          </div>

          {/* Form Container */}
          <form
            onSubmit={handleSubmit}
            className="border border-[#262626] rounded-2xl p-6 sm:p-12 md:p-16 bg-white shadow-sm space-y-8"
          >
            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="font-urbanist text-base font-medium">
                  Thank you! Your inquiry has been sent successfully. Our team will contact you shortly.
                </span>
              </div>
            )}

            {errorMessage && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span className="font-urbanist text-base font-medium">
                  {errorMessage}
                </span>
              </div>
            )}

            {/* Row 1: First Name, Last Name, Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block font-urbanist font-semibold text-lg text-black">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full h-14 bg-[#F2F2F7] border border-[#262626] rounded-lg px-5 font-urbanist text-base text-gray-800 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-urbanist font-semibold text-lg text-black">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full h-14 bg-[#F2F2F7] border border-[#262626] rounded-lg px-5 font-urbanist text-base text-gray-800 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-urbanist font-semibold text-lg text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-14 bg-[#F2F2F7] border border-[#262626] rounded-lg px-5 font-urbanist text-base text-gray-800 focus:outline-none focus:border-brand-orange"
                />
              </div>
            </div>

            {/* Row 2: Phone, Project Type, Budget */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block font-urbanist font-semibold text-lg text-black">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-14 bg-[#F2F2F7] border border-[#262626] rounded-lg px-5 font-urbanist text-base text-gray-800 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-urbanist font-semibold text-lg text-black">
                  Select Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full h-14 bg-[#F2F2F7] border border-[#262626] rounded-lg px-5 font-urbanist text-base text-gray-800 focus:outline-none focus:border-brand-orange"
                >
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Open Plot Purchase</option>
                  <option>Villa Construction</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block font-urbanist font-semibold text-lg text-black">
                  Select Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full h-14 bg-[#F2F2F7] border border-[#262626] rounded-lg px-5 font-urbanist text-base text-gray-800 focus:outline-none focus:border-brand-orange"
                >
                  <option>₹30 Lakhs - ₹50 Lakhs</option>
                  <option>₹50 Lakhs - ₹1 Crore</option>
                  <option>₹1 Crore - ₹2 Crores</option>
                  <option>₹2 Crores+</option>
                </select>
              </div>
            </div>

            {/* Row 3: Message Textarea */}
            <div className="space-y-2">
              <label className="block font-urbanist font-semibold text-lg text-black">
                Your Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#F2F2F7] border border-[#262626] rounded-lg p-5 font-urbanist text-base text-gray-800 focus:outline-none focus:border-brand-orange"
              />
            </div>

            {/* Row 4: Checkbox & Submit */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="w-6 h-6 rounded bg-[#F2F2F7] border border-[#262626] text-brand-orange focus:ring-brand-orange"
                />
                <span className="font-urbanist font-medium text-base text-[#999999]">
                  I agree with Terms of Use and Privacy Policy
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto bg-[#FF8D28] text-white font-urbanist font-medium text-lg px-10 py-4 rounded-lg shadow-md hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
              >
                {submitting ? (
                  <>
                    <span>Sending...</span>
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
