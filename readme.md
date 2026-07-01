# Cafetería Backend ☕

Proyecto de práctica de backend realizado con **Node.js** y **Express**.

El objetivo del proyecto es crear un servidor simple para una cafetería, configurando middlewares básicos y desarrollando tres endpoints de tipo `GET` que permiten consultar información del menú, la promoción del día y los horarios de atención.

---

## Deploy en Vercel

El proyecto se encuentra deployado en Vercel y puede consultarse desde la siguiente URL:

```txt
https://cafeteria-backend-seven.vercel.app/
```

Endpoints disponibles en producción:

```txt
GET https://cafeteria-backend-seven.vercel.app/api/productos
GET https://cafeteria-backend-seven.vercel.app/api/promo
GET https://cafeteria-backend-seven.vercel.app/api/horarios
```

---

## Tecnologías utilizadas

- Node.js
- Express
- CORS
- Morgan
- pnpm
- Vercel

---

## Estructura del proyecto

```txt
cafeteria-backend/
│
├── index.js
├── package.json
├── pnpm-lock.yaml
├── vercel.json
├── .gitignore
└── README.md
```

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/guadapereyram/cafeteria-backend.git
```

Ingresar a la carpeta del proyecto:

```bash
cd cafeteria-backend
```

Instalar las dependencias:

```bash
pnpm install
```

---

## Ejecutar el servidor

Para iniciar el servidor en modo desarrollo:

```bash
pnpm dev
```

También se puede iniciar con:

```bash
pnpm start
```

El servidor se ejecuta en:

```txt
http://localhost:3000
```

---

## Middlewares configurados

El servidor utiliza los siguientes middlewares:

- `cors`: permite recibir solicitudes desde otros orígenes.
- `morgan`: muestra en consola las solicitudes que llegan al servidor.
- `express.json`: permite que el servidor interprete datos en formato JSON.

---

## Endpoints disponibles

Los endpoints pueden probarse tanto de forma local como desde el deploy en Vercel.

---

### GET `/api/productos`

Devuelve una lista de productos disponibles en la cafetería.

URL local:

```txt
http://localhost:3000/api/productos
```

URL en producción:

```txt
https://cafeteria-backend-seven.vercel.app/api/productos
```

Ejemplo de respuesta:

```json
[
  "Churros",
  "Café con leche",
  "Tostado de jamón y queso",
  "Lemon Pie"
]
```

---

### GET `/api/promo`

Devuelve la promoción del día.

URL local:

```txt
http://localhost:3000/api/promo
```

URL en producción:

```txt
https://cafeteria-backend-seven.vercel.app/api/promo
```

Ejemplo de respuesta:

```json
{
  "promo": "La promo del día es Café con leche + 2 churros = $8.000"
}
```

---

### GET `/api/horarios`

Devuelve los días y horarios de atención de la cafetería.

URL local:

```txt
http://localhost:3000/api/horarios
```

URL en producción:

```txt
https://cafeteria-backend-seven.vercel.app/api/horarios
```

Ejemplo de respuesta:

```json
{
  "lunesAViernes": "8:00 a 20:00",
  "sabados": "9:00 a 13:00",
  "domingosYFeriados": "Cerrado"
}
```

---

## Pruebas realizadas

Los endpoints fueron probados con **Postman**, obteniendo respuesta correcta con status `200 OK`.

Rutas probadas en entorno local:

```txt
GET http://localhost:3000/api/productos
GET http://localhost:3000/api/promo
GET http://localhost:3000/api/horarios
```

Rutas probadas en producción:

```txt
GET https://cafeteria-backend-seven.vercel.app/api/productos
GET https://cafeteria-backend-seven.vercel.app/api/promo
GET https://cafeteria-backend-seven.vercel.app/api/horarios
```

---

## Descripción del funcionamiento

El archivo principal del proyecto es `index.js`.

En este archivo se realizan las siguientes acciones:

1. Se importan las dependencias necesarias:

```js
import express from "express";
import cors from "cors";
import morgan from "morgan";
```

2. Se crea una aplicación de Express:

```js
const app = express();
```

3. Se configuran los middlewares:

```js
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
```

4. Se crean los endpoints de tipo `GET`:

```txt
/api/productos
/api/promo
/api/horarios
```

5. Se levanta el servidor en el puerto configurado:

```js
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
```

---

## Autor

Proyecto realizado por **Guadalupe Pereyra** como práctica del módulo de backend del bootcamp de Rolling Code.