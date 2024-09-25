
# Pokémon App

Esta es una aplicación web construida con **React.js** que consume la API de PokéAPI mediante **GraphQL**. Permite mostrar la información de los Pokémones y filtrarlos por ID, nombre y tipo.

## Características

- Muestra una lista de Pokémones con información detallada.
- Filtro de Pokémones por:
  - **ID** (orden ascendente).
  - **Nombre** (alfabéticamente).
- Utiliza la API de **PokéAPI** con **GraphQL** para obtener datos dinámicos.

## Requisitos Previos

Antes de ejecutar esta aplicación, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 14 o superior)
- **npm** o **yarn** (dependiendo del gestor de paquetes que prefieras)

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación localmente:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/DianaJ-Dev/Pokemon.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd pokemon-app
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

   o

   ```bash
   yarn install
   ```

## Configuración

Esta aplicación utiliza la API de **PokéAPI** en su versión GraphQL. No es necesario configurar claves de API.

## Ejecución

Una vez que hayas instalado las dependencias, ejecuta el servidor de desarrollo:

```bash
npm start
```

o

```bash
yarn start
```

Abre tu navegador y navega a `http://localhost:3000\` para ver la aplicación en funcionamiento.

## Uso de la API

La aplicación realiza consultas a la API de PokéAPI usando **GraphQL** para obtener la información de los Pokémones. Aquí te mostramos una consulta de ejemplo:

```graphql
query getPokemons {
  pokemons(limit: 10, offset: 0) {
    results {
      id
      name
      types {
        type {
          name
        }
      }
    }
  }
}
```

## Funcionalidades

### 1. **Mostrar la lista de Pokémones**

La aplicación muestra una lista de Pokémones con sus respectivos detalles, tales como nombre, ID y tipos.

### 2. **Filtrar por ID**

Puedes ordenar los Pokémones por su ID en orden ascendente.

### 3. **Filtrar por Nombre**

Permite ordenar la lista alfabéticamente por nombre de Pokémon.

## Dependencias

- **React.js**: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **Apollo Client**: Cliente de GraphQL para consumir la API.
- **PokéAPI GraphQL**: La API utilizada para obtener datos de Pokémones.


