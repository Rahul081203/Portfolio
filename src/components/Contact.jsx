import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="w-full min-h-screen p-8">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text">Get In Touch</h2>
          <p className="text-gray-400 mt-4">Let's connect and discuss opportunities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#112240] text-gray-300 border border-gray-700 focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#112240] text-gray-300 border border-gray-700 focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 rounded-lg bg-[#112240] text-gray-300 border border-gray-700 focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] outline-none transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20 transition-colors"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-[#112240] p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#64ffda]/10 rounded-lg">
                  <Mail className="h-6 w-6 text-[#64ffda]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100">Email Me</h3>
                  <p className="text-gray-400">Get in touch via email</p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/rahul-sharma-188117253/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[#0a192f] hover:bg-[#64ffda]/5 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-[#64ffda]" />
                  <span className="text-gray-300">Connect on LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Rahul081203"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[#0a192f] hover:bg-[#64ffda]/5 transition-colors"
                >
                  <Github className="h-6 w-6 text-[#64ffda]" />
                  <span className="text-gray-300">Follow on GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;