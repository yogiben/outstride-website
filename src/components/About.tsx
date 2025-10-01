export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          Nice to meet you
        </h2>

        <div className="row">
          <div className="col-lg-2 text-center text-lg-start wow fadeInUp"></div>
          <div className="col-lg-8 text-center text-lg-start wow fadeInUp">
            <h2 className="text-8 fw-400 mb-3">
              👋 Hi, I'm{" "}
              <span className="fw-700 border-bottom border-3 border-primary">
                Ben
              </span>
            </h2>
            <p className="text-5">
              I'm a serial entrepreneur and founder. I grew up in the UK and
              moved to Berlin in 2013 where I taught myself how to code 👨‍💻
            </p>
            <p className="text-5">
              I co-founded{" "}
              <a
                href="https://www.nuri.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuri
              </a>{" "}
              (prev. Bitwala) and grew it from 3 people and a dog to a 120+
              person company before moving to chairman 📈
            </p>
            <p className="text-5">
              Now I mentor founders and help them grow 🌱
            </p>
            <p className="text-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://blog.outstride.co/from-founder-to-coach-my-story-f8b86f93f72d"
              >
                About me
              </a>
            </p>
          </div>
          <div className="col-lg-2 text-center text-lg-start wow fadeInUp"></div>
        </div>
      </div>
    </section>
  );
}


