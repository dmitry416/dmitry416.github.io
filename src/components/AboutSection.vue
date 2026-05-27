<template>
  <div class="about-section">
    <div class="about-container">
      <div class="about-header">
        <h2>О себе</h2>
        <div class="header-line"></div>
      </div>

      <div class="about-content">
        <div class="about-text">
          <p class="highlight-text">
            Меня зовут Дмитрий, и я занимаюсь разработкой сайтов и игр.
          </p>
          <p>
            Имею опыт коммерческий опыт Web-разработки на Django + Vue.js (1.5 года). Также занимаюсь разработкой игр на Unity и выкладываю их в Play Market или Yandex Games.
          </p>
          <p>
            На данный момент учусь на 3-ем курсе в ДВФУ (Дальневосточный федеральный университет) на "Системного программиста"
            (Прикладная математика и информатика).
          </p>
        </div>

        <div class="about-stats">
          <div class="stat-item">
            <div class="stat-number">1.5 года</div>
            <div class="stat-label">Web разработки</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">2.5 года</div>
            <div class="stat-label">Разработки на Unity</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">>7</div>
            <div class="stat-label">Выполненных web-проектов</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">>19</div>
            <div class="stat-label">Выпущенных игр</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-section {
  padding: 50px 40px;
  background: linear-gradient(135deg, #0f0f0f 0%, #111111 100%);
  border-bottom: 1px solid #2a2a2a;
}

.about-container {
  max-width: 1000px;
  margin: 0 auto;
}

.about-header {
  margin-bottom: 30px;
  text-align: center;
}

.about-header h2 {
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 12px;
  display: inline-block;
  position: relative;
}

.header-line {
  width: 80px;
  height: 3px;
  background: linear-gradient(135deg, #ff3333 0%, #cc0000 100%);
  margin: 0 auto;
  border-radius: 3px;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.about-text p {
  color: #a0a0a0;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 1rem;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.highlight-text {
  color: #ffffff !important;
  font-size: 1.1rem !important;
  font-weight: 500;
  border-left: 3px solid #ff3333;
  padding-left: 20px;
  margin-bottom: 25px !important;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-self: center;
}

.stat-item {
  text-align: center;
  padding: 25px 20px;
  background: #1a1a1a;
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid #2a2a2a;
}

.stat-item:hover {
  transform: translateY(-5px);
  border-color: #ff3333;
  background: #1e1e1e;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #ff3333;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.85rem;
  color: #a0a0a0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.skills-highlight {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  padding-top: 30px;
  border-top: 1px solid #2a2a2a;
}

.skill-tag {
  padding: 8px 20px;
  background: #1a1a1a;
  border-radius: 50px;
  font-size: 0.9rem;
  color: #e0e0e0;
  transition: all 0.3s ease;
  border: 1px solid #2a2a2a;
}

.skill-tag:hover {
  transform: translateY(-2px);
  background: #222222;
  color: #ff3333;
  border-color: #ff3333;
}

@media (max-width: 768px) {
  .about-section {
    padding: 35px 25px;
  }

  .about-header h2 {
    font-size: 1.5rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .about-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .stat-item {
    padding: 20px 15px;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .highlight-text {
    font-size: 1rem !important;
  }

  .skills-highlight {
    gap: 10px;
  }

  .skill-tag {
    padding: 6px 16px;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .about-stats {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stat-item {
    padding: 15px;
  }
}
</style>