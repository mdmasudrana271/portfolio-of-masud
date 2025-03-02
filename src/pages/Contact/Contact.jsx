import Lottie from "lottie-react";
import animation from "../../assets/animation/dev.json";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#0a192f] text-white">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-xl md:text-4xl font-bold leading-tight text-center text-[#64ffda]">
            💬 Let's Build Something Revolutionary!
          </h2>
          <div className="text-[#e1e6f0] text-center">
            Got an idea, feedback, or just want to chat? Reach out <br /> Let’s
            create something extraordinary together!
          </div>
        </div>
        <figure className="h-full md:w-80">
          <Lottie animationData={animation} loop={true} />
        </figure>
      </div>
      <form
        noValidate=""
        className="space-y-6"
        action="https://getform.io/f/923d35e5-4392-4fdd-8a69-533de3d72d65"
        method="POST"
      >
        <div>
          <label htmlFor="name" className="text-sm text-[#e1e6f0]">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full p-3 rounded bg-[#112240] text-[#e1e6f0] focus:ring-[#64ffda] focus:border-[#64ffda] border border-[#64ffda]"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-[#e1e6f0]">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full p-3 rounded bg-[#112240] text-[#e1e6f0] focus:ring-[#64ffda] focus:border-[#64ffda] border border-[#64ffda]"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-[#e1e6f0]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            required
            className="w-full p-3 rounded bg-[#112240] text-[#e1e6f0] focus:ring-[#64ffda] focus:border-[#64ffda] border border-[#64ffda]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#64ffda] hover:bg-[#48d1b2] text-[#0a192f] hover:text-white transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
