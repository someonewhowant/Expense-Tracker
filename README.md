# Логгер доходов/расходов

Примерно такой же как из курса от Travesy Media только на стеке **Angular**, **NestJS** и **SQLite**

## 🏁 Запуск

### Нужно иметь:
- Node.js (рекомендуется v24 или выше)
- npm

### Установка

1. Клонируем репозиторий:
   ```bash
   git clone https://github.com/someonewhowant/Expense-Tracker.git
   cd Expense-Tracker
   ```

2. Устанавливаем зависимости для корня, клиента и сервера:
   ```bash
   npm install && npm install --prefix client && npm install --prefix server
   ```

### Запуск приложения

Чтобы запустить бэкенд и фронтенд одновременно в режиме разработки:

```bash
npm run dev
```

Приложение будет доступно по адресам:
- **Frontend**: [http://localhost:4200](http://localhost:4200)
- **Backend API**: [http://localhost:5000/api/v1](http://localhost:5000/api/v1)
