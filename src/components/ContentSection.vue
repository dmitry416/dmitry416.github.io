<template>
  <div class="content-section">
    <div class="description">
      <h2>{{ currentData.title }}</h2>
      <p>{{ currentData.description }}</p>
    </div>

    <ProjectsGrid :projects="currentData.projects" />
    <TechStack :technologies="currentData.technologies" />
  </div>
</template>

<script>
import ProjectsGrid from './ProjectsGrid.vue'
import TechStack from './TechStack.vue'

export default {
  name: 'ContentSection',
  components: {
    ProjectsGrid,
    TechStack
  },
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    currentData() {
      const data = {
        web: {
          title: 'Мой путь в веб-разработке',
          description: 'За последние 2 года я создал множество проектов, от небольших телеграм ботов до сложных веб приложений. Специализируюсь на React/Vue и Django/DRF.',
          projects: [
            {
              name: 'Ruscord',
              description: 'Аналог Discord. Это пет-проект, в котором реализовано как текстовое, так и голосовое общение по Websocket`ам.',
              image: require('@/assets/ruscord.png'),
              github: 'https://github.com/dmitry416/Ruscord',
              demo: null
            },
            {
              name: 'FyutScan: трекер калорий',
              description: 'Web-app в телеграме, позволяющий удобно вести учет КБЖУ и добавлять съеденные блюда по фото/аудио/тексту.',
              image: require('@/assets/FyutScan.jpg'),
              github: null,
              demo: 'https://t.me/Fyutscan_bot'
            },
            {
              name: 'ТСБ. Обмен валюты',
              description: 'Разрабатывал телеграм бота трансстройбанка, в котором можно выбрать город, валюту и посмотреть курс в желаемом офисе.',
              image: require('@/assets/tsb.jpg'),
              github: null,
              demo: 'https://t.me/TSB_ExchangeBot'
            },
            {
              name: 'Другие проекты',
              description: 'Также есть проекты, на которые я не могу дать ссылку по разным причинам. Среди таких: Корпоративный бот (этот бот не для публичного пользования), Бот для знакомств (заказчик передумал деплоить бота), "Экомарафон" (временный бот для компании, ныне не работает).',
              image: null,
              github: null,
              demo: null
            }
          ],
          technologies: ['Vue.js', 'React', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Docker', 'Celery']
        },
        game: {
          title: 'Мои gamedev проекты',
          description: 'Создаю игры на Unity и Unreal Engine, от гиперказуальных до более сложных RPG прототипов.',
          projects: [
            {
              name: 'Arrow IO',
              description: 'В игре необходимо сражатся с врагами и повышать свой уровень, чтобы становиться сильнее. Была ранее доступна на Yandex Games, где был подключен ещё и донат, но сейчас игру от туда удалили из-за отсутствия активности игроков.',
              image: require('@/assets/arrowio.webp'),
              github: 'https://github.com/dmitry416/ArrowIO',
              demo: 'https://www.rustore.ru/catalog/app/com.RonsemGames.ArrowIO'
            },
            {
              name: 'Sword IO',
              description: '2D игра, в которой нужно покупать мечи и прокачивать персонажа. Уникальная система боевки - мечи крутятся вокруг персонажа и в зависимости от уровня, либо ударяют противника, либо ломаются. Пока доступна на Yandex Games (там же можно перейти на мой аккаунт разработчика и посмотреть оставшиеся игры).',
              image: require('@/assets/swordio.png'),
              github: 'https://github.com/dmitry416/sword.io',
              demo: 'https://yandex.ru/games/app/292991'
            },
            {
              name: 'Другие игры',
              description: 'На самом деле было выпущено большое количество игр в Yandex Games, но ввиду их политики, почти все игры были удалены. А так имею опыт разработки практически всех жанров игр. Я разрабатывал гонки, шутеры, как 2д, так и 3д платформеры, а также хорроры (в одном из хорроров реализовал мультиплеер на основе Photon PUN). (На  фото показаны удаленные игры)',
              image: require('@/assets/deleted.png'),
              github: null,
              demo: null
            }
          ],
          technologies: ['Unity', 'C#', 'Unreal Engine 5', 'Blender']
        },
        other: {
          title: 'Другие интересные проекты',
          description: 'Помимо веба и игр, я также занимаюсь и другими интересными проектами.',
          projects: [
            {
              name: 'MariaDB',
              description: 'Пробую контрибнуться в MariaDB. На данный момент сделал PR и получил фидбек. Сейчас работаю над ошибками и в ближайшем времени попробую ещё раз.',
              image: null,
              github: 'https://github.com/MariaDB/server/pull/4751',
              demo: null
            },
            {
              name: 'CS2 Cheat',
              description: 'Чит для CS2. Сейчас скорее всего не работает, так как вышли обновления в CS2 и сменились офсеты, а автоматический поиск офсетов я не делал.',
              image: null,
              github: 'https://github.com/dmitry416/cs2cheat',
              demo: null
            },
            {
              name: 'Haskellgram',
              description: 'Чат по локальной сети, написанный на Haskell. Хоть этот проект не у меня на гитхабе, но я внес существенный вклад в разработку.',
              image: require('@/assets/haskellgram.png'),
              github: 'https://github.com/verhovv/haskellgram',
              demo: null
            }
          ],
          technologies: ['С++', 'Haskell']
        }
      }
      return data[this.category]
    }
  }
}
</script>

<style scoped>
.content-section {
  padding: 40px;
}

.description {
  margin-bottom: 40px;
}

.description h2 {
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.description h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, #cc0000 0%, #810303 100%);
}

.description p {
  color: #a0a0a0;
  line-height: 1.8;
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .content-section {
    padding: 25px;
  }

  .description h2 {
    font-size: 1.5rem;
  }

  .description p {
    font-size: 0.95rem;
  }
}
</style>