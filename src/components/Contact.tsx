export default function Contact() {
  return (
    <section id="contact" className="section bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 text-center text-lg-start wow fadeInUp">
            <h2 className="text-10 fw-600 mb-5">Can I help?</h2>
            <p className="text-5">
              I love meeting ambitious founders with big plans.
            </p>
            <p className="text-5">
              <a
                className="black-text"
                target="_blank"
                rel="noopener noreferrer"
                href="https://blog.outstride.co/from-founder-to-coach-my-story-f8b86f93f72d"
              >
                About Ben
              </a>
            </p>
            <p className="text-5 mb-5">
              <a
                className="black-text"
                target="_blank"
                rel="noopener noreferrer"
                href="https://blog.outstride.co/how-i-coach-b0b796e04efa"
              >
                How I coach
              </a>
            </p>
            <h3 className="text-5 fw-600">Find me in</h3>
            <address className="text-4">Berlin. Bristol. Lisbon.</address>
            <ul className="social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5">
              <li className="social-icons-twitter">
                <a
                  data-bs-toggle="tooltip"
                  href="https://twitter.com/BenPeterJones"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons-twitter">
                <a
                  data-bs-toggle="tooltip"
                  href="https://www.linkedin.com/in/benjaminpeterjones"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="social-icons-twitter">
                <a
                  data-bs-toggle="tooltip"
                  href="https://blog.outstride.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Medium"
                >
                  <i className="fab fa-medium"></i>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6 ms-auto mt-5 mt-lg-0 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Let's talk
            </h2>
            <p className="text-5">How can I help you?</p>
            <p className="text-5">
              Write to me at <strong>ben [at] outstride.co</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


