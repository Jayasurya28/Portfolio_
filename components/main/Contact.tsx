'use client';

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init({
      publicKey: "LPvvZqwm_Nc6NbAke",
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: "jayasurya1970@gmail.com",
        message: formData.message,
      };

      const response = await emailjs.send(
        'service_5n9v8kp',
        'template_jk4m2wq',
        templateParams,
        'LPvvZqwm_Nc6NbAke'
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="contact" className="relative flex items-center justify-center min-h-screen w-full py-20 px-4">
      {/* Background with encryption text */}
      <div className="absolute w-full h-full">
        <div className="w-full h-full absolute opacity-30">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/encryption.webm"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-[600px] backdrop-blur-sm bg-[#0C0728]/30 p-8 rounded-2xl z-[30]">
        <div className="mb-8">
          <h2 className="text-[16px] font-normal text-[#ADB7BE] mb-2">
            GET IN TOUCH
          </h2>
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Contact
          </h1>
        </div>
        
        {submitStatus.type && (
          <div 
            className={`mb-4 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/20 text-green-300' 
                : 'bg-red-500/20 text-red-300'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[#ADB7BE] text-[16px]">Your Name</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              required
              className="bg-[#0C0728]/50 text-white rounded-lg p-4 outline-none border-none placeholder-[#ADB7BE]/50 text-lg w-full focus:bg-[#0C0728]/70 transition-all duration-300"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[#ADB7BE] text-[16px]">Your email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              required
              className="bg-[#0C0728]/50 text-white rounded-lg p-4 outline-none border-none placeholder-[#ADB7BE]/50 text-lg w-full focus:bg-[#0C0728]/70 transition-all duration-300"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[#ADB7BE] text-[16px]">Your Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              required
              rows={6}
              className="bg-[#0C0728]/50 text-white rounded-lg p-4 outline-none border-none placeholder-[#ADB7BE]/50 text-lg resize-none w-full focus:bg-[#0C0728]/70 transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <button
            className={`w-[100px] bg-[#0C0728]/80 text-white font-medium text-lg py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#251c6d]'
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 