# Gestion de Tareas

Este es un proyecto desarrollado con React, NestJS y MongoDB, AuthJWT para la creacion, edicion, vista y eliminacion de tareas

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- Node.js (>= 12.x)
- NPM(>=10.2.4)
- NestJS(>=11.0.2)

## NombreDB

dbtasks

## Instalación

Sigue estos pasos para clonar e instalar las dependencias del proyecto:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/JCP2612/GestionTareas.git
   ```

### Navega al directorio del proyecto:

```bash
cd Gestion de Tareas
```

### Instala las dependencias con Yarn:

```bash
npm install
```

## Ejecución del Proyecto

Para ejecutar la aplicación en modo de desarrollo:

### Inicia el servidor de desarrollo:

```bash
Backend: npm run start:dev
Frontend: npm run dev
```

Esto iniciará la aplicación en modo de desarrollo. Abre backend: http://localhost:3000, frontend:http://localhost:5173 en tu navegador para ver la aplicación.

### Estructura del Proyecto

Esta es una breve descripción de la estructura del proyecto:

```
/apitasks
├── src/              # Principal Source
│   ├── modules/      # Module
|   |  ├── auth/      # Controller, Module, Service, JWT Strategy, LocalAuth, LocalStrategy for Autentication
|   |  ├── tasks/     # Controller, Module, Service, JWT Strategy, LocalAuth, LocalStrategy, Enums, Schemas, Interface, DTO for Tasks
|   |  ├── users/     # Controller, Module, Service, JWT Strategy, LocalAuth, LocalStrategy, Schemas, DTO for Users
│   ├── App.module.ts # Principal Module
│   └── main.ts     # Punto de entrada
├── package.json      # Configuración del proyecto y dependencias
```

fronttasks/
├── public/ # Archivos públicos
├── src/ # Código fuente de la aplicación
│ ├── api/ # Servicios backend
│ ├── components/ # Componentes reutilizables
│ ├── hooks/ # Custom hooks
│ ├── interface/ # Archivos de visualización para Lottie
│ ├── pages/ # Páginas de la aplicación
│ ├── store/ # Manejo de estados globales
│ ├── App.tsx # Componente principal
│ └── main.tsx # Punto de entrada
├── package.json # Configuración del proyecto y dependencias
└── vite.config.ts # Archivo vite, plugins

### Contribuir

Si deseas contribuir al proyecto, por favor crea una rama nueva a partir de main, realiza tus cambios y abre un Pull Request.
