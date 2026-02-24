'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setStatus('success')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        >
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-6">
          Thank you for contacting us. We'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-green-600 hover:text-green-700 font-semibold underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-3.5 bg-white border-2 rounded-xl transition-all duration-300 outline-none
    ${focusedField === fieldName
      ? 'border-primary-500 shadow-lg shadow-primary-500/10'
      : 'border-slate-200 hover:border-slate-300'}
  `

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
            First Name <span className="text-primary-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onFocus={() => setFocusedField('firstName')}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClasses('firstName')}
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
            Last Name <span className="text-primary-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onFocus={() => setFocusedField('lastName')}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClasses('lastName')}
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          Email Address <span className="text-primary-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          required
          className={inputClasses('email')}
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onFocus={() => setFocusedField('phone')}
          onBlur={() => setFocusedField(null)}
          className={inputClasses('phone')}
          placeholder="(540) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Message <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          required
          rows={5}
          className={`${inputClasses('message')} resize-none`}
          placeholder="Tell us about your chimney service needs..."
        />
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl"
          >
            <AlertCircle className="h-5 w-5" />
            <span>Something went wrong. Please try again.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={status === 'submitting'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </motion.button>

      <p className="text-sm text-slate-500 text-center">
        Or call us directly at{' '}
        <a href="tel:5402390440" className="text-primary-600 hover:text-primary-700 font-semibold">
          (540) 239-0440
        </a>
      </p>
    </form>
  )
}
