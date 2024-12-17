import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-b from-slate-200">
      <div className="flex flex-col gap-8 py-12 mx-auto md:py-16 xl:max-w-screen-xl xl:py-24">
        <h2 className="text-5xl font-bold text-center">Contact</h2>
        <form
          className="flex flex-col gap-2 w-full max-w-screen-sm mx-auto"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Full Name</span>
            </div>
            <input type="text" name="name" placeholder="Enter your full name" className="input input-bordered w-full" />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input type="text" name="email" placeholder="Enter your email" className="input input-bordered w-full" />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Enter your message"
              name="message"
            ></textarea>
          </label>

          <button className="btn btn-neutral btn-outline rounded-lg text-lg mt-8" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
