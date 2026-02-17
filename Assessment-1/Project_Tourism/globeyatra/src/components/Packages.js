import React from "react";

const Packages = () => {
  return (
    <section id="packages" className="packages">
      <h2>Our Popular Packages</h2>

      <div className="card-container">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Goa"
          />
          <h3>Goa Beach Escape</h3>
          <p className="duration">4 Days / 3 Nights</p>
          <p className="price">₹15,999 per person</p>
          <ul>
            <li>Hotel Stay</li>
            <li>Breakfast Included</li>
            <li>Airport Pickup</li>
            <li>Water Sports Activity</li>
          </ul>
          <button>Book Now</button>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23"
            alt="Manali"
          />
          <h3>Manali Adventure</h3>
          <p className="duration">5 Days / 4 Nights</p>
          <p className="price">₹18,999 per person</p>
          <ul>
            <li>Mountain View Hotel</li>
            <li>Breakfast & Dinner</li>
            <li>Local Sightseeing</li>
            <li>Adventure Activities</li>
          </ul>
          <button>Book Now</button>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
            alt="Dubai"
          />
          <h3>Dubai Luxury Tour</h3>
          <p className="duration">6 Days / 5 Nights</p>
          <p className="price">₹55,999 per person</p>
          <ul>
            <li>Luxury Hotel</li>
            <li>Desert Safari</li>
            <li>City Tour</li>
            <li>Visa Assistance</li>
          </ul>
          <button>Book Now</button>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Switzerland"
          />
          <h3>Switzerland Premium</h3>
          <p className="duration">7 Days / 6 Nights</p>
          <p className="price">₹1,20,000 per person</p>
          <ul>
            <li>Hotel Stay</li>
            <li>Daily Breakfast</li>
            <li>Mountain Excursion</li>
            <li>Travel Insurance</li>
          </ul>
          <button>Book Now</button>
        </div>
      </div>
    </section>

  );
};

export default Packages;
