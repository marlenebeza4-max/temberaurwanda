<template>
  <div class="about-page">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>About Visit Rwanda</h1>
        <p>
          Discover the beauty, culture, wildlife, and adventure that make Rwanda
          one of Africa's most remarkable destinations.
        </p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="about-text">
        <h2>Who We Are</h2>

        <p>
          Visit Rwanda is a tourism platform dedicated to showcasing the beauty
          and uniqueness of Rwanda. From breathtaking landscapes to vibrant
          culture and incredible wildlife, Rwanda offers unforgettable
          experiences for visitors from around the world.
        </p>

        <p>
          Our goal is to inspire travelers to explore Rwanda's diverse
          destinations, including the City of Kigali, Volcanoes National Park,
          Nyungwe Forest, Akagera National Park, and the beautiful shores of
          Lake Kivu.
        </p>

        <button>Explore Rwanda</button>
      </div>

      <div class="about-image">
        <img
          src="../assets/"kellia.png
          alt="Visit Rwanda"
        />
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="stats">
      <div class="stat-card">
        <h3>5</h3>
        <p>Provinces</p>
      </div>

      <div class="stat-card">
        <h3>4</h3>
        <p>National Parks</p>
      </div>

      <div class="stat-card">
        <h3>1000+</h3>
        <p>Tourist Attractions</p>
      </div>

      <div class="stat-card">
        <h3>1M+</h3>
        <p>Visitors</p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background: #f8fafc;
}

/* Hero */
.hero {
  height: 60vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.55)
    ),
    url('../assets/gttt.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 700px;
  padding: 20px;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2rem;
  line-height: 1.8;
}

/* About Section */
.about-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 50px;
  align-items: center;
  padding: 80px 10%;
}

.about-text h2 {
  color: #166534;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.about-text p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-text button {
  background: #166534;
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
}

.about-text button:hover {
  transform: translateY(-3px);
}

.about-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

/* Stats */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  padding: 0 10% 80px;
}

.stat-card {
  background: white;
  text-align: center;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.stat-card:hover {
  transform: translateY(-8px);
}

.stat-card h3 {
  color: #166534;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.stat-card p {
  color: #666;
  font-size: 1.1rem;
}
</style>