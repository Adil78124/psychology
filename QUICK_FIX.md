# 🚨 БЫСТРОЕ ИСПРАВЛЕНИЕ ОШИБКИ

## Проблема:
Сайт пытается обратиться к `localhost:5000` - это не работает когда сайт в интернете!

## ✅ Решение за 5 минут:

### Шаг 1: Деплой Backend на Render.com

1. Зайди на **https://render.com** (регистрация через GitHub)
2. Нажми **"New +" → "Web Service"**
3. Выбери репозиторий **psychology-main**
4. Настройки:
   - **Name:** `sezim-backend`
   - **Root Directory:** `backend`
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Free plan**

5. **Environment Variables** (добавь 4 переменные):
   ```
   TELEGRAM_BOT_TOKEN = 7982241397:AAGzinVEu6w_BgUrTOy2PPyEtyfssMVKJvU
   TELEGRAM_CHAT_ID = -1002854667099
   FRONTEND_URL = *
   PORT = 5000
   ```

6. Нажми **"Create Web Service"**
7. Подожди 3 минуты
8. **СКОПИРУЙ URL** (например: `https://sezim-backend.onrender.com`)

---

### Шаг 2: Обнови файл `.env.production`

1. Открой файл `.env.production` в корне проекта
2. Замени URL на тот что получил от Render:
   ```
   VITE_API_BASE=https://твой-url.onrender.com
   ```

---

### Шаг 3: Пересобери и задеплой

```bash
npm run build
git add .
git commit -m "Fix: update backend URL"
git push origin master
```

Если деплоишь на **GitHub Pages**:
```bash
npm run deploy
```

Если на **Vercel/Netlify** - они автоматически пересоберут после git push.

---

### Шаг 4: Проверь

1. Открой сайт
2. Зайди в Контакты
3. Отправь форму
4. **Проверь Telegram** - сообщение должно прийти! ✅

---

## ⚠️ Важно:

**Backend на бесплатном плане Render засыпает** через 15 минут неактивности.
- Первый запрос после сна будет медленным (20-30 сек)
- Это нормально для бесплатного плана
- Платный план ($7/мес) = backend работает 24/7

---

## 🆘 Если не получается:

1. Проверь логи backend на Render (вкладка "Logs")
2. Проверь консоль браузера (F12)
3. Убедись что все Environment Variables добавлены на Render

---

Готово! 🎉

