import React from "react";
import lineImg from "../assets/images/line.png";
import numberImg from "../assets/images/numbers-roadmap.png";

const RoadMap = () => {
	return (
		<div
			id="roadmap"
			className="w-full min-h-screen flex flex-col bg-black text-white px-16 py-20 font-inter"
		>
			{/* ---------- INNER 1: HEADER ---------- */}
			<div className="flex flex-col items-start gap-4 mb-16 ml-100">
				<img src={lineImg} alt="green line" className="w-[128.5px]" />
				<h1 className="text-[60px] font-bold leading-[100%] text-white">
					Roadmap:
				</h1>
			</div>

			{/* ---------- INNER 2: CONTENT ---------- */}
			<div className="flex flex-row justify-evenly items-center gap-16 flex-wrap mt-30">
				{/* LEFT SECTION (IMAGE WITH GREEN GLOW) */}
				<div className="relative w-[389px] h-[381px] flex justify-center items-center">
					{/* Glow effect behind image */}
					<div className="absolute w-[420px] h-[420px] bg-[#65EC63] blur-[100px] opacity-70 rounded-full"></div>
					<img
						src={numberImg}
						alt="roadmap numbers"
						className="relative w-[389px] h-[381px] object-contain"
					/>
				</div>

				{/* RIGHT SECTION (TEXT) */}
				<div className="flex flex-col items-center text-center max-w-[650px]">
					<h2 className="text-[#65EC63] text-[43.78px] font-bold leading-[100%] mb-6">
						Phase 1:
					</h2>
					<ul className="text-[28.73px] font-normal leading-[100%] space-y-3">
						<li>Launch of Nova AI token</li>
						<li>Deployment of WhatsApp Assistant feature</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default RoadMap;
