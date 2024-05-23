/* eslint-disable no-unused-vars */
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactMe() {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    subject: "",
    message: "",
    reply_to: "",
  });

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
        "service_a9z4p1c",
        // Replace with your template ID
        "template_0y4sa3m",
        // The form data
        formData,
        // Replace with your user ID
        "BUNP8XV4xpWyNkcmD"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div>
          <h2 className="font-medium text-xl mb-2">Lets Contact with me</h2>
          <div className="flex justify-between">
            <div 
              data-aos="fade-up"
              data-aos-duration="2000"
              className="badge-base LI-profile-badge"
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
            <div className="flex flex-col  gap-6">
              <div className="border border-[#DCDCDC] rounded-2xl">
                <div className="bg-[#e9e5df] flex items-center gap-1 text-[#075E54]  font-semibold rounded-t-xl p-3">
                  WhatsApp
                  <FaWhatsapp />
                </div>
                <div className="p-4 font-medium">
                  <p>+8801575632219</p>
                </div>
              </div>
              <div className="border border-[#DCDCDC] rounded-2xl">
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
        </div>
        <div>
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
                data-aos-duration="300"
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
                data-aos="fade-down"
                data-aos-duration="300"
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
                data-aos="fade-down"
                data-aos-duration="300"
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
                data-aos-duration="300"
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
