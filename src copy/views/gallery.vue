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
          <img src="../assets/images/kigali.jpg" alt="Kigali" />
        </div>

        <div class="gallery-card">
          <img src="../assets/images/gorilla.jpg" alt="Gorilla" />
        </div>

        <div class="gallery-card">
          <img src="../assets/images/lakekivu.jpg" alt="Lake Kivu" />
        </div>

        <div class="gallery-card">
          <img src="../assets/images/nyungwe.jpg" alt="Nyungwe Forest" />
        </div>

        <div class="gallery-card">
          <img src="../assets/images/akagera.jpg" alt="Akagera National Park" />
        </div>

        <div class="gallery-card">
          <img src="../assets/images/rwanda2.jpg" alt="Rwanda" />
        </div>
      </div>
    </section>

    <!-- Videos Section -->
    <section class="video-section">
      <h2>Video Gallery</h2>

      <div class="video-grid">

        <div class="video-card">
          <video controls>
            <source src="../assets/videos/rwanda1.mp4" type="video/mp4">
          </video>
          <h3>Kigali City Tour</h3>
        </div>

        <div class="video-card">
          <video controls>
            <source src="../assets/videos/rwanda2.mp4" type="video/mp4">
          </video>
          <h3>Visit Rwanda Adventure</h3>
        </div>

        <div class="video-card">
          <video controls>
            <source src="../assets/videos/rwanda3.mp4" type="video/mp4">
          </video>
          <h3>Wildlife Experience</h3>
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
    url('../assets/images/rwanda2.jpg');

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