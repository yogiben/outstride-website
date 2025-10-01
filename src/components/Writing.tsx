import { articles } from "@/lib/data";

export default function Writing() {
  return (
    <section id="writing" className="section">
      <div className="container">
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          My writing for founders
        </h2>

        <div className="row g-5 mt-5">
          <div
            className="col-lg-6 wow fadeInUp"
            style={{ marginTop: "0 !important" }}
          >
            <div>
              {articles.slice(0, 3).map((article) => (
                <p key={article.id} className="mb-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={article.url}
                  >
                    {article.emoji} {article.title}
                  </a>
                </p>
              ))}
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ marginTop: "0 !important" }}
          >
            <div>
              {articles.slice(3, 6).map((article) => (
                <p key={article.id} className="mb-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={article.url}
                  >
                    {article.emoji} {article.title}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center mt-5 wow fadeInUp">
          <a
            href="https://blog.outstride.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark shadow-none rounded-0"
          >
            Read all my articles
          </a>
        </p>
      </div>
    </section>
  );
}


