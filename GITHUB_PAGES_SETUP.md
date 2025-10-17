# Настройка GitHub Pages - ИНСТРУКЦИЯ

## 🚨 ВАЖНО: Сайт показывает белый экран, потому что GitHub Pages не настроен!

### Пошаговая настройка:

1. **Перейдите в настройки репозитория:**
   - Откройте https://github.com/Anubizze/psychology
   - Нажмите на вкладку **"Settings"** (в верхнем меню)

2. **Найдите раздел Pages:**
   - В левом меню прокрутите вниз до раздела **"Pages"**
   - Нажмите на него

3. **Настройте Source:**
   - В разделе **"Source"** выберите **"GitHub Actions"**
   - НЕ выбирайте "Deploy from a branch"

4. **Проверьте Actions:**
   - Перейдите на вкладку **"Actions"** в репозитории
   - Убедитесь, что GitHub Actions разрешены
   - Если нет, перейдите в Settings → Actions → General → разрешите Actions

5. **Дождитесь деплоя:**
   - После настройки GitHub Actions автоматически запустится
   - Процесс займет 2-5 минут
   - Проверьте статус в разделе Actions

6. **Проверьте сайт:**
   - После успешного деплоя сайт будет доступен по адресу:
   - **https://anubizze.github.io/psychology**

### Если деплой не запустился:

1. Перейдите в **Settings → Actions → General**
2. Убедитесь, что выбрано **"Allow all actions and reusable workflows"**
3. Нажмите **"Save"**
4. Сделайте новый push в main ветку

### Проверка статуса:

- **Actions**: https://github.com/Anubizze/psychology/actions
- **Pages настройки**: https://github.com/Anubizze/psychology/settings/pages

### Возможные проблемы:

- **404 ошибка**: GitHub Pages еще не активирован
- **Белый экран**: Проблемы с путями или JavaScript
- **Ошибки в консоли**: Проверьте Network tab в DevTools

### После настройки:

Сайт будет автоматически обновляться при каждом push в main ветку!
