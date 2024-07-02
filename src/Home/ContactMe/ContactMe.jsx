/* eslint-disable no-unused-vars */
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import ContactBadge from "../../Component/Contact/ContactBadge";
import ContactInfo from "../../Component/Contact/ContactInfo";
import ContactForm from "../../Component/Contact/ContactForm";
const ContactMe = () => {
  const [formData, setFormData] = useState({ from_name: "", to_name: "", subject: "", message: "", reply_to: "" });
  const { VITE_SERVICE_ID: serviceId, VITE_TEMPLATE_ID: templateId, VITE_USER_ID: userId } = import.meta.env;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send(serviceId, templateId, formData, userId)
      .then(() => {
        toast.success("Your message has been sent successfully.");
        setFormData({ from_name: "", to_name: "", subject: "", message: "", reply_to: "" });
      }, () => {
        toast.error("Sending Failed");
      });
  };
  return(
    <div className="my-12">
      <h2
        data-aos="fade-up"
        data-aos-duration="300"
        className="text-center text-3xl font-semibold"
      >
        Contact Me
      </h2>
      <div className="flex flex-wrap gap-4 my-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <ContactBadge />
          <ContactInfo />
        </div>
        <ContactForm formData={formData} handleChange={handleChange} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default ContactMe;
