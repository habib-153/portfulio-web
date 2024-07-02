/* eslint-disable react/prop-types */

const ContactForm = ({ formData, handleChange, onSubmit }) => {
    return (
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
    );
};

export default ContactForm;