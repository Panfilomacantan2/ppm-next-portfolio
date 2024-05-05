import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
	return (
		<footer className="container flex flex-col lg:flex-row justify-between items-start lg:items-center py-5 text-sm">
			<div className="flex flex-col  lg:flex-row lg:space-x-10">
				<p>© {new Date().getFullYear()} panfilo.dev</p>
				<p>All Rights Reserved</p>
				<p>Panfilo Panong Macantan</p>
			</div>

			<div className="flex my-4 space-x-4 ">
				<Link href="/" className="cursor-pointer text-lg">
					<FaGithub />
				</Link>
				<Link href="/" className="cursor-pointer text-lg">
					<FaLinkedin />
				</Link>
				<Link href="/" className="cursor-pointer text-lg">
					<FaFacebook />
				</Link>
				<Link href="/" className="cursor-pointer text-lg">
					<SiGmail />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
