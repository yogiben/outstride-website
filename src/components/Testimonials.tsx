import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonial" className="section">
      <div className="container">
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeIn">
          What the founders say
        </h2>
        <div className="row">
          <div className="col-lg-9 mx-auto wow fadeInUp">
            <div
              className="owl-carousel owl-theme owl-light"
              data-autoplay="true"
              data-loop="true"
              data-nav="true"
              data-margin="30"
              data-slideby="1"
              data-stagepadding="5"
              data-items-xs="1"
              data-items-sm="1"
              data-items-md="1"
              data-items-lg="1"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="item text-center px-5">
                  <span className="text-9 text-primary">
                    <i className="fa fa-quote-start"></i>
                  </span>
                  <p className="text-5">"{testimonial.quote}"</p>
                  <img
                    className="img-fluid d-inline-block w-auto rounded-circle shadow"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <strong className="d-block text-3 fw-500">
                    {testimonial.name} - {testimonial.role}
                  </strong>
                  <span>{testimonial.company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


