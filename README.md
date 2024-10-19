<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v4
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, Inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Star Wars API

Star Wars API es una aplicación desarrollada con el Serverless Framework que permite consultar información sobre planetas, personas y películas del universo de Star Wars, obtenida desde [SWAPI](https://swapi.dev/). Los atributos se mapean del inglés al español para facilitar su uso. Además, esta API permite la creación de misiones y la consulta tanto del listado de misiones como de misiones específicas mediante su ID.

## Funcionalidades

- Consultar planetas, personas y películas de Star Wars mapeando los atributos al español.
- Crear nuevas misiones.
- Consultar un listado de misiones.
- Consultar una misión específica por su ID.

## Endpoints

### Planetas
- `GET /planets`: Obtiene una lista de planetas del universo de Star Wars.
- `GET /planets/{id}`: Obtiene información de un planeta específico por ID.

### Personas
- `GET /people`: Obtiene una lista de personas del universo de Star Wars.
- `GET /people/{id}`: Obtiene información de una persona específica por ID.

### Películas
- `GET /films`: Obtiene una lista de películas del universo de Star Wars.
- `GET /films/{id}`: Obtiene información de una película específica por ID.

### Misiones
- `POST /missions`: Crea una nueva misión.
- `GET /missions`: Obtiene una lista de todas las misiones creadas.
- `GET /missions/{id}`: Obtiene información de una misión específica por ID.

## Requisitos

- Node.js (v20)
- Serverless Framework instalado globalmente (`npm install -g serverless`)
- AWS CLI configurado con las credenciales adecuadas
- Una cuenta en AWS con permisos para crear recursos en Lambda, API Gateway y S3

## Instalación y Despliegue

Sigue estos pasos para descargar, instalar las dependencias y desplegar este proyecto en AWS:

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Fbossio/starwars-api.git
cd starwars-api

```

2. Instala las dependencias necesarias:

```bash
npm install

```
3. Ejecuta los test automatizados:

Ejecuta los test unitarios con el siguiente comando:

```bash
npm run test

```


4. Configura tus credenciales de AWS:

```bash
aws configure

```

5. Despliega la aplicación en AWS utilizando el Serverless Framework:

```bash
serverless deploy

```

## Accede a la API desplegada en AWS

La API se encuentra desplegada en AWS. Puedes hacer solicutudes a los siguientes endpoints:

```bash
  GET - https://k0ccczngze.execute-api.us-east-1.amazonaws.com/dev/planets
  GET - https://k0ccczngze.execute-api.us-east-1.amazonaws.com/dev/planets/{id}
  GET - https://k0ccczngze.execute-api.us-east-1.amazonaws.com/dev/people
  GET - https://k0ccczngze.execute-api.us-east-1.amazonaws.com/dev/people/{id}
  GET - https://k0ccczngze.execute-api.us-east-1.amazonaws.com/dev/films
  GET - https://k0ccczngze.execute-api.us-east-1.amazonaws.com/dev/films/{id}
  GET - https://k0ccczngze.execute-api.us-east-1.amazonaws.com/dev/missions
  GET - https://k0ccczngze.execute-api.us-east-1.amazonaws.com/dev/missions/{id}
  POST - https://k0ccczngze.execute-api.us-east-1.amazonaws.com/dev/missions

```