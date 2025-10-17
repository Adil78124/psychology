# 📧 Настройка отправки email для формы контактов

## 🚀 Быстрая настройка через EmailJS

### 1️⃣ Регистрация на EmailJS
1. Перейдите на [https://www.emailjs.com/](https://www.emailjs.com/)
2. Зарегистрируйтесь или войдите в аккаунт
3. Создайте новый Email Service (Gmail, Outlook, Yahoo и др.)

### 2️⃣ Создание Email Template
1. В панели управления перейдите в **Email Templates**
2. Создайте новый шаблон с ID: `template_contact`
3. Используйте следующий шаблон:

```html
Новое сообщение с сайта Sezim.abu

Имя: {{from_name}}
Email: {{from_email}}
Телефон: {{phone}}
Тема: {{subject}}

Сообщение:
{{message}}

---
Отправлено: {{date}}
```

### 3️⃣ Получение ключей
1. **Service ID**: `service_xxxxxxx` (из раздела Email Services)
2. **Template ID**: `template_xxxxxxx` (из раздела Email Templates)  
3. **Public Key**: `your_public_key_here` (из раздела Account)

### 4️⃣ Обновление конфигурации
Откройте файл `src/utils/emailService.js` и замените:

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'service_xxxxxxx', // ← Ваш Service ID
  templateId: 'template_xxxxxxx', // ← Ваш Template ID
  publicKey: 'your_public_key_here', // ← Ваш Public Key
};
```

## 🔄 Альтернативные варианты

### Вариант 1: Formspree
1. Зарегистрируйтесь на [https://formspree.io/](https://formspree.io/)
2. Создайте новую форму
3. Замените `YOUR_FORM_ID` в `emailService.js` на ваш Form ID

### Вариант 2: Netlify Forms
1. Если сайт размещен на Netlify
2. Добавьте `data-netlify="true"` к форме
3. Используйте функцию `sendViaNetlifyForms`

### Вариант 3: Собственный сервер
1. Создайте API endpoint на вашем сервере
2. Обновите функцию `sendContactMessage` для работы с вашим API

## 🧪 Тестирование

После настройки:
1. Запустите сайт: `npm run dev`
2. Перейдите на страницу контактов
3. Заполните и отправьте тестовое сообщение
4. Проверьте, что email пришел на указанный адрес

## 🔧 Troubleshooting

### Проблема: "EmailJS не загружен"
**Решение**: Проверьте интернет-соединение и блокировщики рекламы

### Проблема: "Ошибка при отправке"
**Решение**: 
1. Проверьте правильность Service ID, Template ID и Public Key
2. Убедитесь, что email service настроен корректно
3. Проверьте лимиты EmailJS (100 писем/месяц на бесплатном тарифе)

### Проблема: "CORS ошибка"
**Решение**: EmailJS работает через CORS, проблем быть не должно

## 📊 Мониторинг

EmailJS предоставляет статистику отправленных писем в панели управления:
- Количество отправленных писем
- Статус доставки
- Ошибки отправки

## 💡 Дополнительные возможности

### Добавление вложений
```javascript
const templateParams = {
  // ... существующие параметры
  attachment: file, // Файл для отправки
};
```

### Кастомизация уведомлений
```javascript
// В emailService.js можно добавить разные шаблоны для разных типов сообщений
const getTemplateId = (subject) => {
  switch(subject) {
    case 'consultation': return 'template_consultation';
    case 'question': return 'template_question';
    default: return 'template_contact';
  }
};
```

## 🎯 Готово!

После настройки форма контактов будет:
- ✅ Отправлять реальные email
- ✅ Показывать статус отправки
- ✅ Валидировать данные
- ✅ Работать на всех устройствах
- ✅ Поддерживать два языка (RU/KZ)
