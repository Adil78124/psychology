# 🚀 Инструкция по развертыванию сайта Sezim Psychology

## 📋 Что нужно развернуть:

1. **Backend** (Node.js сервер) → Render.com / Railway.app / Heroku
2. **Frontend** (React приложение) → Vercel / Netlify / GitHub Pages

---

## 1️⃣ Шаг 1: Заливаем код в GitHub

### Если репозиторий уже есть:

```bash
git add .
git commit -m "Добавлена система отправки сообщений в Telegram"
git push origin master
```

### Если репозиторий еще не создан:

1. Создайте новый репозиторий на GitHub.com
2. Выполните команды:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ВАШ-ЮЗЕРНЕЙМ/psychology.git
git push -u origin main
```

---

## 2️⃣ Шаг 2: Деплой Backend на Render.com (БЕСПЛАТНО)

### Почему Render?
- ✅ Полностью бесплатный
- ✅ Автоматический деплой из GitHub
- ✅ Поддержка Node.js из коробки
- ✅ Легко настроить переменные окружения

### Инструкция:

1. **Зарегистрируйтесь на https://render.com**
2. **New → Web Service**
3. **Connect GitHub** → выберите ваш репозиторий
4. **Настройки:**
   - **Name:** `sezim-psychology-backend`
   - **Root Directory:** `backend`
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free

5. **Environment Variables** (добавьте):
   ```
   TELEGRAM_BOT_TOKEN=7982241397:AAGzinVEu6w_BgUrTOy2PPyEtyfssMVKJvU
   TELEGRAM_CHAT_ID=-1002854667099
   FRONTEND_URL=https://ваш-сайт.vercel.app
   ADMIN_API_KEY=ваш-секретный-ключ-2025
   ```

6. **Нажмите "Create Web Service"**

7. **Скопируйте URL** (будет типа `https://sezim-psychology-backend.onrender.com`)

---

## 3️⃣ Шаг 3: Деплой Frontend на Vercel (БЕСПЛАТНО)

### Почему Vercel?
- ✅ Лучший хостинг для React/Vite
- ✅ Автоматический деплой из GitHub
- ✅ Быстрый CDN
- ✅ SSL сертификаты бесплатно

### Инструкция:

1. **Зарегистрируйтесь на https://vercel.com**
2. **New Project → Import Git Repository**
3. **Выберите ваш репозиторий psychology**
4. **Settings:**
   - **Root Directory:** `.` (оставьте пустым)
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. **Environment Variables:**
   ```
   VITE_API_BASE=https://sezim-psychology-backend.onrender.com
   ```
   (URL который вы получили от Render на шаге 2)

6. **Deploy**

7. **Ваш сайт будет доступен по адресу:**
   ```
   https://psychology-ВАШ-ДОМЕН.vercel.app
   ```

---

## 4️⃣ Шаг 4: Обновите CORS в Backend

После деплоя frontend, обновите `.env` на Render.com:

```
FRONTEND_URL=https://psychology-ВАШ-ДОМЕН.vercel.app
```

И **Restart Service** в Render панели.

---

## 5️⃣ Готово! Проверьте:

1. **Откройте ваш сайт:** https://psychology-ВАШ-ДОМЕН.vercel.app
2. **Перейдите в Контакты**
3. **Заполните форму и отправьте**
4. **Проверьте Telegram группу** - сообщение должно прийти! 📱

---

## 🔄 Автоматические обновления

Теперь при каждом `git push`:
- ✅ Vercel автоматически обновит frontend
- ✅ Render автоматически обновит backend

---

## 🆘 Решение проблем

### Backend не запускается на Render:
- Проверьте логи в Render Dashboard → Logs
- Убедитесь что все Environment Variables добавлены
- Проверьте что Root Directory = `backend`

### Frontend не работает:
- Проверьте что `VITE_API_BASE` указывает на ваш backend
- Откройте Console в браузере (F12) и посмотрите ошибки

### Сообщения не приходят в Telegram:
- Проверьте логи backend на Render
- Убедитесь что TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID правильные
- Проверьте что бот добавлен в группу и является админом

---

## 💰 Стоимость

- **Render Free Plan:** БЕСПЛАТНО
  - ⚠️ Backend засыпает после 15 минут неактивности
  - ⚠️ Первый запрос после сна может быть медленным (30 секунд)
  
- **Vercel Free Plan:** БЕСПЛАТНО
  - ✅ Без ограничений на сон
  - ✅ Быстрая загрузка везде

### Хотите чтобы backend не спал?

Платный план Render: $7/месяц - backend работает 24/7

---

## 📞 Нужна помощь?

Если что-то не получается - напишите мне, помогу разобраться!

---

## 🎉 Поздравляю!

Теперь ваш сайт:
- ✅ Работает круглосуточно
- ✅ Доступен из любой точки мира
- ✅ Автоматически обновляется при git push
- ✅ Имеет SSL сертификат (https)
- ✅ Отправляет сообщения в Telegram

**Успехов с проектом Sezim Psychology!** 🧠💙

