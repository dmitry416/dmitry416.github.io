<template>
  <div id="app">
    <div class="container">
      <HeroSection />
      <AboutSection />
      <MenuBar :active-category="activeCategory" @update-category="activeCategory = $event" />
      <ContentSection :category="activeCategory" />
      <Footer />
    </div>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import MenuBar from './components/MenuBar.vue'
import ContentSection from './components/ContentSection.vue'
import Footer from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    AboutSection,
    MenuBar,
    ContentSection,
    Footer
  },
  data() {
    return {
      activeCategory: 'web'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #0a0a0a;
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background: #111111;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

@media (max-width: 768px) {
  #app {
    padding: 20px 10px;
  }

  .container {
    border-radius: 20px;
  }
}

::-webkit-scrollbar {
  width: 0;
}
</style>