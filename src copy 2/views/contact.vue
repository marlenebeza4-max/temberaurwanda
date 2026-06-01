<template>
  <div class="contact-page">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ t('contact.heroHeading') }}</h1>
        <p>{{ t('contact.heroText') }}</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-container">

      <!-- Contact Information -->
      <div class="contact-info">
        <h2>{{ t('contact.getInTouch') }}</h2>

        <div class="info-card">
          <h3>{{ t('contact.address') }}</h3>
          <p>{{ t('contact.addressText') }}</p>
        </div>

        <div class="info-card">
          <h3>{{ t('contact.phone') }}</h3>
          <p>{{ t('contact.phoneText') }}</p>
        </div>

        <div class="info-card">
          <h3>{{ t('contact.email') }}</h3>
          <p>{{ t('contact.emailText') }}</p>
        </div>

        <div class="info-card">
          <h3>{{ t('contact.hours') }}</h3>
          <p>{{ t('contact.hoursText') }}</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form">
        <h2>{{ t('contact.sendMessage') }}</h2>

        <form @submit.prevent="submitForm">
          <input
            type="text"
            :placeholder="t('contact.namePlaceholder')"
            v-model="name"
            required
          />

          <input
            type="email"
            :placeholder="t('contact.emailPlaceholder')"
            v-model="email"
            required
          />

          <input
            type="text"
            :placeholder="t('contact.subjectPlaceholder')"
            v-model="subject"
            required
          />

          <textarea
            rows="6"
            :placeholder="t('contact.messagePlaceholder')"
            v-model="message"
            required
          ></textarea>

          <button type="submit">
            {{ t('contact.sendButton') }}
          </button>
        </form>

        <p v-if="successMessage" class="success">
          {{ successMessage }}
        </p>
      </div>

    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const successMessage = ref('')

const submitForm = () => {
  successMessage.value = t('contact.success')
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
}
</script>

<style scoped>
.contact-page {
  background: #f8fafc;
  min-height: 100vh;
}

/* Hero Section */
.hero {
  height: 50vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.55)
    ),
    url('../assets/ppj.png');
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

/* Contact Layout */
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  padding: 80px 10%;
}

.contact-info,
.contact-form {
  background: white;
  border-radius: 20px;
  padding: 35px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
}

.contact-info h2,
.contact-form h2 {
  color: #166534;
  margin-bottom: 25px;
}

.info-card {
  margin-bottom: 25px;
}

.info-card h3 {
  color: #166534;
  margin-bottom: 8px;
}

.info-card p {
  color: #555;
}

/* Form */
.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input,
textarea {
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  border-color: #166534;
}

button {
  background: #166534;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

button:hover {
  transform: translateY(-2px);
}

.success {
  color: green;
  margin-top: 15px;
  font-weight: bold;
}

/* Responsive */
@media (max-width: 900px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 2.8rem;
  }
}
</style>