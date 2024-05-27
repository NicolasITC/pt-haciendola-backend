# pt-haciendola-backend

#### Repositorio prueba técnica Haciendola.

FrontEnd en el siguiente repositorio -> https://github.com/NicolasITC/pt-haciendola-frontend

Para ejecutar el backend, deberás utilizar Docker

Ejecutar los siguientes comandos en el directorio raiz del repositorio:

- Construir la imagen:
  `docker build -t express`

- Correr el contenedor:
  `docker run -p 3001:2000 express:latest`

*El archivo `.env` se encuentra en el repositorio únicamente con el fin de agilizar la ejecución del proyecto.*
