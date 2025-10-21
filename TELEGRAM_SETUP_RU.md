# 📱 Настройка Telegram бота для приема сообщений

## ✅ У вас уже есть:
- **Bot Token:** `7982241397:AAGzinVEu6w_BgUrTOy2PPyEtyfssMVKJvU`
- **Chat ID:** `-1002854667099`

## 🚀 Быстрый запуск

### 1. Установите зависимости backend

```bash
cd backend
npm install
```

### 2. Проверьте файл `.env`

Файл `backend/.env` уже настроен с вашими данными:

```
PORT=5000
TELEGRAM_BOT_TOKEN=7982241397:AAGzinVEu6w_BgUrTOy2PPyEtyfssMVKJvU
TELEGRAM_CHAT_ID=-1002854667099
FRONTEND_URL=http://localhost:5173
ADMIN_API_KEY=your-super-secret-admin-key-here
```

### 3. Запустите backend

```bash
npm start
```

Вы должны увидеть:
```
✅ Telegram Bot настроен и готов к отправке сообщений
📱 Chat ID: -1002854667099
🚀 Backend запущен на порту 5000
```

### 4. Запустите frontend (в другом терминале)

```bash
cd ..
npm run dev
```

## 🧪 Тестирование

1. Откройте сайт: http://localhost:5173
2. Перейдите на страницу **"Контакты"**
3. Заполните форму обратной связи
4. Нажмите **"Отправить сообщение"**
5. Проверьте вашу Telegram группу — сообщение должно прийти!

Также можете протестировать **подписку на новости**:
1. Перейдите на страницу **"Новости"**
2. Прокрутите вниз до формы подписки
3. Введите email и нажмите **"Подписаться"**
4. Проверьте Telegram группу!

## 🔧 Проверка настроек бота

### Проверить, что бот работает:

```bash
curl https://api.telegram.org/bot7982241397:AAGzinVEu6w_BgUrTOy2PPyEtyfssMVKJvU/getMe
```

Должен вернуть информацию о боте.

### Отправить тестовое сообщение:

```bash
curl -X POST https://api.telegram.org/bot7982241397:AAGzinVEu6w_BgUrTOy2PPyEtyfssMVKJvU/sendMessage \
  -H "Content-Type: application/json" \
  -d '{
    "chat_id": "-1002854667099",
    "text": "🧪 Тест! Бот работает!"
  }'
```

## 📝 Что получаете в Telegram

При отправке формы контактов в группу придет:

```
📩 Новое сообщение с сайта Sezim Psychology

👤 Имя: Иван Иванов
📧 Email: ivan@example.com
📞 Телефон: +7 777 123 45 67
🎯 Тема: Запись на консультацию

💬 Сообщение:
Здравствуйте, хочу записаться на консультацию...

⏰ Время: 21.10.2025, 15:30:45
```

## 🌐 Развертывание в продакшн

### Backend на Render.com:

1. Зайдите на https://render.com
2. New → Web Service
3. Подключите ваш GitHub репозиторий
4. Настройки:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. В **Environment Variables** добавьте:
   - `TELEGRAM_BOT_TOKEN`: `7982241397:AAGzinVEu6w_BgUrTOy2PPyEtyfssMVKJvU`
   - `TELEGRAM_CHAT_ID`: `-1002854667099`
   - `FRONTEND_URL`: `https://ваш-сайт.vercel.app`

### Frontend на Vercel:

1. Зайдите на https://vercel.com
2. Import Project → подключите GitHub
3. В **Environment Variables** добавьте:
   - `VITE_API_BASE`: `https://ваш-backend.onrender.com`

## 🔐 Безопасность

✅ **Токен бота в безопасности** — он в .env и не попадет в Git (добавлен в .gitignore)

✅ **Rate limiting** — максимум 10 запросов в минуту

✅ **CORS** — настроен только для вашего фронтенда

⚠️ **НЕ ПУБЛИКУЙТЕ** токен в публичных репозиториях!

## 🆘 Решение проблем

### Сообщения не приходят в группу

1. Проверьте, что бот **администратор** группы
2. Проверьте Chat ID (должен начинаться с минуса)
3. Проверьте в терминале backend логи ошибок

### Ошибка "Unauthorized"

- Токен бота неправильный или устарел
- Создайте нового бота через @BotFather

### Ошибка "Chat not found"

- Chat ID неправильный
- Бот не добавлен в группу или не является админом

### Backend не запускается

```bash
cd backend
rm -rf node_modules
npm install
npm start
```

## 📞 Контакты

Если что-то не работает — проверьте логи в терминале backend, там будет детальная информация об ошибках.

---

✨ **Готово! Теперь все сообщения с сайта будут приходить в вашу Telegram группу!**

