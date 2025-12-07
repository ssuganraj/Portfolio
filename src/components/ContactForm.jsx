import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    if (!web3formsKey) {
      // Fallback to mailto
      const mailtoLink = `mailto:suganrajsms@gmail.com?subject=Contact from Portfolio&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      window.location.href = mailtoLink
      setStatus('sent')
      return
    }

    try {
      const formDataToSend = new FormData(e.target)
      formDataToSend.append('access_key', web3formsKey)
      formDataToSend.append('subject', 'Contact from Portfolio')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === 'sending'
          ? 'Sending...'
          : status === 'success'
          ? 'Message Sent!'
          : status === 'error'
          ? 'Error - Try Again'
          : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm

