import { testimonials } from "@/lib/data";

export default function TestimonialsList() {
  return (
    <div className="col-lg-10 mx-auto">
      {testimonials.map((testimonial, index) => (
        <div key={testimonial.id} className="row mb-5 align-items-center">
          <div
            className={`col-lg-4 text-center mb-4 mb-lg-0 ${
              index % 2 === 1 ? "order-lg-2" : ""
            }`}
          >
            <img
              className="img-fluid rounded-circle shadow"
              src={testimonial.image}
              alt={testimonial.name}
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div className={`col-lg-8 ${index % 2 === 1 ? "order-lg-1" : ""}`}>
            <div className="testimonial-content">
              <span className="text-9 text-primary mb-3 d-block">
                <i className="fa fa-quote-start"></i>
              </span>
              <p className="text-5 mb-4">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <strong className="d-block text-4 fw-600">
                  {testimonial.name}
                </strong>
                <span className="text-muted">
                  {testimonial.role}, {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

