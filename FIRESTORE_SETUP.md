# 🔥 Настройка Firestore - СРОЧНО!

## ⚠️ Проблема: Новости не добавляются

**Причина:** Firestore Rules блокируют запись данных.

---

## ✅ Решение: Настрой правила доступа

### 1. Открой Firebase Console

Перейди: https://console.firebase.google.com/

### 2. Выбери проект **Psychology-Sezim**

### 3. Перейди в Firestore Database

Слева в меню: **Firestore Database**

### 4. Перейди во вкладку **Rules**

Сверху: `Data` | **Rules** | `Indexes` | `Usage`

### 5. Замени правила на эти:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Коллекция новостей
    match /news/{document} {
      // Все могут читать новости
      allow read: if true;
      
      // Только авторизованные админы могут добавлять/удалять
      allow create, delete: if request.auth != null 
        && request.auth.token.admin == true;
      
      // Только админы могут обновлять
      allow update: if request.auth != null 
        && request.auth.token.admin == true;
    }
    
    // Все остальные коллекции - запрещены
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### 6. Нажми **Publish** (Опубликовать)

---

## 🆘 Временное решение (для тестирования)

**ТОЛЬКО ДЛЯ РАЗРАБОТКИ!** Открой доступ всем:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

⚠️ **НЕ используй это на продакшене!** Это небезопасно!

После настройки верни безопасные правила (из шага 5).

---

## 📝 Что делают правила:

| Действие | Кто может | Правило |
|----------|-----------|---------|
| Читать новости | Все | `allow read: if true` |
| Добавлять новости | Только админы | `request.auth.token.admin == true` |
| Удалять новости | Только админы | `request.auth.token.admin == true` |

---

## 🧪 Проверка после настройки:

1. **Сохрани правила** в Firebase Console
2. **Обнови страницу** админ-панели (F5)
3. **Попробуй добавить** тестовую новость
4. **Проверь консоль** (F12) - не должно быть ошибок

---

## 🐛 Если всё ещё не работает:

### Проверь консоль браузера (F12):

Ищи ошибки типа:
- `Missing or insufficient permissions`
- `FirebaseError: 7 PERMISSION_DENIED`

### Проверь, что ты админ:

```bash
cd C:\Users\kaira\firebase-admin-tools
node check-admin.js nkqQooMJ6FUWoFoJFx2QsL46ZfD2
```

Должно быть: `🔐 Статус: ✅ АДМИНИСТРАТОР`

### Перезайди в админ-панель:

1. Нажми "Выйти"
2. Войди заново
3. Попробуй добавить новость

---

## 📸 Скриншот правильных настроек:

В Firebase Console → Firestore Database → Rules должно быть:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /news/{document} {
      allow read: if true;
      allow create, delete: if request.auth != null 
        && request.auth.token.admin == true;
      allow update: if request.auth != null 
        && request.auth.token.admin == true;
    }
  }
}
```

Статус: ✅ **Published**

---

Сделай это ПРЯМО СЕЙЧАС, и новости начнут добавляться! 🚀

