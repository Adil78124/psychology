# Sezim Psychology - Backend API

Backend для отправки сообщений с сайта в Telegram группу через Telegram Bot API.

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
cd backend
npm install
```

### 2. Настройка Telegram бота

#### Шаг 1: Создание бота
1. Откройте Telegram и найдите **@BotFather**
2. Отправьте команду `/newbot`
3. Придумайте имя и username для бота
4. BotFather даст вам **токен** (например: `1234567890:ABCdef...`)

#### Шаг 2: Создание группы и получение Chat ID
1. Создайте группу в Telegram
2. Добавьте туда своего бота
3. Сделайте бота **администратором** группы
4. Напишите что-нибудь в группу
5. Откройте в браузере:
   ```
   https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates
   ```
6. Найдите в JSON строку `"chat":{"id":-1234567890,...}`
7. Скопируйте это число (с минусом)

#### Шаг 3: Настройка .env

Создайте файл `.env`:

```bash
cp .env.example .env
```

Заполните:
```
TELEGRAM_BOT_TOKEN=1234567890:ABCdef...
TELEGRAM_CHAT_ID=-1234567890
```

### 3. Запуск сервера

**Development (с автоперезагрузкой):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

Сервер запустится на `http://localhost:5000`

## 📡 API Endpoints

### 1. Health Check
```
GET /api/health
```

Проверка работоспособности сервера.

**Ответ:**
```json
{
  "ok": true,
  "status": "Backend работает!",
  "timestamp": "2025-10-21T12:00:00.000Z"
}
```

### 2. Отправка сообщения
```
POST /api/send
```

**Тело запроса:**
```json
{
  "email": "recipient@example.com",
  "subject": "Тема сообщения",
  "message": "Текст сообщения",
  "name": "Имя отправителя (опционально)",
  "phone": "Телефон (опционально)"
}
```

**Успешный ответ:**
```json
{
  "ok": true,
  "message": "Сообщение успешно отправлено! ID: <message-id>",
  "messageId": "<message-id>"
}
```

**Ошибка:**
```json
{
  "error": "Описание ошибки"
}
```

### 3. Массовая рассылка (защищено API ключом)
```
POST /api/send-bulk
Headers: X-Api-Key: your-admin-api-key
```

**Тело запроса:**
```json
{
  "recipients": ["email1@example.com", "email2@example.com"],
  "subject": "Тема рассылки",
  "message": "Текст сообщения"
}
```

## 🔒 Безопасность

- ✅ Rate limiting: 10 запросов в минуту с одного IP
- ✅ CORS настроен только для вашего фронтенда
- ✅ Валидация email адресов
- ✅ API ключ для массовой рассылки
- ✅ Защита от SMTP инъекций через Nodemailer

## 🚀 Развертывание

### Render.com (рекомендуется)

1. Создайте аккаунт на https://render.com
2. New → Web Service
3. Подключите ваш Git репозиторий
4. Настройки:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** добавьте все переменные из `.env`

### Railway.app

1. Создайте аккаунт на https://railway.app
2. New Project → Deploy from GitHub
3. Выберите репозиторий
4. В настройках укажите Root Directory: `backend`
5. Добавьте переменные окружения

### Heroku

1. Создайте аккаунт на https://heroku.com
2. Создайте новое приложение
3. Deploy:
   ```bash
   cd backend
   heroku git:remote -a your-app-name
   git push heroku main
   ```
4. Добавьте переменные окружения через Dashboard

## 📝 Лицензия

MIT

