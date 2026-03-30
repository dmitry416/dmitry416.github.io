<template>
  <div class="tech-stack">
    <h3>Технологии и инструменты</h3>
    <div class="tech-grid">
      <div v-for="(tech, index) in technologies" :key="index" class="tech-item">
        <span class="tech-dot"></span>
        <span>{{ tech }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechStack',
  props: {
    technologies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.tech-stack {
  margin: 40px 0 20px;
  padding: 30px;
  background: #1a1a1a;
  border-radius: 20px;
  border: 1px solid #2a2a2a;
}

.tech-stack h3 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 25px;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.tech-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: #222222;
  border-radius: 50px;
  font-size: 0.9rem;
  color: #e0e0e0;
  transition: all 0.3s ease;
  border: 1px solid #2a2a2a;
}

.tech-item:hover {
  transform: translateY(-2px);
  background: #2a2a2a;
  color: #ff3333;
  border-color: #ff3333;
}

.tech-dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #ff3333 0%, #cc0000 100%);
  border-radius: 50%;
}

@media (max-width: 768px) {
  .tech-stack {
    padding: 20px;
  }

  .tech-stack h3 {
    font-size: 1.3rem;
  }

  .tech-item {
    padding: 6px 14px;
    font-size: 0.85rem;
  }
}
</style>