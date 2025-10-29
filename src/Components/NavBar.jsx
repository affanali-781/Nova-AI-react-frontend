import React, { useState } from "react";
import logo from "../assets/images/nova-logo.png";
import twitterIcon from "../assets/images/twitter.png";
import telegramIcon from "../assets/images/telegram.png";

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState < boolean > false;

	return (
		<nav className="w-full fixed top-0 left-0 z-[9999] bg-black/50 px-6 md:px-10 py-4 flex justify-between items-center backdrop-blur-md">
			{/* LEFT — LOGO */}
			<a href="#home" className="flex items-center space-x-2">
				<img
					src={logo}
					alt="Nova AI Logo"
					className="w-12 h-12 md:w-14 md:h-14 object-contain hover:scale-105 transition-transform duration-200"
				/>
			</a>

			{/* CENTER — NAV LINKS (Hidden on Mobile) */}
			<ul className="hidden md:flex items-center bg-[#111C14]/90 rounded-full px-8 py-3 space-x-8 shadow-lg">
				{["Home", "About", "Tokenomics", "Utilities", "Roadmap"].map((item) => (
					<li key={item}>
						<a
							href={`#${item.toLowerCase()}`}
							className="text-gray-300 hover:text-white transition duration-200 text-sm md:text-base"
						>
							{item}
						</a>
					</li>
				))}

				<li>
					<button className="ml-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition duration-200 text-sm md:text-base">
						Try Bot
					</button>
				</li>
			</ul>

			{/* RIGHT — SOCIAL ICONS + TOGGLE */}
			<div className="flex items-center space-x-2">
				{/* Desktop Icons */}
				<div className="hidden sm:flex space-x-2">
					<a
						href="#"
						className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex justify-center items-center hover:bg-gray-800 transition duration-200"
					>
						<img
							src={twitterIcon}
							alt="Twitter"
							className="w-6 h-6 object-contain"
						/>
					</a>
					<a
						href="#"
						className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex justify-center items-center hover:bg-gray-800 transition duration-200"
					>
						<img
							src={telegramIcon}
							alt="Telegram"
							className="w-6 h-6 object-contain"
						/>
					</a>
				</div>

				{/* MOBILE MENU TOGGLE */}
				<button
					className="md:hidden flex flex-col justify-center items-center space-y-1 focus:outline-none ml-2 group"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{/* Top Line */}
					<span
						className={`block w-8 h-[3px] rounded-full bg-white transition-transform duration-300 ${
							menuOpen ? "rotate-45 translate-y-[6px]" : ""
						} group-hover:bg-green-400`}
					></span>

					{/* Middle Line */}
					<span
						className={`block w-8 h-[3px] rounded-full bg-white transition-opacity duration-300 ${
							menuOpen ? "opacity-0" : ""
						} group-hover:bg-green-400`}
					></span>

					{/* Bottom Line */}
					<span
						className={`block w-8 h-[3px] rounded-full bg-white transition-transform duration-300 ${
							menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
						} group-hover:bg-green-400`}
					></span>
				</button>
			</div>

			{/* MOBILE MENU */}
			{menuOpen && (
				<div className="absolute top-[70px] left-0 w-full z-[9998] bg-[#111C14]/95 backdrop-blur-md py-10 flex flex-col items-center space-y-5 md:hidden transition-all duration-300">
					{["Home", "About", "Tokenomics", "Utilities", "Roadmap"].map(
						(item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								onClick={() => setMenuOpen(false)}
								className="text-gray-300 hover:text-white transition duration-200 text-lg"
							>
								{item}
							</a>
						)
					)}
					<button
						onClick={() => setMenuOpen(false)}
						className="bg-green-500 hover:bg-green-600 text-white px-10 py-2 rounded-full font-semibold transition duration-200"
					>
						Try Bot
					</button>

					<div className="flex space-x-4 mt-4">
						<img
							src={twitterIcon}
							alt="Twitter"
							className="w-8 h-8 object-contain"
						/>
						<img
							src={telegramIcon}
							alt="Telegram"
							className="w-8 h-8 object-contain"
						/>
					</div>
				</div>
			)}
		</nav>
	);
};

export default NavBar;
