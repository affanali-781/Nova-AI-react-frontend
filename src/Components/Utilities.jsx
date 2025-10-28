import React from "react";
import lineImg from "../assets/images/line.png";
import phoneImg from "../assets/images/utilities-phone-r.png";
import buttonsImg from "../assets/images/buttons.png";

const Utilities = () => {
	return (
		<div className="w-full max-w-[80%] mx-auto min-h-screen flex flex-col lg:flex-row justify-around bg-black text-white px-6 sm:px-10 lg:px-16 py-20 mt-25">
			{/* Left Half */}
			<div className="w-full lg:w-2/5 flex flex-col justify-start gap-6 mb-10 lg:mb-0">
				{/* Top line */}
				<img
					src={lineImg}
					alt="line"
					className="w-[128.5px] sm:w-[100px] mx-auto lg:mx-0"
				/>

				{/* Heading */}
				<h1 className="text-[48px] sm:text-[60px] lg:text-[74px] font-bold leading-[100%] font-inter text-center lg:text-left">
					Utilities of
				</h1>
				<h1 className="text-[52px] sm:text-[66px] lg:text-[78px] font-bold leading-[100%] text-[#65EC63] inline-block px-1 font-inter text-center lg:text-left">
					Nova AI
				</h1>

				{/* Paragraph */}
				<p className="text-[18px] sm:text-[22px] lg:text-[28px] font-light leading-[130%] font-inter mt-6 w-full max-w-[340px] mx-auto lg:mx-0 text-center lg:text-left">
					Nova AI features an ever-expanding suite of advanced tools and
					utilities, continually enhanced with cutting-edge technology,
					including but not limited to:Nova AI features an ever-expanding suite
					of advanced tools and utilities, continually enhanced with
					cutting-edge technology, including but not limited to:Nova AI features
					an ever-expanding suite of advanced tools and utilities, continually
					enhanced.
				</p>
			</div>

			{/* Right Half */}
			<div className="w-full lg:max-w-[814px] flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start lg:ml-12 mt-15">
				{/* Top Section */}
				<div className="flex flex-col sm:flex-row gap-8 items-center">
					<img
						src={phoneImg}
						alt="utilities phone"
						className="w-[220px] sm:w-[280px] lg:w-[318px] h-auto sm:h-[500px] lg:h-[600px]"
					/>
					<div className="flex flex-col mt-22 sm:mt-0">
						<p className="text-[18px] sm:text-[22px] lg:text-[28px] font-light leading-[130%] font-inter w-full sm:w-[350px] lg:w-[387px] mt-4 sm:mt-12 text-center sm:text-left">
							Nova AI's WhatsApp Assistant provides instant, accurate answers to
							any question, simplifying complex topics like cryptocurrency and
							more. This advanced AI tool transforms the intimidating world of
							digital assets into an easy-to-navigate landscape, making it
							indispensable for both novice and seasoned investors.
						</p>
						<img
							src={buttonsImg}
							alt="buttons"
							className="w-[180px] sm:w-[200px] lg:w-[230px] h-auto sm:mt-12 mx-auto sm:mx-0"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Utilities;
