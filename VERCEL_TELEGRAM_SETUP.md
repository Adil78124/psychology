# 🤖 Настройка Telegram Bot на Vercel

## 🚀 Пошаговая инструкция

### 1️⃣ Создание Telegram Bot

1. **Откройте Telegram** и найдите [@BotFather](https://t.me/botfather)
2. **Отправьте команду** `/newbot`
3. **Введите имя бота** (например: `Sezim.abu Contact Bot`)
4. **Введите username бота** (например: `sezim_abu_contact_bot`)
5. **Скопируйте токен** - он выглядит как `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`

### 2️⃣ Получение Chat ID

#### Способ 1: Через бота @userinfobot
1. Найдите бота [@userinfobot](https://t.me/userinfobot)
2. Отправьте ему любое сообщение
3. Скопируйте ваш **Chat ID** (число вида `123456789`)

#### Способ 2: Через API
1. Отправьте сообщение вашему боту
2. Откройте в браузере: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Найдите `"chat":{"id":123456789}` - это ваш Chat ID

### 3️⃣ Настройка переменных окружения в Vercel

1. **Перейдите в Vercel Dashboard**: [https://vercel.com/verients-projects/psychologyabu](https://vercel.com/verients-projects/psychologyabu)
2. **Откройте Settings** → **Environment Variables**
3. **Добавьте переменные:**

```
Name: TELEGRAM_BOT_TOKEN
Value: ваш_токен_от_BotFather
Environment: Production, Preview, Development

Name: TELEGRAM_CHAT_ID  
Value: ваш_chat_id_от_userinfobot
Environment: Production, Preview, Development
```

4. **Нажмите "Save"**

### 4️⃣ Передеплой проекта

1. **Перейдите в "Deployments"**
2. **Нажмите на последний деплой**
3. **Нажмите "Redeploy"** (чтобы применить переменные окружения)

### 5️⃣ Проверка API endpoint

После деплоя ваш API будет доступен по адресу:
```
https://psychologyabu.vercel.app/api/contact
```

## 🧪 Тестирование

### Проверка API endpoint:
```bash
curl -X POST https://psychologyabu.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Тест",
    "email": "test@example.com",
    "phone": "+77771234567",
    "subject": "Тестовое сообщение",
    "message": "Это тестовое сообщение",
    "privacy": true
  }'
```

### Проверка в браузере:
1. Откройте форму контактов на сайте
2. Заполните и отправьте тестовое сообщение
3. Проверьте, что сообщение пришло в Telegram

## 📱 Пример сообщения в Telegram

```
📩 Новое сообщение с сайта Sezim.abu

👤 Имя: Иван Иванов
📧 Email: ivan@example.com
📞 Телефон: +7 (777) 123-45-67
🎯 Тема: Запись на консультацию

💬 Сообщение:
Здравствуйте! Хотел бы записаться на консультацию.

⏰ Время: 17.01.2025, 21:18:45
🌐 IP: 192.168.1.1
```

## 🔍 Troubleshooting

### Проблема: "API endpoint не найден"
**Решение:**
1. Убедитесь, что файл `vercel.json` есть в корне проекта
2. Проверьте, что папка `api/` содержит файл `contact.js`
3. Передеплойте проект

### Проблема: "TELEGRAM_BOT_TOKEN не настроен"
**Решение:**
1. Проверьте переменные окружения в Vercel
2. Убедитесь, что токен скопирован полностью
3. Передеплойте проект после добавления переменных

### Проблема: "CORS ошибка"
**Решение:**
- Vercel автоматически обрабатывает CORS для API routes
- Проблема может быть в коде - проверьте логи в Vercel Dashboard

### Проблема: "Форма не отправляется"
**Решение:**
1. Откройте Developer Tools (F12)
2. Проверьте Network tab на ошибки
3. Посмотрите логи в Vercel Dashboard

## 📊 Мониторинг

### Vercel Dashboard:
- **Functions** - статистика API вызовов
- **Logs** - логи ошибок и успешных запросов
- **Analytics** - аналитика использования

### Telegram:
- Проверяйте входящие сообщения
- Убедитесь, что бот не заблокирован

## 🎯 Готово!

После настройки:
- ✅ API endpoint работает на Vercel
- ✅ Форма отправляет сообщения в Telegram
- ✅ Переменные окружения защищены
- ✅ Автоматический деплой при изменениях в Git

## 🔗 Полезные ссылки

- [Vercel Dashboard](https://vercel.com/verients-projects/psychologyabu)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vercel Functions](https://vercel.com/docs/concepts/functions/serverless-functions)
