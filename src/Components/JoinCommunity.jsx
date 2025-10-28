import React from "react";
import leftJoin from "../assets/images/left-joincomm.png";
import rightJoin from "../assets/images/right-joincomm.png";
import { ArrowRight } from "lucide-react";

const JoinCommunity = () => {
	return (
		<div className="w-full min-h-screen flex flex-col justify-start bg-black text-[#FFFBFB] font-inter px-10 md:px-20 py-20 overflow-hidden">
			{/* ---------- ROW 1 ---------- */}
			<div className="w-full flex flex-col items-start">
				<h1 className="text-[100px] md:text-[160px] font-normal leading-[100%] mb-6 ml-80">
					JOIN-
				</h1>
			</div>

			{/* ---------- ROW 2 ---------- */}
			<div className="w-full flex flex-row items-center mt-16">
				<img
					src={leftJoin}
					alt="left icon"
					className="w-[300px] md:w-[328px] h-auto object-contain ml-78 mr-15"
				/>
				<h1 className="text-[100px] md:text-[160px] font-normal leading-[100%] text-[#FFFBFB] mr-20">
					NOVA AI
				</h1>

				{/* ✅ Constant green glow (not hover-based) */}
				<div className="relative inline-block">
					<span className="absolute inset-0 rounded-full blur-[100px] opacity-90 bg-[#65EC63] scale-[2.2] z-0"></span>
					<img
						src={rightJoin}
						alt="right icon"
						className="w-[150px] md:w-[159px] h-auto object-contain relative z-10"
					/>
				</div>
			</div>

			{/* ---------- ROW 3 ---------- */}
			<div className="w-full flex flex-row items-center mt-20 ml-80">
				<h1 className="text-[100px] md:text-[160px] font-normal leading-[100%] text-[#FFFBFB] mr-20">
					COMMUNITY
				</h1>

				<button className="flex items-center justify-center gap-3 border border-white text-white text-[20px] md:text-[22px] px-[29px] py-[20px] rounded-full transition-all duration-300 hover:bg-white hover:text-black">
					Join Community <ArrowRight size={28} />
				</button>
			</div>
		</div>
	);
};

export default JoinCommunity;
