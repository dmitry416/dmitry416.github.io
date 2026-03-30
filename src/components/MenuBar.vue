<template>
  <div class="menu-bar">
    <button
        v-for="item in menuItems"
        :key="item.id"
        :class="['menu-btn', { active: activeCategory === item.id }]"
        @click="$emit('update-category', item.id)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  props: {
    activeCategory: {
      type: String,
      default: 'web'
    }
  },
  data() {
    return {
      menuItems: [
        { id: 'web', label: '🌐 Веб-разработка' },
        { id: 'game', label: '🎮 Геймдев' },
        { id: 'other', label: '⚡ Другие проекты' }
      ]
    }
  }
}
</script>

<style scoped>
.menu-bar {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  background: #111111;
  border-bottom: 1px solid #2a2a2a;
  flex-wrap: wrap;
}

.menu-btn {
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #1a1a1a;
  color: #a0a0a0;
}

.menu-btn:hover {
  transform: translateY(-2px);
  background: #222222;
  color: #ffffff;
}

.menu-btn.active {
  background: linear-gradient(135deg, #cc0000 0%, #810303 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 51, 51, 0.3);
}

@media (max-width: 768px) {
  .menu-bar {
    gap: 10px;
    padding: 15px;
  }

  .menu-btn {
    padding: 8px 20px;
    font-size: 0.9rem;
  }
}
</style>