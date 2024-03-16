import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollUp from "./components/scroll-up/ScrollUp";
import Contact from "./sections/contact";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Profile from "./sections/profile";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

function App() {
	return (
		<div className="text-blue-gray-100 lg:mx-14">
			<Navbar />
			<main>
				<Profile />
				<Experience />
				<Education />
				<Projects />
				<Skills />
				<Contact />
			</main>
			<Footer />
			<ScrollUp />
		</div>
	);
}

export default App;
