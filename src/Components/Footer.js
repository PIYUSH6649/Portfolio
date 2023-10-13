import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Piyush Kumar</h4>
      <h4>Copyright &copy; 2023 PK</h4>
      <div className="footerLinks">
        <a
          href="https://github.com/PIYUSH6649"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/piyush-kumar-87ab26237/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailTo:piyush.oct21@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
