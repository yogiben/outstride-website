import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsList from "@/components/TestimonialsList";

export const metadata = {
  title: "Testimonials - Outstride",
  description:
    "What founders say about working with Ben - founder coaching testimonials and success stories.",
};

export default function TestimonialsPage() {
  return (
    <div id="main-wrapper">
      <Header />
      <main id="content" role="main">
        {/* Page Header */}
        <section className="section bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="text-10 fw-600 text-white mb-4 wow fadeInUp">
                  What Founders Say
                </h1>
                <p
                  className="text-5 text-white wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Real testimonials from founders I've worked with
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section">
          <div className="container">
            <div className="row">
              <TestimonialsList />
            </div>

            {/* CTA */}
            <div className="row mt-5">
              <div className="col-lg-8 mx-auto text-center">
                <h3 className="text-6 fw-600 mb-4">Ready to work together?</h3>
                <p className="text-5 mb-4">
                  Let's discuss how I can help you grow your startup.
                </p>
                <a href="/#contact" className="btn btn-primary rounded-0">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


