import React from "react";
import whatsappImg from "../assets/images/wtsapp-rt.png";
import whatsappCenter from "../assets/images/wtsapp-center.png";
import blockLeft from "../assets/images/block-lb.png";
import blockRight from "../assets/images/block-rb.png";

const HeroSection = () => {
	return (
		<section
			id="home"
			className="relative w-full min-h-screen flex flex-col justify-between items-center text-white font-inter pt-32 md:pt-44 px-6 md:px-20 overflow-hidden"
		>
			{/* TOP HALF */}
			<div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-10 lg:gap-20">
				{/* LEFT TEXT */}
				<div className="max-w-sm text-center md:text-left">
					<p className="text-base sm:text-lg md:text-xl font-light opacity-90 mt-4 md:mt-20">
						Nova AI, an Ethereum-based token, uses AI to simplify and enhance
						the crypto experience for WhatsApp users.
					</p>
				</div>

				{/* CENTER HEADING */}
				<div className="text-center leading-tight space-y-4 md:space-y-6">
					<div>
						<span className="text-5xl sm:text-6xl md:text-8xl xl:text-[90px] font-bold text-white">
							NOVA AI:
						</span>{" "}
						<span className="text-5xl sm:text-6xl md:text-8xl xl:text-[90px] font-bold text-[#65EC63]">
							ENHANCING
						</span>
					</div>
					<div>
						<span className="text-5xl sm:text-6xl md:text-8xl xl:text-[90px] font-bold text-[#65EC63]">
							CRYPTO
						</span>{" "}
						<span className="text-5xl sm:text-6xl md:text-8xl xl:text-[90px] font-bold text-white">
							THROUGH
						</span>
					</div>
					<div>
						<span className="text-5xl sm:text-6xl md:text-8xl xl:text-[90px] font-bold text-white">
							WHATSAPP
						</span>
					</div>
				</div>

				{/* RIGHT IMAGE + TEXT */}
				<div className="flex flex-col items-center text-center max-w-xs md:max-w-sm mt-8 md:mt-16 lg:mt-20">
					<img
						src={whatsappImg}
						alt="WhatsApp"
						className="w-32 sm:w-40 md:w-52 lg:w-60 xl:w-64 h-auto mb-4"
					/>
					<p className="text-base sm:text-lg md:text-xl font-light leading-snug opacity-90">
						Nova AI, an Ethereum-based token, enhances crypto experience for
						WhatsApp users.
					</p>
				</div>
			</div>

			{/* BOTTOM HALF */}
			<div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mt-10 sm:mt-0 pb-10">
				<img
					src={blockLeft}
					alt="Left block"
					className="w-48 sm:w-64 md:w-80 lg:w-[350px] h-auto"
				/>
				<img
					src={whatsappCenter}
					alt="Center WhatsApp graphic"
					className="w-72 sm:w-[500px] md:w-[700px] lg:w-[850px] xl:w-[900px] h-auto"
				/>
				<img
					src={blockRight}
					alt="Right block"
					className="w-40 sm:w-56 md:w-64 lg:w-[300px] h-auto"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
