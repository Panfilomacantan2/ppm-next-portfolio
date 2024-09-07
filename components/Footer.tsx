import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-between px-3 py-5 text-sm lg:flex-row lg:items-center">
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        <p>©{new Date().getFullYear()} panfilo.dev</p>
        <p>All Rights Reserved</p>
        <p>Panfilo Panong Macantan</p>
      </div>

      <div className="my-4 flex space-x-4">
        <Link
          href="https://github.com/Panfilomacantan2"
          className="cursor-pointer text-lg"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/panfilo-panong-macantan/"
          className="cursor-pointer text-lg"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://www.facebook.com/panfilo.macantan/"
          className="cursor-pointer text-lg"
          target="_blank"
        >
          <FaFacebook />
        </Link>
        <Link
          href="mailto:panfilomacantan.pm@gmail.com"
          className="cursor-pointer text-lg"
          target="_blank"
        >
          <SiGmail />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
