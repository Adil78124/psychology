# 🚀 Деплой на Vercel (Frontend + Backend вместе)

## ✅ Теперь ВСЁ в одном месте!

Frontend и Backend работают вместе из одного репозитория!

---

## 📋 Что я сделал:

1. ✅ Создал `/api/send.js` - serverless функция для Telegram
2. ✅ Настроил `vercel.json` - конфигурация Vercel
3. ✅ Обновил `vite.config.js` - проксирование API в dev режиме
4. ✅ Упростил код - теперь просто `/api/send` вместо `http://localhost:5000/api/send`

---

## 🚀 Деплой за 3 минуты:

### Шаг 1: Залей в GitHub

```bash
git add .
git commit -m "Настроена единая деплой структура для Vercel"
git push origin master
```

### Шаг 2: Зайди на Vercel

1. **Зайди на https://vercel.com** (логин через GitHub)
2. **New Project**
3. **Import** твой репозиторий `psychology-main`
4. **Framework Preset:** Vite (автоматически определится)
5. **Не нажимай Deploy еще!**

### Шаг 3: Добавь переменные окружения

В секции **Environment Variables** добавь:

```
TELEGRAM_BOT_TOKEN = 7982241397:AAGzinVEu6w_BgUrTOy2PPyEtyfssMVKJvU
TELEGRAM_CHAT_ID = -1002854667099
```

### Шаг 4: Deploy!

Нажми **Deploy** и жди 2 минуты ☕

### Шаг 5: Готово! 🎉

Vercel даст тебе URL типа:
```
https://psychology-main-ваш-username.vercel.app
```

---

## 🧪 Как тестировать:

1. Открой свой сайт на Vercel
2. Перейди в **Контакты**
3. Заполни форму
4. Отправь
5. **Проверь Telegram группу** - сообщение должно прийти! 📱

---

## 🔧 Локальная разработка:

### Вариант 1: С локальным backend (как раньше)

Терминал 1:
```bash
cd backend
npm start
```

Терминал 2:
```bash
npm run dev
```

Открой `http://localhost:3000` - всё работает через прокси!

### Вариант 2: Без локального backend

Просто запусти:
```bash
npm run dev
```

API запросы будут падать (т.к. backend не запущен), но frontend работает.

---

## ⚡ Автоматические обновления:

Теперь при каждом `git push`:
- ✅ Vercel автоматически деплоит frontend
- ✅ Vercel автоматически деплоит API функции
- ✅ Всё работает сразу!

---

## 💰 Стоимость:

**Vercel Free Plan:**
- ✅ БЕСПЛАТНО
- ✅ Unlimited requests для Hobby проектов
- ✅ Serverless Functions включены
- ✅ Автоматический SSL
- ✅ CDN по всему миру

---

## 🔒 Безопасность:

- ✅ Токен Telegram в Environment Variables (не в коде!)
- ✅ `.gitignore` настроен правильно
- ✅ Секреты не попадут в Git

---

## 🆘 Решение проблем:

### API не работает на Vercel:

1. Проверь **Environment Variables** в Vercel Dashboard
2. Посмотри **Function Logs** в Vercel (там будут ошибки)
3. Убедись что файл `api/send.js` есть в репозитории

### Локально не работает:

1. Проверь что `vite.config.js` на месте
2. Запусти локальный backend: `cd backend && npm start`
3. Перезапусти Vite: `npm run dev`

---

## 📝 Структура проекта:

```
psychology-main/
├── api/                 # ← Serverless functions для Vercel
│   └── send.js         # ← API для отправки в Telegram
├── backend/            # ← Опциональный локальный backend для dev
├── src/                # ← React frontend
├── vercel.json         # ← Конфигурация Vercel
├── vite.config.js      # ← Проксирование API в dev режиме
└── package.json
```

---

## 🎉 Готово!

Теперь у тебя:
- ✅ Единый репозиторий для всего
- ✅ Автоматический деплой
- ✅ Frontend + Backend работают вместе
- ✅ Бесплатный хостинг
- ✅ SSL сертификат
- ✅ Отправка в Telegram работает!

**Просто пуш в Git = автоматический деплой всего сайта!** 🚀

