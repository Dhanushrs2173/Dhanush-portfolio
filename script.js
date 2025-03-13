const { useState } = React;

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen`}>
            {/* Navbar */}
            <nav className="p-4 flex justify-between items-center bg-gray-800">
                <h1 className="text-2xl font-bold">Dhanush R S</h1>
                <div className="flex gap-6">
                    <a href="#projects" className="hover:text-yellow-400">Projects</a>
                    <a href="#skills" className="hover:text-yellow-400">Skills</a>
                    <a href="#contact" className="hover:text-yellow-400">Contact</a>
                    <button 
                        onClick={() => setDarkMode(!darkMode)} 
                        className="p-2 bg-gray-600 rounded-lg"
                    >
                        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="text-center p-10">
                <h2 className="text-4xl font-bold">Full Stack Developer</h2>
                <p className="mt-2 text-lg">Building modern & interactive web applications.</p>
            </header>

            {/* Skills Section */}
            <section id="skills" className="p-10">
                <h3 className="text-2xl font-semibold text-center">Skills</h3>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "SQL", "Java"].map(skill => (
                        <span key={skill} className="bg-gray-700 px-4 py-2 rounded-lg text-lg">{skill}</span>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="p-10">
                <h3 className="text-2xl font-semibold text-center">Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {[
                        { name: "OrderXpress", desc: "A food ordering system." },
                        { name: "LearningCircle", desc: "A learning platform." },
                        { name: "Flappy Bird", desc: "A fun browser game." },
                        { name: "Alarm Clock", desc: "A Python-based alarm clock." }
                    ].map((project) => (
                        <div key={project.name} className="project-card bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-xl font-bold">{project.name}</h4>
                            <p>{project.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="p-10 text-center">
                <h3 className="text-2xl font-semibold">Contact Me</h3>
                <p>Email: <a href="mailto:dhanu200x@gmail.com" className="text-blue-400">dhanu200x@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com" className="text-blue-400">github.com/dhanush</a></p>
            </section>

            {/* Footer */}
            <footer className="p-4 text-center bg-gray-800">
                © 2025 Dhanush R S. All rights reserved.
            </footer>
        </div>
    );
};

// Render React App
ReactDOM.render(<Portfolio />, document.getElementById("root"));
