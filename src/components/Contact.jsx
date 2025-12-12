import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { socialLinks, contactInfo } from "../constants";

// Custom Toast Notification Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 999999 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className={`absolute top-20 left-1/2 transform -translate-x-1/2 pointer-events-auto p-5 rounded-xl shadow-2xl border-2 max-w-lg w-auto min-w-[300px] ${
          type === 'success' 
            ? 'bg-green-500 border-green-400 text-white' 
            : type === 'error'
            ? 'bg-red-500 border-red-400 text-white'
            : 'bg-yellow-500 border-yellow-400 text-white'
        }`}
        style={{ 
          backdropFilter: 'blur(10px)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
        }}
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold pr-4">{message}</p>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 text-xl font-bold ml-2 w-6 h-6 flex items-center justify-center"
          >
            ✕
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// template_a403fhr (Contact Us)
// service_5hdfkum
// AovRWq2kHzdnZRAIZ

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const [toast, setToast] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("AovRWq2kHzdnZRAIZ");
    console.log("EmailJS initialized with public key: AovRWq2kHzdnZRAIZ");
  }, []);
  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!form.name.trim()) {
      showToast("Please enter your name", "error");
      return;
    }
    if (!form.email.trim()) {
      showToast("Please enter your email", "error");
      return;
    }
    if (!form.message.trim()) {
      showToast("Please enter a message", "error");
      return;
    }
    
    setloading(true);
    console.log("Sending email with data:", {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    });

    // template_a403fhr (Contact Us)
    // service_5hdfkum
    // AovRWq2kHzdnZRAIZ

    emailjs
      .send(
        "service_5hdfkum",
        "template_a403fhr",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "AovRWq2kHzdnZRAIZ"
      )
      .then(
        (response) => {
          setloading(false);
          console.log("Email sent successfully:", response);
          showToast("Thank you! I will get back to you as soon as possible.", "success");
          setform({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setloading(false);
          console.error("EmailJS Error:", error);
          showToast("Failed to send message. Please try again later.", "error");
        }
      );
  };
  return (
    <>
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={hideToast} 
        />
      )}
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handlesubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handlechange}
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handlechange}
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={5}
              type="text"
              name="message"
              value={form.message}
              onChange={handlechange}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Contact Info & Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col gap-4 mb-6">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-white hover:text-[#915eff] transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-[#915eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-secondary">{contactInfo.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-white hover:text-[#915eff] transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-[#915eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-secondary">{contactInfo.email}</span>
            </a>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary p-3 rounded-full hover:bg-[#915eff] transition-colors duration-300"
                title={social.name}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
