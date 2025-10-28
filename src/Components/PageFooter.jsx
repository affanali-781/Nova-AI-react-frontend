import React from "react";
import logo from "../assets/images/nova-logo.png";
import social1 from "../assets/images/telegram.png";
import social2 from "../assets/images/twitter.png";

const PageFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full bg-[#091212] text-white py-8 px-4 flex justify-between">
			<div className="max-w-6xl mx-auto">
				{/* Main footer content */}
				<div className="flex flex-col lg:flex-row items-center justify-between gap-6">
					{/* Left section - Logo and description */}
					<div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
						<img
							src={logo}
							alt="Nova AI Logo"
							className="w-12 h-12 object-contain"
						/>
						<div className="max-w-md">
							<p className="text-sm text-gray-300 leading-relaxed">
								Nova AI, an Ethereum-based token, uses AI to simplify and
								enhance the crypto experience for WhatsApp users.
							</p>
						</div>
					</div>

					{/* Right section - Social links */}
					<div className="flex items-center gap-4">
						<a
							href="#"
							className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
							aria-label="Telegram"
						>
							<img
								src={social1}
								alt="Telegram"
								className="w-6 h-6 object-contain"
							/>
						</a>
						<a
							href="#"
							className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
							aria-label="Twitter"
						>
							<img
								src={social2}
								alt="Twitter"
								className="w-6 h-6 object-contain"
							/>
						</a>
					</div>
				</div>

				{/* Bottom section - Copyright and links */}
				<div className="mt-8 pt-6 border-t border-gray-700">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						{/* Copyright */}
						<div className="text-sm text-gray-400">
							©{currentYear} Nova AI. All rights reserved.
						</div>

						{/* Legal links */}
						<div className="flex flex-wrap items-center justify-center gap-6 text-sm">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Terms & Conditions
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Contact Us
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Links
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default PageFooter;
