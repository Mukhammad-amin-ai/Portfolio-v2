'use client'

import {SyntheticEvent, useState} from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState('')

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.'
    }

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    setErrors({...errors, [e.target.name]: ''})
  }

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Honeypot check
    const hp = (e.target as HTMLFormElement).elements.namedItem('hp') as HTMLInputElement
    if (hp?.value) return

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')

    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('message', formData.message)

    try {
      const response = await fetch(
       'https://script.google.com/macros/s/AKfycbxtM8evccgPBCDvwmAN25_qP1t1Qc2veZ6eWngXP8OkYBZTQayF5N2cv8oxYVfnsvMk/exec',
       {
         method: 'POST',
         body: formDataToSend,
       }
      )

      if (response.ok) {
        setStatus('success')
        setFormData({name: '', email: '', message: ''})
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
   <section
    id="Contact"
    className="sm:w-[36rem] w-[100%] mx-auto my-10 px-6 sm:px-10 xl:px-14 py-12 rounded-2xl backdrop-blur-xl bg-[rgba(209,209,199,0.05)] border border-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
   >
     <h2
      className="text-center text-[length:var(--text-h4)] font-medium mb-8 text-[var(--color-accent-200)] tracking-tight">
       Say Hello
     </h2>

     <form
      noValidate
      className="space-y-4 gform"
      method="POST"
      onSubmit={handleSubmit}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
        }
      }}
     >
       <input type="text" name="hp" style={{display: 'none'}} tabIndex={-1} autoComplete="off"/>

       <div>
         <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full placeholder:font-[400] font-normal text-[length:var(--text-base)] rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
         />
         <p
          className={`text-red-400 text-sm mt-1 h-5 transition-all duration-300 ${
           errors.name ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
         >
           {errors.name || ''}
         </p>
       </div>

       <div className="relative">
         <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full placeholder:font-[400] text-[length:var(--text-base)] font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
         />
         <p
          className={`text-red-400 text-sm mt-1 transition-all duration-300 ${
           errors.email ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
         >
           {errors.email || 'Placeholder'}
         </p>
       </div>

       <div>
          <textarea
           name="message"
           placeholder="Your message or project details..."
           rows={5}
           value={formData.message}
           onChange={handleChange}
           required
           className="w-full placeholder:font-[400] font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition resize-none"
          />
         <p
          className={`text-red-400 text-sm mt-1 h-5 transition-all duration-300 ${
           errors.message ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
         >
           {errors.message || ''}
         </p>
       </div>

       <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full px-6 py-3 rounded-xl font-semibold tracking-wide text-[length:var(--text--small)] transition-all duration-100 ${
         status === 'loading'
          ? 'bg-[var(--color-accent-200)] text-black cursor-not-allowed animate-pulse-subtle'
          : 'bg-[var(--color-accent-200)] text-black hover:bg-white active:scale-[0.98] active:shadow-inner'
        }`}
       >
         {status === 'loading' ? 'Sending...' : 'Send Message'}
       </button>

       {status === 'success' && (
        <p className="text-[--color-accent-400] text-center">
          Thank you! I`ll get back to you soon.
        </p>
       )}
     </form>
   </section>
  )
}
