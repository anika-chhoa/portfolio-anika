export default function Contact() {
  return (
    <section className="mb-section-gap" id="contact">
      <div className="bg-surface border border-outline p-card-padding md:p-12 rounded-3xl grid lg:grid-cols-2 gap-16 shadow-premium">
        <div className="space-y-8">
          <h2 className="font-inter text-5xl font-extrabold text-on-surface leading-tight">Let's Work Together</h2>
          <p className="text-on-surface-variant text-lg font-inter">
            Have a project in mind or just want to chat about tech? Drop me a message and I'll get back to you within 24 hours.
          </p>
          <div className="grid gap-4">
            <a className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-variant transition-colors group" href="mailto:chhoa.anika07@gmail.com">
              <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center group-hover:bg-primary/20">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <p className="text-xs font-space text-on-surface-variant">Email Me</p>
                <p className="font-bold text-on-surface">chhoa.anika07@gmail.com</p>
              </div>
            </a>
            <a className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-variant transition-colors group" href="#">
              <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center group-hover:bg-primary/20">
                <span className="material-symbols-outlined text-primary">link</span>
              </div>
              <div>
                <p className="text-xs font-space text-on-surface-variant">LinkedIn</p>
                <p className="font-bold text-on-surface">www.linkedin.com/in/anika-mizan-chhoa</p>
              </div>
            </a>
          </div>
        </div>
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-space text-on-surface-variant ml-1">Name</label>
              <input className="w-full bg-surface border border-outline rounded-lg p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" placeholder="Enter Your Name" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-space text-on-surface-variant ml-1">Email</label>
              <input className="w-full bg-surface border border-outline rounded-lg p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" placeholder="Enter Your Email" type="email" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-space text-on-surface-variant ml-1">Message</label>
            <textarea className="w-full bg-surface border border-outline rounded-lg p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" placeholder="How can I help you?" rows="5"></textarea>
          </div>
          <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-premium" type="submit">
            Send Message
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </section>
  );
}
