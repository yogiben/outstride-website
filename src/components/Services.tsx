import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          Where I support
        </h2>

        <div className="row gy-5 mt-5">
          {services.map((service) => (
            <div key={service.id} className="col-sm-6 col-lg-4 wow fadeInUp">
              <div className="featured-box text-center px-md-4">
                <div className="featured-box-icon text-primary text-13">
                  {service.icon}
                </div>
                <h3 className="text-6 fw-600 mb-3">{service.title}</h3>
                <p className="text-muted mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


