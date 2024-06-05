![logo](https://github.com/Ritiss/Cyberslum/assets/115828441/6f43a2c4-d18d-4c03-8666-62430323e9ec)



# Инструкция

## Для запуска необходимо ПО:

1. Любая IDE (например VS code);


2. Node.js (рекомендуемая версия 18.2 и выше);


3. Docker;


4. Postman


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


5. Во избежание ошибок при импорте данных, необходимо создать тестовый продукт - открыть Postman

  
6. Создать новую коллекцию


   ![335993773-e74105dd-3144-4677-9ea9-e5bf22c2f1e0](https://github.com/Ritiss/Cyberslum/assets/115828441/0cf2c6e7-f327-481c-82cd-82a3726f7c0d)



7. Нажать на "Add request"


   ![335993916-cf545f16-5c36-4d89-9243-88b10873002f](https://github.com/Ritiss/Cyberslum/assets/115828441/4751d61f-5a7e-47b4-ae5d-2aa402df50e4)



8. В адрес поисковой строки поместить http://localhost:8000/product, слева от поисковой строки выбрать запрос  POST

    
   ![335994002-304ba615-8d6e-4664-a37e-d07d53c8549b](https://github.com/Ritiss/Cyberslum/assets/115828441/3ff2b397-f135-4c09-befa-30ab71f0d7a4)



9. Выбрать Body - raw

   
   ![изображение](https://github.com/Ritiss/Cyberslum/assets/115828441/c9e91ab6-3f02-43ad-ab67-e9cf50d9590d)



10. Внести приведенные ниже *данные* и отправить запрос SEND

```
{
    "name": "Акселератор",
    "type": "Лобная доля",
    "price": 40000,
    "img": "https://static.wikia.nocookie.net/cyberpunk/images/9/90/SubdermalCoProcessor.png",
    "capacity": 48,
    "description": "Имплант уменьшает время восстановления всего киберпрограммного обеспечения на −5,0–7,5%",
    "effect": "Мгновенное восстановление всех киберпрограмм после запуска"
}
```
