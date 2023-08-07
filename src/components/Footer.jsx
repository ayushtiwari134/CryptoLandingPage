import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
const Footer = () => {
  return (
    <section className="flex flex-col justify-evenly gap-5 items-center featured bg-gray-100">
      <div className="top">
        <h1 className="text-5xl">
          De<span className="text-green-600">Fi</span>
        </h1>
      </div>
      <div className="links">
        <ul className="flex gap-8">
          <li>
            <a href="https://www.github.com/ayushtiwari134" target="_blank">
              <AiFillGithub size={40} />
            </a>
          </li>
          <li className="text-blue-600">
            <a
              href="https://www.linkedin.com/in/ayush-tiwari-ba10aa264/"
              target="_blank"
            >
              <AiFillLinkedin size={40} />
            </a>
          </li>
          <li className="text-pink-600">
            <a href="https://www.instagram.com/_.aaayuxh_" target="_blank">
              <AiOutlineInstagram size={40} />
            </a>
          </li>
          <li className="text-blue-400">
            <a href="https://www.twitter.com" target="_blank">
              <AiOutlineTwitter size={40} />
            </a>
          </li>
          <li>
            <a href="https://www.gmail.com" target="_blank">
              <AiOutlineMail size={40} />
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom flex items-center">
        <BiCopyright />
        <p>
          2023 De<span className="text-green-600">Fi</span> . All rights
          reserved.
        </p>
      </div>
      <p>Created by Ayush</p>
    </section>
  );
};

export default Footer;
