// import React from "react";
import "./App.css";

function App() {
  return (
    <div className="">
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5">
        <div>
          <h1 className="display-4 fw-bold">Jerick Dale A. Mendoza</h1>
          <p className="lead">Web Developer | Designer | Problem Solver</p>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="p-5">
        <div>
          <h2 className="text-primary mb-4">About Me</h2>
          <p className="fs-5">
            Hello! I'm Jerick Dale A. Mendoza, a passionate developer with a
            knack for creating clean, efficient, and user-friendly web
            applications. I enjoy solving problems and continuously learning new
            skills to stay ahead in the tech world.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light p-5">
        <div>
          <h2 className="text-primary mb-4">Projects</h2>
          <div className="row row-cols-1 row-cols-md-3 mb-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Portfolio Website</div>
                  <p className="card-text">
                    A personal portfolio to showcase my skills and projects.
                  </p>
                  <button className="btn btn-primary">View Project</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Gatepass Management System</div>
                  <p className="card-text">
                    A system to streamline vehicle gatepass applications and
                    tracking.
                  </p>
                  <button className="btn btn-primary">View Project</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Responsive Web Design</div>
                  <p className="card-text">
                    A project demonstrating modern responsive layouts using HTML
                    and CSS.
                  </p>
                  <button className="btn btn-primary">View Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-5">
        <div>
          <h2 className="text-primary mb-4">Contact Me</h2>
          <p className="fs-5">
            If you'd like to get in touch, feel free to reach out!
          </p>
          <ul className="list-unstyled fs-5">
            <li>
              <strong>Email:</strong>
              <a
                href="mailto:jerickdale.mendoza@example.com"
                className="text-primary"
              >
                jerickdale.mendoza@example.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +123-456-7890
            </li>
            <li>
              <strong>LinkedIn:</strong>
              <a
                href="https://linkedin.com/in/jerick-dale-mendoza-343b45190"
                className="text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/jerick-dale-mendoza-343b45190
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center p-3">
        <p className="mb-0">
          &copy; 2024 Jerick Dale A. Mendoza. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
