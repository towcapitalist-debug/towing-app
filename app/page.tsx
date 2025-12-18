'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Page() {
  const router = useRouter()

  return (
    <>
      <header>
        <h1>
          Tow<span>Central</span>
        </h1>

        <div className="tagline">
          <Image
            src="/tclogo.png"
            alt="Tow Central Logo"
            width={35}
            height={35}
            priority
          />
          <span>24/7 On-Demand Towing</span>
        </div>
      </header>

      <main className="request-page">
        <div className="card request-card">
          <h2>Request a Tow</h2>

          <label htmlFor="pickup">Pickup Location</label>
          <input id="pickup" placeholder="Enter address or use current location" />

          <label htmlFor="dropoff">Drop-Off Location</label>
          <input id="dropoff" placeholder="Repair shop, home, dealership" />

          <label>Service Type</label>
          <select>
            <option>Standard Tow</option>
            <option>Flatbed Tow</option>
            <option>Winch-Out</option>
          </select>

          <label>Vehicle Condition</label>
          <select>
            <option>Does not start</option>
            <option>Flat tire</option>
            <option>Accident damage</option>
          </select>

          <button onClick={() => router.push('/results')}>
            Find Available Tow Trucks
          </button>

          <div className="note">
            Pricing shown is an estimate. Final cost confirmed before dispatch.
          </div>
        </div>
      </main>

      <footer>
        © 2025 Tow Central • Rates, ETA, and availability simulated for demo purposes
      </footer>
    </>
  )
}
