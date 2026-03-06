"use client"
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser"
import {   useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact =()=> {
  const servieId = "service_gnwvi0u";
  const templateId  = "template_ztfn0p4"
  const publicId = "xbQRBpliTl3526YM4"
  const [name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[message, setMessage] = useState("")
  
  const templateParams = {
  name: name,
  email: email,
  message: message,
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      servieId,
      templateId,
      // e.currentTarget(),
      templateParams,
      publicId
    ).then((res) => {
        alert("Message Sent!");
        console.log('email send successfully', res)
        setName("")
        setEmail("")
        setMessage("")
      }).catch((error) =>{
        console.log(error);
         alert("Failed to send");
        })
    
  };

  return (
    <>

      <main className="container mx-auto p-6" id="contact">
        <h1 className="text-4xl font-bold mb-6 text-center mt-5">Contact Me</h1>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
          
          <div className="flex-1 max-w-150 mt-15">
            <form onSubmit={sendEmail}
              method="GET"
              className="flex flex-col gap-4 "
              id="myForm"
            >
              <label className="flex flex-col font-medium my-2 ">
                Name
              </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="border p-4 py-5 mt-2 rounded focus:outline-none "
                  
                />
              <label className="flex flex-col font-medium">
                Email
              </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  className="border  p-4 py-5 mt-2 rounded focus:outline-none "
                  required
                />
              <label className="flex flex-col font-medium">
                Message
              </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  className="border p-4 py-6 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  
                />
              <button className="cursor-pointer bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors"  >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex-1 max-w-xs flex flex-col items-center gap-6 mt-30">
            <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
            <div className="flex gap-6 text-3xl">
              <a
                href="https://github.com/alihossen4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/md-ali-hossen-a8baaa341"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:mdahossen.dev@gmail.com"
                className="hover:text-red-600 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
            <p className="text-center mt-4 text-xl">
              You can also reach me directly at <br />
              <a
                href="#"
                className="text-blue-600 text-xl hover:underline"
                
              >
                mdahossen.dev@gmail.com
              </a>
            </p>

          </div>
        </div>
      </main>
      </>
  );
}