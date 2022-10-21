import React from "react";
import "../css/footer.css";
function Footer() {
  return (
    <section>
      <footer>
        <div className="footer-content">
          <p>© 2022 Esteban Cardona</p>
          <p>
            Built with{" "}
            <a
              className="react-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              React
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
