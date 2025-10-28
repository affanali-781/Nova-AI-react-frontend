import React from "react";
import curveBottom from "../assets/images/curve-bottom.png";

const Footer = () => {
	return (
		<footer className="w-full flex justify-center items-center mt-[-5px] sm:mt-[-10px] mb-0 overflow-hidden">
			<img
				src={curveBottom}
				alt="Footer curve"
				className="w-full h-auto max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] object-contain"
			/>
		</footer>
	);
};

export default Footer;
