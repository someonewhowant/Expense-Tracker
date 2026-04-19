Примерно как из курса от Traversy Media только построенное на стеке NestJS, Angular и использует встраиваемую SQLite

📂 Структура проекта
├── client/          # Исходники Angular
├── server/          # Исходники NestJS приложения
├── package.json     # Скрипты управления проектом
└── README.md        # И так понятно
📦 Запуск:
Клонируем репозиторий

git clone https://github.com/ваш-логин/expense-tracker-pro.git
cd expense-tracker-pro
Вытаскиваем нужные зависимости. В корневой директории выполняем:

npm install
Добавим затем зависимости сервера:

cd server && npm install && cd ..
Подтянем зависимости клиента

cd client && npm install && cd ..
🚦 Запуск приложения
Режим разработки (Development)
Запускает одновременно сервер NestJS (порт 5000) и Angular dev-server (порт 4200).

npm run dev
Продакшн сборка (Production)
Собирает клиентскую и серверную части, после чего запускает готовое приложение.

npm start
📡 API Endpoints
GET /api/v1/transactions — Получить все транзакции.
POST /api/v1/transactions — Добавить новую транзакцию.
DELETE /api/v1/transactions/:id — Удалить транзакцию по ID.