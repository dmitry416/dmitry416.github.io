<template>
  <footer class="footer">
    <div class="social-links">
      <a href="https://github.com/dmitry416" target="_blank" class="social-link">
        <span class="social-icon">📌</span> GitHub
      </a>
      <a href="https://t.me/mozharovdm" target="_blank" class="social-link">
        <span class="social-icon">💬</span> Telegram
      </a>
    </div>
    <div class="email">
      <span class="email-icon">📧</span>
      <a href="mailto:demamotharov@gmail.com">demamotharov@gmail.com</a>
    </div>
    <div class="copyright">
      <p>© 2026 Можаров Дмитрий. Никакие права не защищены.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background: #0a0a0a;
  color: #ffffff;
  padding: 40px 30px;
  text-align: center;
  border-top: 1px solid #2a2a2a;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-bottom: 25px;
}

.social-link {
  color: #a0a0a0;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 50px;
  transition: all 0.3s ease;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
}

.social-link:hover {
  background: #222222;
  color: #ff3333;
  transform: translateY(-2px);
  border-color: #ff3333;
}

.social-icon {
  font-size: 1.2rem;
}

.email {
  margin-bottom: 25px;
  font-size: 1rem;
}

.email a {
  color: #a0a0a0;
  text-decoration: none;
  border-bottom: 2px solid #ff3333;
  transition: all 0.3s ease;
}

.email a:hover {
  color: #ff3333;
  border-bottom-color: #ffffff;
}

.email-icon {
  margin-right: 10px;
  color: #ff3333;
}

.copyright {
  font-size: 0.85rem;
  color: #666666;
}

@media (max-width: 768px) {
  .footer {
    padding: 30px 20px;
  }

  .social-links {
    gap: 15px;
  }

  .social-link {
    padding: 6px 15px;
    font-size: 0.85rem;
  }

  .email {
    font-size: 0.9rem;
  }
}
</style>