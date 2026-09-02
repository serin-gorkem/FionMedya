export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div>
          <span className="site-footer-label">
            FION MEDYA
          </span>

          <p className="site-footer-statement">
            Sıradan olanı
            <br />
            unut.
          </p>
        </div>

        <div className="site-footer-contact">
          <span className="site-footer-label">
            İLETİŞİM
          </span>

          <a href="mailto:hello@fionmedya.com">
            info@fionmedya.com
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>
          © 2026 FION MEDYA
        </span>

        <span>
          KUŞADASI / AYDIN
        </span>

        <span>
          SIRADAN OLANI UNUT.
        </span>
      </div>
    </footer>
  );
}