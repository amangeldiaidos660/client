# Используем официальный образ Apache как базовый
FROM httpd:2.4

# Копируем файлы проекта в корневую директорию веб-сервера
COPY out/ /usr/local/apache2/htdocs/

# Копируем конфигурационный файл Apache
COPY .htaccess /usr/local/apache2/htdocs/

# Открываем порт 80 для доступа к веб-серверу
EXPOSE 80
