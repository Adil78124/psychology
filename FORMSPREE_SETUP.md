# 📧 Настройка Formspree для формы контактов

## 🚀 Быстрая настройка

### 1️⃣ Регистрация на Formspree
1. Перейдите на [formspree.io](https://formspree.io)
2. Зарегистрируйтесь или войдите
3. Нажмите **"New Form"**

### 2️⃣ Создание формы
1. **Form Name**: `Sezim.abu Contact Form`
2. **Email**: ваш email для получения сообщений
3. **Нажмите "Create Form"**

### 3️⃣ Получение Form ID
После создания формы вы получите **Form ID** вида: `xrgjqkqw`

### 4️⃣ Обновление кода
В файле `src/pages/Contacts/Contacts.jsx` замените:
```javascript
const response = await fetch('https://formspree.io/f/xrgjqkqw', {
```

На ваш реальный Form ID:
```javascript
const response = await fetch('https://formspree.io/f/ВАШ_FORM_ID', {
```

## 📱 Что будет происходить

1. **Пользователь заполняет форму** на сайте
2. **Formspree получает данные** и отправляет email вам
3. **Вы получаете уведомление** на указанный email
4. **Пользователь видит** "Сообщение успешно отправлено!"

## 📧 Пример email от Formspree

```
From: noreply@formspree.io
To: ваш@email.com
Subject: New submission from Sezim.abu Contact Form

Name: Иван Иванов
Email: ivan@example.com
Phone: +7 (777) 123-45-67
Subject: Запись на консультацию
Message: Здравствуйте! Хотел бы записаться на консультацию.

Reply-To: ivan@example.com
```

## 🔧 Дополнительные настройки

### Уведомления в Telegram
Можно настроить автоматическую отправку в Telegram через Zapier:
1. Создайте аккаунт на [zapier.com](https://zapier.com)
2. Создайте Zap: Formspree → Telegram
3. Подключите ваш Telegram Bot

### Кастомизация email
В настройках Formspree можно:
- Изменить тему письма
- Добавить поля
- Настроить автоответ

## 🎯 Готово!

После настройки:
- ✅ Форма работает на GitHub Pages
- ✅ Сообщения приходят на email
- ✅ Пользователи видят подтверждение
- ✅ Работает на всех устройствах
