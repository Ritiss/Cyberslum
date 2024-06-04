#Cyberslum


![logo](https://github.com/Ritiss/Cyberslum/assets/115828441/6f43a2c4-d18d-4c03-8666-62430323e9ec)



# Инструкция

## Для запуска необходимо ПО:

Любая IDE (например VS code);


Node.js (рекомендуемая версия 18.2 и выше);


Docker


## Шаги для запуска:
1. Клонирование репозитория


```git clone https://github.com/Ritiss/Cyberslum.git```


2. В IDE перейти к папке backend и ввести команду:


```docker compose up --build -d```


В докере соберется контейнер 


3. В Docker проверить наличие запущенного контейнера cyberslum-backend (в некоторых случаях может потребоваться VPN)


![изображение](https://github.com/Ritiss/Cyberslum/assets/115828441/894d976e-da13-4c8d-b70f-f929a0c4299e)


4. В любой IDE перейти к корневой папке проекта и ввести команды:


Для установки пакетов


```npm i```


Для запуска проекта


```npm run dev```
