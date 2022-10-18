import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a hefr="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a hefr="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a hefr="https://dribble.com" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
