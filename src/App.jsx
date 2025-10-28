import React from "react";
import bgImage from "./assets/images/background.gif";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import AboutHeader from "./Components/AboutHeader";
import AboutHero from "./Components/AboutHero";
import AboutFooter from "./Components/AboutFooter";
import Utilities from "./Components/Utilities";
import RoadMap from "./Components/RoadMap";
import "./App.css";

function App() {
	return (
		<>
			{/* ----------------------------------------(LANDING PAGE)---------------------------------------- */}
			<div
				className="w-full min-h-full bg-cover bg-center bg-no-repeat bg-fixed flex flex-col"
				style={{
					backgroundImage: `url(${bgImage})`,
				}}
			>
				<NavBar />
				<main className="flex flex-col flex-1 justify-start items-center px-4 sm:px-6 md:px-10 pt-[80px]">
					<Hero />
				</main>

				<footer className="w-full">
					<Footer />
				</footer>
				{/* ----------------------------------------(ABOUT PAGE)---------------------------------------- */}

				<div className="w-full min-h-full block">
					<AboutHeader />
					<AboutHero />
					<AboutFooter />
				</div>

				<Utilities />
				<RoadMap />
			</div>
		</>
	);
}

export default App;
