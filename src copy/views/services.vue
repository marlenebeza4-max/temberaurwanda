<template>
  <div class="services-page">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Our Services</h1>
        <p>
          Explore Rwanda with confidence through our tourism services,
          travel guidance, and destination experiences.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-container">

      <div class="service-card">
        <div class="icon">🦍</div>
        <h2>Gorilla Trekking</h2>
        <p>
          Experience Rwanda's famous mountain gorillas in Volcanoes
          National Park with guided tours and unforgettable adventures.
        </p>
      </div>

      <div class="service-card">
        <div class="icon">🏨</div>
        <h2>Hotel Booking</h2>
        <p>
          Find comfortable accommodations across Kigali and Rwanda's
          beautiful tourist destinations.
        </p>
      </div>

      <div class="service-card">
        <div class="icon">🚐</div>
        <h2>Transport Services</h2>
        <p>
          Enjoy safe and convenient transportation for city tours,
          national parks, and provincial destinations.
        </p>
      </div>

      <div class="service-card">
        <div class="icon">🏞️</div>
        <h2>Tour Packages</h2>
        <p>
          Discover carefully designed travel packages that showcase
          Rwanda's landscapes, culture, and wildlife.
        </p>
      </div>

      <div class="service-card">
        <div class="icon">📸</div>
        <h2>Photography Tours</h2>
        <p>
          Capture Rwanda's breathtaking scenery, wildlife, and cultural
          experiences with professional guidance.
        </p>
      </div>

      <div class="service-card">
        <div class="icon">🌍</div>
        <h2>Travel Consultation</h2>
        <p>
          Get expert travel advice, destination recommendations, and
          planning assistance for your Rwanda adventure.
        </p>
      </div>

    </section>

    <!-- Why Choose Us -->
    <section class="why-us">
      <h2>Why Choose Visit Rwanda?</h2>

      <div class="why-grid">
        <div class="why-card">
          <h3>⭐ Trusted Experience</h3>
          <p>Professional tourism guidance for visitors worldwide.</p>
        </div>

        <div class="why-card">
          <h3>🌿 Natural Beauty</h3>
          <p>Access Rwanda's most beautiful attractions and parks.</p>
        </div>

        <div class="why-card">
          <h3>🤝 Friendly Support</h3>
          <p>Dedicated assistance before and during your trip.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.services-page {
  background: #f8fafc;
  min-height: 100vh;
}

/* Hero Section */
.hero {
  height: 55vh;
  background: linear-gradient(
      rgba(0,0,0,0.55),
      rgba(0,0,0,0.55)
    ),
    url('../assets/services.png');

  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 700px;
  padding: 20px;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 15px;
}

.hero-content p {
  font-size: 1.2rem;
  line-height: 1.8;
}

/* Services Cards */
.services-container {
  padding: 80px 10%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  border-radius: 20px;
  padding: 35px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  transition: 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
}

.icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.service-card h2 {
  color: #166534;
  margin-bottom: 15px;
}

.service-card p {
  color: #555;
  line-height: 1.7;
}

/* Why Choose Us */
.why-us {
  padding: 40px 10% 80px;
  text-align: center;
}

.why-us h2 {
  color: #166534;
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.why-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
}

.why-card h3 {
  color: #166534;
  margin-bottom: 15px;
}

.why-card p {
  color: #555;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.8rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}
</style>