import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('5HSbXdmY2E5msQVOE'); // Your public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   if (validate()) {
  //     setIsSubmitting(true);
      
  //     try {
  //       const response = await emailjs.send(
  //         'service_4j5uvt6', // Note: service IDs are case-sensitive
  //         'template_lrabsev', // Note: template IDs are case-sensitive
  //         {
  //           name: formData.name,
  //           email: formData.email,
  //           message: formData.message,
  //           time: new Date().toLocaleString()
  //         }
  //       );

  //       console.log('EmailJS Response:', response);
  //       setSubmitMessage('Message sent successfully!');
  //       setFormData({ name: '', email: '', message: '' });
  //     } catch (err) {
  //       console.error('EmailJS Error:', err);
  //       setSubmitMessage(`Failed to send: ${err.text || 'Please check your connection'}`);
  //     } finally {
  //       setIsSubmitting(false);
  //       setTimeout(() => setSubmitMessage(''), 5000);
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (validate()) {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://smartsales-backend.onrender.com/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });
      if (response.ok) {
        setSubmitMessage('Message saved successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to save');
      }
    } catch (err) {
      setSubmitMessage('Failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }
};
  
  return (



    <section id="contact" className="bg-gray-100 py-16 px-6">
   
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">Feel free to contact us any time. We will get back to you as soon as we can!</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name" 
                className="w-full px-3 py-2 border border-gray-400 rounded-2xl focus:outline-none focus:border-yellow-500" 
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email" 
                className="w-full px-3 py-2 border border-gray-400 rounded-2xl focus:outline-none focus:border-yellow-500" 
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message" 
                className="w-full px-3 py-2 border border-gray-400 rounded-2xl focus:outline-none focus:border-yellow-500" 
                rows="4"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button 
              type="submit" 
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg uppercase hover:bg-yellow-500 transition disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </button>
            {submitMessage && (
              <p className={`text-sm mt-2 ${submitMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
        <div className="bg-gray-200 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500 mt-1 text-xl" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-700">@MasteringBusinessGrowth</p>
                <p className="text-gray-700">@EdwardNdegwa</p>
                <p className="text-gray-700">@SmartsalesKenya</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-yellow-500 text-xl" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-700">0734516091 | 0777516091</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mt-1 text-xl" />
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-gray-700">Nairobi Garage - Kilimani</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default Contact;