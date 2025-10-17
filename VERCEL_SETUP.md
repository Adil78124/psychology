# 🚀 Настройка Vercel для Telegram Bot API

## 📋 Пошаговая инструкция

### 1️⃣ Подключение к Vercel

1. **Перейдите на [vercel.com](https://vercel.com)**
2. **Войдите через GitHub** (используйте тот же аккаунт, что и для репозитория)
3. **Нажмите "New Project"**
4. **Выберите репозиторий** `anubizze/psychology`
5. **Нажмите "Deploy"**

### 2️⃣ Настройка переменных окружения

После деплоя:

1. **Перейдите в Settings** вашего проекта
2. **Выберите "Environment Variables"**
3. **Добавьте переменные:**

```
Name: TELEGRAM_BOT_TOKEN
Value: ваш_токен_бота_от_BotFather

Name: TELEGRAM_CHAT_ID  
Value: ваш_chat_id_от_userinfobot
```

4. **Нажмите "Save"**

### 3️⃣ Передеплой проекта

1. **Перейдите в "Deployments"**
2. **Нажмите на последний деплой**
3. **Нажмите "Redeploy"** (чтобы применить переменные окружения)

### 4️⃣ Проверка API endpoint

После деплоя ваш API будет доступен по адресу:
```
https://ваш-проект.vercel.app/api/contact
```

## 🔧 Альтернативный способ (через vercel.json)

Если переменные окружения не работают, можно использовать `vercel.json`:

1. **Откройте файл `vercel.json`**
2. **Замените значения:**

```json
{
  "env": {
    "TELEGRAM_BOT_TOKEN": "ваш_реальный_токен",
    "TELEGRAM_CHAT_ID": "ваш_реальный_chat_id"
  }
}
```

3. **Закоммитьте и запушьте изменения**

## 🧪 Тестирование

### Проверка API endpoint:
```bash
curl -X POST https://ваш-проект.vercel.app/api/contact \
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

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vercel Functions](https://vercel.com/docs/concepts/functions/serverless-functions)
