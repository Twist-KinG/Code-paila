import React from "react";

const Contact = () => {
  return (
    <section className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="border p-2 rounded"
        ></textarea>
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
