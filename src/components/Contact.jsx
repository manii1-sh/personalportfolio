import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";

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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("AovRWq2kHzdnZRAIZ");
    console.log("EmailJS initialized with public key: AovRWq2kHzdnZRAIZ");
  }, []);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!form.name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!form.email.trim()) {
      alert("Please enter your email");
      return;
    }
    if (!form.message.trim()) {
      alert("Please enter a message");
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
          alert("Thank you! I will get back to you as soon as possible.");
          setform({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setloading(false);
          console.error("EmailJS Error:", error);
          alert(`Failed to send message. Error: ${error.text || error.message || "Unknown error"}`);
        }
      );
  };
  return (
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
  );
};

export default SectionWrapper(Contact, "contact");
