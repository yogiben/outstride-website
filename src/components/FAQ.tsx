export default function FAQ() {
  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 order-1 order-lg-0 wow fadeInUp">
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Working with me
            </h2>
            <div className="accordion accordion-flush" id="faqTopics">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="true"
                    aria-controls="flush-collapseOne"
                  >
                    Who I work with
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqTopics"
                >
                  <div className="accordion-body">
                    I work with ambitious, exciting founders who give me energy.
                    I support funded startups from pre-seed all the way to
                    Series C.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Mentoring & coaching
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#faqTopics"
                >
                  <div className="accordion-body">
                    <p>
                      My working style is a combination of coaching & mentoring.
                      Mentoring comes from a place expertise - my experience as
                      a founder. Coaching is asking the right questions to help
                      that person become an expert in themselves.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Individuals & groups
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#faqTopics"
                >
                  <div className="accordion-body">
                    I also do group work off-sites where we focus on creating
                    and aligning on the important not urgent topics e.g. vision,
                    mission and strategy. These are normally once a quarter.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    The practical stuff
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#faqTopics"
                >
                  <div className="accordion-body">
                    A one hour coaching session every two weeks is my standard
                    setup. I am also available on an ad hoc basis if extra help
                    is needed e.g. during funding rounds.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center text-center order-0 order-lg-1 wow fadeIn"
            data-wow-delay="1s"
          >
            <div>
              <div
                style={{ maxWidth: "80%" }}
                className="bg-light d-inline-block p-3 shadow-lg wow zoomIn"
              >
                <img
                  className="img-fluid"
                  src="/outstride-website/images/workshop.jpeg"
                  title="FAQ"
                  alt="faq"
                />
                <div style={{ textAlign: "center" }}>
                  A workshop with Wonderpath
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-12 order-1 order-lg-0 wow fadeInUp">
            <p className="text-center mt-5 wow fadeInUp">
              <a
                href="https://blog.outstride.co/how-i-coach-b0b796e04efa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark shadow-none rounded-0"
              >
                Read about my coaching
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


