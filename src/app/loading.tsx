export default function Loading() {
  return (
    <main
      className="route-loading"
      aria-label="Sayfa yükleniyor"
      aria-live="polite"
    >
      <div className="route-loading-top">
        <span>FION MEDYA</span>

        <span>YÜKLENİYOR</span>
      </div>

      <div className="route-loading-center">
        <span className="route-loading-word">
          FION
        </span>

        <div
          className="route-loading-line"
          aria-hidden="true"
        >
          <span />
        </div>
      </div>

      <div className="route-loading-bottom">
        <span>SIRADAN OLANI UNUT.</span>

        <span>KUŞADASI / AYDIN</span>
      </div>
    </main>
  );
}