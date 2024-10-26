import React from 'react';
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
  return (
    <div className="contact-form">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdK5AR_vglAIkGaGCsJybDj_GTXHEmXdURW3I9OWcTX-rtJgQ/viewform?embedded=true"
        width="100%" /* Redundant with CSS, but can be left here */
        height="520"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading...
      </iframe>
    </div>
  );
};

export default ContactForm;

// export default ContactForm;
// import React from 'react';
// import emailjs from '@emailjs/browser';
// import toast from 'react-hot-toast';
// import { Send } from 'lucide-react';

// const ContactForm = () => {
//   const formRef = React.useRef<HTMLFormElement>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formRef.current) return;

//     toast.promise(
//       emailjs.sendForm(
//         'service_m6bka48', // Replace with your EmailJS service ID
//         'template_ppkmbq6', // Replace with your EmailJS template ID
//         formRef.current,
//         'uLmdmJF6XPKHyH27h' // Replace with your EmailJS public key
//       ),
//       {
//         loading: 'Sending message...',
//         success: 'Message sent successfully!',
//         error: 'Failed to send message. Please try again.',
//       }
//     );

//     formRef.current.reset();
//   };

//   return (
//     <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Email
//         </label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="phone"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Phone Number
//         </label>
//         <input
//           type="tel"
//           name="phone"
//           id="phone"
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="message"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Message
//         </label>
//         <textarea
//           name="message"
//           id="message"
//           rows={4}
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//       >
//         <Send className="h-4 w-4 mr-2" />
//         Send Message
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

