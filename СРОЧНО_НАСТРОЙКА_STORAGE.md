# 🚨 СРОЧНО: Настройка Firebase Storage

## ⚡ Быстрое решение (для тестирования)

### Шаг 1: Открой Firebase Console

Открой: https://console.firebase.google.com/

### Шаг 2: Выбери проект

**Psychology-Sezim**

### Шаг 3: Перейди в Storage

Слева в меню: **Storage** (иконка папки)

### Шаг 4: Если Storage не инициализирован

Если видишь кнопку **"Get Started"** или **"Начать"**:

1. Нажми **"Get Started"**
2. Выбери режим: **"Start in production mode"** или **"Start in test mode"** (любой)
3. Выбери локацию: **"us-central1"** (или любую близкую)
4. Нажми **"Done"** (Готово)

### Шаг 5: Настрой Rules

1. Перейди на вкладку **"Rules"** (сверху)
2. **Удали всё** что там есть
3. **Вставь эти правила** (для тестирования):

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

4. Нажми **"Publish"** (Опубликовать)

⚠️ **ЭТО ВРЕМЕННО!** Эти правила открыты для всех. Используй только для тестирования!

### Шаг 6: Проверь работу

1. Вернись в админ-панель: `http://localhost:3002/admin`
2. Попробуй добавить новость с картинкой
3. Должно заработать! ✅

---

## 🔒 Безопасные правила (для продакшена)

После того как проверишь, что всё работает, замени правила на безопасные:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /news/{imageId} {
      // Все могут читать
      allow read: if true;
      
      // Только админы могут загружать
      allow write: if request.auth != null 
        && request.auth.token.admin == true
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType.matches('image/.*');
      
      // Только админы могут удалять
      allow delete: if request.auth != null 
        && request.auth.token.admin == true;
    }
  }
}
```

И снова **Publish**.

---

## ✅ Готово!

Теперь загрузка картинок должна работать!


