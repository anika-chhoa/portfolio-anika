import { FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="mb-section-gap px-6 md:px-12" id="contact">
      <div className="bg-surface border border-outline p-6 sm:p-10 md:p-12 rounded-3xl grid lg:grid-cols-2 gap-12 md:gap-16 shadow-premium">
        <div className="space-y-8 text-center lg:text-left">
          <h2 className="font-inter text-3xl md:text-5xl font-extrabold text-on-surface leading-tight">Let's Work Together</h2>
          <p className="text-on-surface-variant text-sm md:text-lg font-inter">
            Have a project in mind or just want to chat about tech? Drop me a message and I'll get back to you within 24 hours.
          </p>
          <div className="grid gap-4 max-w-md mx-auto lg:mx-0">
            <a className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-variant transition-colors group" href="mailto:chhoa.anika07@gmail.com">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary-container flex items-center justify-center group-hover:bg-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-xl md:text-2xl">mail</span>
              </div>
              <div className="text-left overflow-hidden">
                <p className="text-[10px] md:text-xs font-space text-on-surface-variant uppercase tracking-wider">Email Me</p>
                <p className="font-bold text-sm md:text-base text-on-surface break-all">chhoa.anika07@gmail.com</p>
              </div>
            </a>
            <a className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-variant transition-colors group" href="#" target="_blank">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary-container flex items-center justify-center group-hover:bg-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary"><FaPhone className="text-sm" /></span>
              </div>
              <div className="text-left overflow-hidden">
                <p className="text-[10px] md:text-xs font-space text-on-surface-variant uppercase tracking-wider">Mobile</p>
                <p className="font-bold text-sm md:text-base text-on-surface truncate">01761651313</p>
              </div>
            </a>
          </div>
        </div>
        <form className="space-y-4 md:space-y-6">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="text-xs font-space text-on-surface-variant ml-1">Name</label>
              <input className="w-full bg-surface border border-outline rounded-lg p-3 md:p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface text-sm md:text-base" placeholder="Enter Your Name" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-space text-on-surface-variant ml-1">Email</label>
              <input className="w-full bg-surface border border-outline rounded-lg p-3 md:p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface text-sm md:text-base" placeholder="Enter Your Email" type="email" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-space text-on-surface-variant ml-1">Message</label>
            <textarea className="w-full bg-surface border border-outline rounded-lg p-3 md:p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface text-sm md:text-base" placeholder="How can I help you?" rows="4 md:rows-5"></textarea>
          </div>
          <button className="w-full py-3 md:py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-premium" type="submit">
            Send Message
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </section>
  );
}
