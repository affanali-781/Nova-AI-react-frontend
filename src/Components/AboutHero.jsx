import React from "react";
import aboutLeft from "../assets/images/about-hero-left.png";
import aboutRight from "../assets/images/about-hero-right.png";

const AboutHero = () => {
	return (
		<section className="flex flex-col md:flex-row justify-center items-center gap-[60px] md:gap-[290px] py-24">
			{/* Left Image */}
			<img
				src={aboutLeft}
				alt="About Hero Left"
				className="w-[420px] h-[322px] object-contain md:object-cover"
			/>

			{/* Right Image */}
			<img
				src={aboutRight}
				alt="About Hero Right"
				className="w-[432px] h-[491px] object-contain"
			/>
		</section>
	);
};

export default AboutHero;
