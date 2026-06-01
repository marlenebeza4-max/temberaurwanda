<script setup>
import { useI18n } from '../i18n.js'
const { t } = useI18n()
</script>

<template>
  <div class="about-page">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ t('about.heroHeading') }}</h1>
        <p>{{ t('about.heroText') }}</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="about-text">
        <h2>{{ t('about.title') }}</h2>

        <p>{{ t('about.paragraph1') }}</p>

        <p>{{ t('about.paragraph2') }}</p>

        <button>{{ t('about.button') }}</button>
      </div>

      <div class="about-image">
        <img
          src="../assets/kellia.png"
          alt="Visit Rwanda"
        />
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="stats">
      <div class="stat-card">
        <h3>5</h3>
        <p>{{ t('about.stats.provinces') }}</p>
      </div>

      <div class="stat-card">
        <h3>4</h3>
        <p>{{ t('about.stats.parks') }}</p>
      </div>

      <div class="stat-card">
        <h3>1000+</h3>
        <p>{{ t('about.stats.attractions') }}</p>
      </div>

      <div class="stat-card">
        <h3>1M+</h3>
        <p>{{ t('about.stats.visitors') }}</p>
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