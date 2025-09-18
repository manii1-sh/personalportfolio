import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";

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
      style={{ zIndex: 99999 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className={`absolute top-6 left-1/2 transform -translate-x-1/2 pointer-events-auto p-5 rounded-xl shadow-2xl border-2 max-w-lg w-auto min-w-[300px] ${
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
