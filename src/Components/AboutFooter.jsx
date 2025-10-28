import React from "react";
import aboutFooterImg from "../assets/images/about-footer.png";

const AboutFooter = () => {
	return (
		<section className="flex flex-col justify-center items-center text-center text-white font-inter py-20 px-6 md:px-12 space-y-10">
			{/* Heading */}
			<h1 className="text-[60px] sm:text-[66px] md:text-[72px] font-bold leading-none">
				Find <span className="text-[#65EC63]">Nova AI</span> on
			</h1>

			{/* Image */}
			<img
				src={aboutFooterImg}
				alt="About Footer"
				className="w-full max-w-[1222px] h-auto object-contain"
			/>
		</section>
	);
};

export default AboutFooter;
