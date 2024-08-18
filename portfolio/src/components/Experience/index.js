import "./index.css";
import experiences from '../../data/experience.json';

const Experience = () => {
    const path = process.env.PUBLIC_URL || "";

    return (
        <section className="experience" id="experience">
            <h2 className="experience-section-title">Experience</h2>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                <div className="experience-item" key={index}>
                    <img src={path + exp.image} alt={exp.company} className="experience-image" />
                    <h4 className="experience-title">{exp.title}</h4>
                    <p className="experience-date">{exp.date}</p>
                    <ul className="experience-description">
                        {exp.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
