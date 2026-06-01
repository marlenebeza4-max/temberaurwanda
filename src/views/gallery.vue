<script setup>
import video1 from '../assets/Download (4).mp4'
import video2 from '../assets/videos/Download (3).mp4'
</script>

<template>
  <div class="gallery-page">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Gallery</h1>
        <p>
          Explore Rwanda through stunning photographs and inspiring videos.
        </p>
      </div>
    </section>

    <!-- Images Section -->
    <section class="gallery-section">
      <h2>Photo Gallery</h2>

      <div class="gallery-grid">
        <div class="gallery-card">
          <img src="../assets/kigali city.png" alt="Kigali" />
        </div>

        <div class="gallery-card">
          <img src="../assets/mountain gorillas.png" alt="Gorilla" />
        </div>

        <div class="gallery-card">
          <img src="../assets/lake kivu.png" alt="Lake Kivu" />
        </div>

        <div class="gallery-card">
          <img src="../assets/nyungweee.png" alt="Nyungwe Forest" />
        </div>

        <div class="gallery-card">
          <img src="../assets/akaa.png" alt="Akagera National Park" />
        </div>

        <div class="gallery-card">
          <img src="../assets/rwandas.png" alt="Rwanda" />
        </div>
      </div>
    </section>

    <!-- Videos Section -->
    <section class="video-section">
      <h2>Video Gallery</h2>

      <div class="video-grid">
        <div class="video-card">
          <video controls preload="metadata" playsinline>
            <source :src="video1" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Rwanda Travel Clip</h3>
        </div>

        <div class="video-card">
          <video controls preload="metadata" playsinline>
            <source :src="video2" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Travel Moments</h3>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.gallery-page {
  background: #f8fafc;
  min-height: 100vh;
}

/* Hero */
.hero {
  height: 55vh;
  background: linear-gradient(
      rgba(0,0,0,0.55),
      rgba(0,0,0,0.55)
    ),
    url('../assets/rwandas.png');

  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 15px;
}

.hero-content p {
  font-size: 1.2rem;
}

/* Images */
.gallery-section {
  padding: 80px 10%;
}

.gallery-section h2,
.video-section h2 {
  text-align: center;
  color: #166534;
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 25px;
}

.gallery-card {
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.gallery-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: 0.4s;
}

.gallery-card:hover img {
  transform: scale(1.08);
}

/* Videos */
.video-section {
  padding: 0 10% 80px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
  gap: 25px;
}

.video-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.video-card video {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.video-card h3 {
  padding: 20px;
  text-align: center;
  color: #166534;
}

/* Mobile */
@media (max-width:768px) {
  .hero-content h1 {
    font-size: 2.8rem;
  }

  .gallery-section,
  .video-section {
    padding-left: 5%;
    padding-right: 5%;
  }
}
</style>