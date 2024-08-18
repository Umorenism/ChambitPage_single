import React, { useState, FormEvent } from "react";

const NewsLetter: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Message sent:", message);
    // Clear the input field
    setMessage("");
  };

  return (
    <footer className=" text-white py-6 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-lg font-bold mb-2">Stay Updated!</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center w-full max-w-md"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="flex-grow p-2 mb-4 md:mb-0 w-full md:mr-2 border border-gray-300 rounded-md text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </footer>
  );
};

export default NewsLetter;
