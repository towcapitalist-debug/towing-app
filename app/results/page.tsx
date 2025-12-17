import Image from 'next/image'

export default function ResultsPage() {
  return (
    <>
      <header>
        <h1>
          Tow<span>Central</span>
        </h1>

        <div className="tagline">
          <Image
            src="/TC Logo.png"
            alt="Tow Central Logo"
            width={35}
            height={35}
            priority
          />
          <span>Available Tow Trucks</span>
        </div>
      </header>

      <main className="results-page">
        <div className="map results-map">
          <div className="tower-list">
            <div className="tower">
              <div>
                <h4>Trey's Towing</h4>
                <small>2.3 mi away • ETA 18 min</small>
              </div>
              <div className="price">$128</div>
            </div>

            <div className="tower">
              <div>
                <h4>Rapid Recovery</h4>
                <small>3.1 mi away • ETA 25 min</small>
              </div>
              <div className="price">$142</div>
            </div>

            <div className="tower">
              <div>
                <h4>Midwest Tow Co.</h4>
                <small>4.7 mi away • ETA 32 min</small>
              </div>
              <div className="price">$156</div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        © 2025 Tow Central • Rates, ETA, and availability simulated for demo purposes
      </footer>
    </>
  )
}
