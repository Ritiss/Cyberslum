# Инструкция

## Для запуска необходимо ПО:

Vs code (или любая другая IDE);


Node.js (рекомендуемая версия 18.2 и выше);


Docker;


Postman


---
## Шаги для запуска:
1. Открыть папку backend при помощи IDE;
2. В терминале прописать команду


*docker compose up --build -d*


В докере соберется контейнер 


3. В Docker проверить наличие запущенного контейнера cyberslum-backend-bd (в некоторых случаях может потребоваться VPN)


![335993137-97ec7402-9543-49d8-a592-01fccc8f0f75](https://github.com/Ritiss/Cyberslum/assets/115828441/7dd3ba2c-c676-4c48-95d2-7ecb3bed7952)



4. Во избежание ошибок при импорте данных, необходимо создать тестовый продукт - открыть Postman


5. Создать новую коллекцию


![335993773-e74105dd-3144-4677-9ea9-e5bf22c2f1e0](https://github.com/Ritiss/Cyberslum/assets/115828441/0cf2c6e7-f327-481c-82cd-82a3726f7c0d)



6. Нажать на "Add request"


![335993916-cf545f16-5c36-4d89-9243-88b10873002f](https://github.com/Ritiss/Cyberslum/assets/115828441/4751d61f-5a7e-47b4-ae5d-2aa402df50e4)



7. В адрес поисковой строки поместить http://localhost:8000/product, слева от поисковой строки выбрать запрос  POST

    
![335994002-304ba615-8d6e-4664-a37e-d07d53c8549b](https://github.com/Ritiss/Cyberslum/assets/115828441/3ff2b397-f135-4c09-befa-30ab71f0d7a4)



8. Выбрать Body - raw


![изображение](https://github.com/Ritiss/Cyberslum/assets/115828441/c9e91ab6-3f02-43ad-ab67-e9cf50d9590d)




9. Внести *данные* и отправить запрос SEND


{

    "name": "Акселератор",

    
    "type": "Лобная доля",

    
    "price": 3000,

    
    "img": "https://static.wikia.nocookie.net/cyberpunk/images/5/56/HealOnKill.png",

    
    "capacity": 30,

    
    "description": "Увеличивает физические способности. Позволяет пользователю быстрее реагировать на окружающие события и увеличивает скорость движения.",

    
    "effect": "Мгновенно восстанавливает  2/3/6/10% здоровья"
    
} 

10. В VScode открыть терминал и ввести


*npm i*


для установки пакетов


11. Для запуска проекта ввести в терминал


*npm run dev*
