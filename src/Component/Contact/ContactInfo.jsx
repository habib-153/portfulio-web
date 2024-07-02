import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../../Home/ContactMe/custom.css'

const ContactInfo = () => {
  return (
    <div className="flex flex-wrap md:flex-col  gap-6">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="border border-[#DCDCDC] w-full custom rounded-2xl"
      >
        <div className="bg-[#e9e5df] flex items-center gap-1 text-[#075E54]  font-semibold rounded-t-xl p-3">
          WhatsApp
          <FaWhatsapp />
        </div>
        <div className="p-4 font-medium">
          <p>+8801575632219</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="border w-full custom border-[#DCDCDC]  rounded-2xl"
      >
        <div className="bg-[#f2a50c5d] flex items-center gap-1 text-[#c71610]  font-semibold rounded-t-xl p-3">
          Email
          <MdEmail />
        </div>
        <div className="p-4 font-medium">
          <a href="mailto:h.r.sihab155@gmail.com">h.r.sihab155@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
