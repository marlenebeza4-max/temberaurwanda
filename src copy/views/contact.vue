<template>
  <div class="contact-page">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Reach out for travel information,
          partnerships, or general inquiries about Rwanda.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-container">

      <!-- Contact Information -->
      <div class="contact-info">
        <h2>Get In Touch</h2>

        <div class="info-card">
          <h3>📍 Address</h3>
          <p>Kigali, Rwanda</p>
        </div>

        <div class="info-card">
          <h3>📞 Phone</h3>
          <p>+250 788 123 456</p>
        </div>

        <div class="info-card">
          <h3>✉️ Email</h3>
          <p>info@visitrwanda.com</p>
        </div>

        <div class="info-card">
          <h3>🕒 Working Hours</h3>
          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form">
        <h2>Send a Message</h2>

        <form @submit.prevent="submitForm">
          <input
            type="text"
            placeholder="Full Name"
            v-model="name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            v-model="email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            v-model="subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            v-model="message"
            required
          ></textarea>

          <button type="submit">
            Send Message
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

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const successMessage = ref('')

const submitForm = () => {
  successMessage.value =
    'Thank you! Your message has been received.'

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