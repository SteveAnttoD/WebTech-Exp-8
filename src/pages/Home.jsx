import { Link } from "react-router-dom";

const courses = [
  {
    icon: "💻",
    category: "TECHNOLOGY",
    title: "Web Design Basics",
    description:
      "Learn how HTML, CSS, and JavaScript come together to create websites.",
  },
  {
    icon: "🔬",
    category: "SCIENCE",
    title: "Curious About Science",
    description:
      "Explore the questions, experiments, and discoveries shaping our world.",
  },
  {
    icon: "🎨",
    category: "CREATIVITY",
    title: "Creative Thinking",
    description:
      "Build new ways to share ideas, solve problems, and express yourself.",
  },
];

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow">YOUR LEARNING JOURNEY STARTS HERE</p>
          <h1>Learn something wonderful.</h1>
          <p>
            Explore new ideas, build useful skills, and make every day a chance
            to grow.
          </p>
          <Link className="button button-light" to="/register">
            Get started
          </Link>
        </div>
        <div className="hero-art" aria-hidden="true">
          📚
        </div>
      </section>

      <section className="container section" aria-labelledby="courses-title">
        <div className="section-heading">
          <p className="eyebrow">FIND YOUR NEXT INTEREST</p>
          <h2 id="courses-title">Featured courses</h2>
          <p>Start with a subject you love. There is always more to discover.</p>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <span className="course-icon" aria-hidden="true">
                {course.icon}
              </span>
              <p className="course-category">{course.category}</p>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link to="/register">Join a course <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
