<template>
  <div class="projects-section">
    <h3>Мои проекты</h3>
    <div class="projects-grid">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <div class="project-image">
          <img v-if="project.image" :src="project.image" :alt="project.name">
        </div>
        <div class="project-info">
          <h4>{{ project.name }}</h4>
          <p>{{ project.description }}</p>
          <div class="project-links">
            <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="link-btn github"
            >
              <span class="icon">📦</span> GitHub
            </a>
            <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="link-btn demo"
            >
              <span class="icon">🔗</span> Демо
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsGrid',
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.projects-section {
  margin: 50px 0;
}

.projects-section h3 {
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 30px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

.project-card {
  background: #1a1a1a;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #2a2a2a;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  border-color: #ff3333;
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 20px;
}

.project-info h4 {
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 10px;
}

.project-info p {
  color: #a0a0a0;
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.project-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.link-btn.github {
  background: #222222;
  color: #ffffff;
  border: 1px solid #2a2a2a;
}

.link-btn.github:hover {
  background: #2a2a2a;
  transform: translateY(-2px);
  border-color: #ff3333;
}

.link-btn.demo {
  background: linear-gradient(135deg, #cc0000 0%, #810303 100%);
  color: white;
}

.link-btn.demo:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 51, 51, 0.4);
}

.icon {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .projects-section h3 {
    font-size: 1.5rem;
  }

  .project-info h4 {
    font-size: 1.2rem;
  }
}
</style>