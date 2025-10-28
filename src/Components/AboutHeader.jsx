import React from "react";

const AboutHeader = () => {
	return (
		<section className="flex flex-col items-center justify-center text-center text-white font-inter pt-32 md:pt-44 px-6 md:px-20">
			{/* Heading 1 */}
			<h1 className="text-[64px] sm:text-[76px] md:text-[88px] font-bold text-[#65EC63] leading-tight">
				What is Nova AI?
			</h1>

			{/* Heading 2 */}
			<h2 className="text-[48px] sm:text-[60px] md:text-[72px] font-normal leading-tight mt-[20px]">
				Transforming Cryptocurrency Space
			</h2>

			{/* Paragraph */}
			<p className="w-full md:w-[calc(100%-212px)] md:mx-[106px] text-[20px] sm:text-[22px] md:text-[24px] font-normal px-[106px] text-center leading-relaxed opacity-90 mt-[40px]">
				Nova AI aims to transform the crypto space by making blockchain and
				cryptocurrency trading more accessible and user-friendly for WhatsApp
				users. Through AI-driven solutions and intuitive tools, it simplifies
				the user experience, empowering both new and experienced users.
			</p>
		</section>
	);
};

export default AboutHeader;
