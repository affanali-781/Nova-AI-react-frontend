import React from "react";
import leftJoin from "../assets/images/left-joincomm.png";
import rightJoin from "../assets/images/right-joincomm.png";
import { ArrowRight } from "lucide-react";

const JoinCommunity = () => {
	return (
		<div className="w-full min-h-screen flex flex-col justify-start bg-black text-white font-inter px-4 sm:px-8 md:px-16 lg:px-20 py-16 overflow-hidden">
			{/* ---------- ROW 1 ---------- */}
			<div className="w-full flex flex-col items-start">
				<h1 className="text-[48px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-normal leading-[100%] mb-6 sm:ml-10 md:ml-40 lg:ml-80">
					JOIN-
				</h1>
			</div>

			{/* ---------- ROW 2 ---------- */}
			<div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start mt-10 sm:mt-16 gap-6 sm:gap-10">
				<img
					src={leftJoin}
					alt="left icon"
					className="w-[180px] sm:w-[250px] md:w-[300px] lg:w-[328px] h-auto object-contain"
				/>

				<h1 className="text-[48px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-normal leading-[100%] text-white text-center sm:text-left">
					NOVA AI
				</h1>

				{/* Constant green glow (not hover-based) */}
				<div className="relative inline-block">
					<span className="absolute inset-0 rounded-full blur-[80px] sm:blur-[100px] opacity-90 bg-[#65EC63] scale-[2.2] z-0"></span>
					<img
						src={rightJoin}
						alt="right icon"
						className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[159px] h-auto object-contain relative z-10"
					/>
				</div>
			</div>

			{/* ---------- ROW 3 ---------- */}
			<div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start mt-10 sm:mt-20 gap-8 sm:gap-12">
				<h1 className="text-[48px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-normal leading-[100%] text-white text-center sm:text-left">
					COMMUNITY
				</h1>

				<button className="flex items-center justify-center gap-3 border border-white text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
					Join Community <ArrowRight size={24} className="sm:size-[28px]" />
				</button>
			</div>
		</div>
	);
};

export default JoinCommunity;
