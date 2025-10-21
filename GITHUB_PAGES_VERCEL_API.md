# 🚀 Деплой на GitHub Pages + Vercel API

## Ваша цель:
✅ Frontend: https://adil78124.github.io/psychology/  
✅ Backend API: Vercel  
✅ Отправка в Telegram: работает!

---

## 📋 План действий:

### 1️⃣ Деплой API на Vercel (5 минут)

1. **Зайдите на https://vercel.com** (вход через GitHub)

2. **New Project**

3. **Import** ваш репозиторий `psychology` или как он называется

4. **⚠️ ВАЖНЫЕ НАСТРОЙКИ:**
   - **Framework Preset:** Vite (автоопределится)
   - **Root Directory:** оставьте пустым
   - **Build Settings:** оставьте как есть

5. **Environment Variables** - добавьте 2 переменные:
   ```
   TELEGRAM_BOT_TOKEN = 7982241397:AAGzinVEu6w_BgUrTOy2PPyEtyfssMVKJvU
   TELEGRAM_CHAT_ID = -1002854667099
   ```

6. **Deploy**

7. **Скопируйте URL** после деплоя (например):
   ```
   https://psychology-username.vercel.app
   ```

---

### 2️⃣ Создайте файл .env.production

В корне проекта создайте файл `.env.production`:

```bash
VITE_API_BASE=https://psychology-username.vercel.app
```

⚠️ **ЗАМЕНИТЕ** `psychology-username.vercel.app` на ваш URL от Vercel!

---

### 3️⃣ Обновите vite.config.js для GitHub Pages

Убедитесь что в `vite.config.js` правильный base:

```js
export default defineConfig({
  plugins: [react()],
  base: '/psychology/',  // ← название вашего репозитория
  // ...
})
```

---

### 4️⃣ Соберите и задеплойте на GitHub Pages

```bash
# Соберите production версию
npm run build

# Добавьте изменения в git
git add .
git commit -m "Настроена работа с Vercel API"
git push origin master

# Задеплойте на GitHub Pages
npm run deploy
```

---

### 5️⃣ Проверьте что всё работает!

1. Откройте: **https://adil78124.github.io/psychology/**
2. Перейдите в **"Контакты"**
3. Заполните форму
4. Отправьте
5. **Проверьте Telegram группу** - сообщение должно прийти! 📱

---

## 🔍 Как проверить что API работает:

Откройте в браузере:
```
https://ваш-url.vercel.app/api/send
```

Должно показать:
```json
{
  "ok": true,
  "status": "Telegram API работает!",
  "timestamp": "..."
}
```

---

## 🆘 Если не работает:

### 1. Проверьте консоль браузера (F12):

Должен быть запрос на:
```
https://ваш-url.vercel.app/api/send
```

А НЕ на:
```
localhost:5000/api/send
```

### 2. Если всё еще localhost:

Проверьте что файл `.env.production` создан и содержит:
```
VITE_API_BASE=https://ваш-url.vercel.app
```

Пересоберите:
```bash
npm run build
npm run deploy
```

### 3. Проверьте Vercel Logs:

1. Зайдите на Vercel Dashboard
2. Откройте ваш проект
3. Вкладка "Functions"
4. Найдите `/api/send`
5. Посмотрите логи ошибок

---

## ✅ Итого что получите:

✅ **Frontend:** GitHub Pages (бесплатно, быстро)  
✅ **Backend API:** Vercel (бесплатно)  
✅ **Отправка в Telegram:** работает!  
✅ **SSL сертификаты:** на обоих  
✅ **Автоматические обновления:** при git push

---

## 📊 Структура:

```
Пользователь
    ↓
GitHub Pages (https://adil78124.github.io/psychology/)
    ↓
Отправка формы
    ↓
Vercel API (https://your-project.vercel.app/api/send)
    ↓
Telegram Bot API
    ↓
Ваша группа в Telegram ✅
```

---

## 💡 Два URL - это нормально?

**ДА!** Это стандартная практика:
- Frontend на одном домене (GitHub Pages)
- API на другом (Vercel)
- Это называется "decoupled architecture"

Если хотите чтобы всё было на одном домене - деплойте ВСЁ на Vercel (инструкция в `VERCEL_DEPLOY.md`).

---

Готово! Теперь ваш сайт работает в интернете с отправкой в Telegram! 🎉

