# 🚀 Автоматический деплой на Vercel из GitHub

## ✅ Код уже в GitHub!

Теперь настроим Vercel чтобы он автоматически деплоился из вашего репозитория.

---

## 🎯 Два варианта:

### Вариант 1: У вас УЖЕ ЕСТЬ проект на Vercel

1. **Зайдите на https://vercel.com**
2. Откройте **ваш существующий проект**
3. Перейдите в **Settings** → **Git**
4. Нажмите **Connect Git Repository**
5. Выберите **GitHub** и ваш репозиторий

### Вариант 2: Создать НОВЫЙ проект на Vercel

Следуйте инструкции ниже ⬇️

---

## 📋 Пошаговая инструкция (новый проект):

### Шаг 1: Зайдите на Vercel

1. Откройте **https://vercel.com**
2. Войдите через **GitHub**

### Шаг 2: Импортируйте репозиторий

1. Нажмите **"New Project"** или **"Add New..."** → **"Project"**
2. Найдите ваш репозиторий (должен быть в списке)
3. Нажмите **"Import"**

### Шаг 3: Настройте проект

**Framework Preset:** Vite (должен определиться автоматически)

**Build Settings:**
- Build Command: `npm run build` ✅ (оставить как есть)
- Output Directory: `dist` ✅ (оставить как есть)
- Install Command: `npm install` ✅ (оставить как есть)

**Root Directory:** `. ` (оставить пустым или точку)

### Шаг 4: ⚠️ ВАЖНО! Environment Variables

Нажмите **"Environment Variables"** и добавьте:

```
TELEGRAM_BOT_TOKEN = 7982241397:AAGzinVEu6w_BgUrTOy2PPyEtyfssMVKJvU
TELEGRAM_CHAT_ID = -1002854667099
```

### Шаг 5: Deploy!

Нажмите **"Deploy"** и подождите 2-3 минуты ☕

---

## 🎉 После деплоя:

### 1. Получите URL от Vercel

Vercel даст вам URL типа:
```
https://psychology-main.vercel.app
```

**СКОПИРУЙТЕ ЕГО!**

### 2. Обновите .env.production локально

Откройте файл `.env.production` в корне проекта и замените:

```bash
VITE_API_BASE=https://psychology-main.vercel.app
```

⚠️ **Замените** на ваш реальный URL от Vercel!

### 3. Обновите код в GitHub

```bash
git add .env.production
git commit -m "Update Vercel API URL"
git push origin master
```

Vercel **автоматически пересоберёт** проект!

---

## ⚡ Автоматические обновления:

Теперь при каждом `git push origin master`:
- ✅ Vercel **автоматически** деплоит новую версию
- ✅ Занимает 2-3 минуты
- ✅ Не нужно ничего делать вручную!

---

## 🧪 Проверка:

### 1. Проверьте API работает

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

### 2. Проверьте сайт

Откройте:
```
https://ваш-url.vercel.app
```

Перейдите в **"Контакты"**, заполните форму, отправьте.

**Проверьте Telegram группу!** 📱

---

## 📊 Что получили:

✅ **Сайт на Vercel:** https://ваш-url.vercel.app  
✅ **API в том же месте:** https://ваш-url.vercel.app/api/send  
✅ **Автоматический деплой** из GitHub  
✅ **Отправка в Telegram работает!**  
✅ **Бесплатный хостинг**  
✅ **SSL сертификат**

---

## 🔄 GitHub Pages vs Vercel

У вас теперь будет **2 версии сайта**:

1. **GitHub Pages:** https://adil78124.github.io/psychology/
   - ⚠️ БЕЗ отправки в Telegram (нет backend)
   
2. **Vercel:** https://ваш-url.vercel.app
   - ✅ С отправкой в Telegram (есть API)

**Рекомендую использовать Vercel версию!** Она полностью рабочая.

---

## 💡 Хотите использовать свой домен?

В Vercel можно подключить свой домен бесплатно:
1. Settings → Domains
2. Добавьте ваш домен
3. Следуйте инструкциям Vercel

---

## 🆘 Если что-то не работает:

### API не работает:
1. Проверьте **Environment Variables** в Vercel
2. Убедитесь что обе переменные добавлены
3. Пересоберите проект (Settings → Redeploy)

### Форма отправляет на localhost:
1. Проверьте файл `.env.production`
2. Там должен быть ваш Vercel URL
3. Сделайте git push
4. Подождите пока Vercel пересоберёт

### Сообщения не приходят в Telegram:
1. Откройте Vercel Dashboard → Functions → /api/send
2. Посмотрите логи
3. Проверьте что бот добавлен в группу
4. Проверьте что бот - администратор группы

---

## 🎉 Готово!

Теперь у вас:
- ✅ Код в GitHub
- ✅ Автоматический деплой на Vercel
- ✅ Отправка в Telegram работает
- ✅ Один git push = обновление сайта!

**Enjoy!** 🚀

