import Image from 'next/image'
export default function Page() {
  return (
    <>
      <header>
        <h1>
          Tow<span>Central</span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Image
            src="/TC Logo.png"
            alt="Tow Commander Logo"
            width={28}
            height={28}
            priority
          />
          <span>24/7 On-Demand Towing</span>
        </div>
      </header>

      <main>
        <div className="card">
          <h2>Request a Tow</h2>

          <label htmlFor="pickup">Pickup Location</label>
          <input
            id="pickup"
            type="text"
            placeholder="Enter address or use current location"
          />

          <label htmlFor="dropoff">Drop-Off Location</label>
          <input
            id="dropoff"
            type="text"
            placeholder="Repair shop, home, dealership"
          />

          <label>Service Type</label>
          <select>
            <option>Standard Tow</option>
            <option>Flatbed Tow</option>
            <option>Winch-Out</option>
            <option>Accident Recovery</option>
            <option>Motorcycle Tow</option>
            <option>Matt Gray will come and personally tow your vehicle</option>
          </select>

          <label>Vehicle Condition</label>
          <select>
            <option>Does not start</option>
            <option>Flat tire</option>
            <option>Accident damage</option>
            <option>Stuck / Off-road</option>
          </select>

          <button>Find Available Tow Trucks</button>
          <div className="note">
            Pricing shown is an estimate. Final cost confirmed before dispatch.
          </div>
        </div>

        <div className="map">
          <div className="tower-list">
            <div className="tower">
              <div>
                <h4>IronHook Towing</h4>
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
        © 2025 Tow Commander • Rates, ETA, and availability simulated for demo purposes
      </footer>
    </>
  )
}