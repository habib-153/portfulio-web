/* eslint-disable no-unused-vars */
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './custom.css'
function ContactMe() {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    subject: "",
    message: "",
    reply_to: "",
  });

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const userId = import.meta.env.VITE_USER_ID;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        // Replace with your service ID
        serviceId,
        // Replace with your template ID
        templateId,
        // The form data
        formData,
        // Replace with your user ID
        userId
      )
      .then(
        (result) => {
          // Show a success message to the user
          toast.success("Your message has been sent successfully.");
          // Reset the form data
          setFormData({
            from_name: "",
            to_name: "",
            subject: "",
            message: "",
            reply_to: "",
          });
        },
        (error) => {
          // Show an error message to the user
          toast.error("Sending Failed");
        }
      );
  };

  return (
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
          <div 
            data-aos="fade-up"
            data-aos-duration="1500"
            className="badge-base LI-profile-badge hidden md:block"
            data-locale="en_US"
            data-size="medium"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="habiburrahman153"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://bd.linkedin.com/in/habiburrahman153?trk=profile-badge"
            ></a>
          </div>
          <div 
            data-aos="fade-up"
            data-aos-duration="2000"
            className="badge-base LI-profile-badge md:hidden"
            data-locale="en_US"
            data-size="large"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="habiburrahman153"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://bd.linkedin.com/in/habiburrahman153?trk=profile-badge"
            ></a>
          </div>
          <div className="flex flex-wrap md:flex-col  gap-6">
            <div data-aos="fade-up"
                data-aos-duration="1000" className="border border-[#DCDCDC] w-full custom rounded-2xl">
              <div className="bg-[#e9e5df] flex items-center gap-1 text-[#075E54]  font-semibold rounded-t-xl p-3">
                WhatsApp
                <FaWhatsapp />
              </div>
              <div className="p-4 font-medium">
                <p>+8801575632219</p>
              </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="1000" className="border w-full custom border-[#DCDCDC]  rounded-2xl">
              <div className="bg-[#f2a50c5d] flex items-center gap-1 text-[#c71610]  font-semibold rounded-t-xl p-3">
                Email
                <MdEmail />
              </div>
              <div className="p-4 font-medium">
                <a href="mailto:h.r.sihab155@gmail.com">
                  h.r.sihab155@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form className="space-y-3" onSubmit={onSubmit}>
            <div className="form-control">
              <input
                data-aos="fade-up"
                data-aos-duration="300"
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="input input-bordered rounded-md input-primary w-full"
                value={formData.from_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <input
                data-aos="fade-up"
                data-aos-duration="1000"
                type="email"
                name="reply_to"
                placeholder="Your Email"
                className="input input-bordered rounded-md input-primary w-full"
                value={formData.reply_to}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <input
                data-aos="fade-up"
                data-aos-duration="1000"
                type="text"
                name="subject"
                placeholder="Topic/Subject"
                className="input input-bordered rounded-md input-primary w-full"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <textarea
                data-aos="fade-up"
                data-aos-duration="1000"
                name="message"
                className="textarea textarea-primary  rounded-md w-full"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="w-full text-center">
              <button
                data-aos="fade-up"
                data-aos-duration="1000"
                className="btn btn-outline text-[17px] border-cyan-500 hover:bg-[#0db3eae1]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
