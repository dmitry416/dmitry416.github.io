<template>
  <div class="hero">
    <div class="hero-content">
      <div class="avatar">
        <img src="@/assets/ava.jpg" alt="Profile photo">
      </div>
      <h1>Можаров Дмитрий</h1>
      <p class="title">Python/C++ Developer</p>
      <p class="bio">
        Универсальный разработчик, занимающийся в основном Web-разработкой и разработкой игр. Но помимо этого, способен решать и другие задачи.
        Быстро осваиваю новые технологические стеки благодаря глубокому пониманию фундаментальных принципов программирования и компьютерных наук.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #0a0a0a 0%, #111111 100%);
  padding: 50px 30px;
  text-align: center;
  border-bottom: 1px solid #2a2a2a;
}

.avatar {
  margin-bottom: 20px;
}

.avatar img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ff3333;
  box-shadow: 0 10px 30px rgba(255, 51, 51, 0.2);
}

h1 {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 10px;
}

.title {
  font-size: 1.2rem;
  color: #ff3333;
  margin-bottom: 15px;
  font-weight: 600;
}

.bio {
  max-width: 600px;
  margin: 0 auto;
  color: #a0a0a0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero {
    padding: 30px 20px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .avatar img {
    width: 120px;
    height: 120px;
  }
}
</style>