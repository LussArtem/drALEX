
Установка:
npm i

//------------------------------------------------------------------------------

Запуск режима разработчика 
(c запуском сервера):
npm run dev

Запуск сборки проекта 
(без запуска сервера, только финальная сборка):
npm run build

Запуск сборки проекта но без создания webp картинок
(без запуска сервера, только финальная сборка):
npm run devbuild

//------------------------------------------------------------------------------

Основные файлы для работы с шаблоном:
js/app.js
scss/style.scss

index.html - разводящая страница (содержание)
home.html - главная страница
файлы html/*.htm - подключаемые части

//------------------------------------------------------------------------------

Используются псевдонимы пути к папкам:
@img = src/img
@scss = src/scss
@js = src/js

Плагин для VS Code - Path Autocomplete
Настройки (Settings JSON):
"path-autocomplete.pathMappings": {
	"@img": "${folder}/src/img", // псевдоним для папки img
	"@scss": "${folder}/src/scss", // псевдоним для папки scss
	"@js": "${folder}/src/js", //  псевдоним для папки js
}
