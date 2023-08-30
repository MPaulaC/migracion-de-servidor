# Descripción del Producto

## ¿Qué es mi producto y para qué sirve?

Mi producto es una aplicación de gestión de tareas basada en una API REST desarrollada en Node.js utilizando el framework Express. Esta aplicación permite a los usuarios crear, actualizar y eliminar tareas, así como listar tareas completas e incompletas, y obtener detalles de una tarea específica. Además, ofrece funcionalidades de autenticación para los usuarios.

## Funcionalidades Clave

### 1. Creación de Tareas

Los usuarios pueden crear nuevas tareas mediante la ruta POST `/tasks`. Esta funcionalidad es importante para permitir a los usuarios agregar nuevas tareas a su lista.

### 2. Actualización de Tareas

La funcionalidad de actualización de tareas, disponible a través de la ruta PUT `/tasks/:id`, permite a los usuarios modificar el estado y la descripción de una tarea existente. Los usuarios pueden marcar tareas como completadas o editar la descripción según sus necesidades.

### 3. Eliminación de Tareas

Los usuarios pueden eliminar tareas a través de la ruta DELETE `/tasks/:id`. Esta funcionalidad es esencial para permitir a los usuarios administrar su lista de tareas y eliminar aquellas que ya no son relevantes.

### 4. Listado de Tareas

La capacidad de listar todas las tareas existentes a través de la ruta GET `/tasks` es una característica importante. Esto permite a los usuarios obtener una visión general de todas sus tareas en un solo lugar.

### 5. Filtrado de Tareas Completas e Incompletas

La funcionalidad de listar tareas completas e incompletas, a través de las rutas GET `/completed-tasks` y `/incomplete-tasks` respectivamente, ayuda a los usuarios a identificar rápidamente las tareas que requieren atención y las que ya han sido completadas.

### 6. Obtención de Detalles de Tareas

La posibilidad de obtener detalles específicos de una tarea a través de la ruta GET `/tasks/:id` es fundamental. Esto permite a los usuarios acceder a información detallada sobre una tarea en particular.

### 7. Autenticación de Usuarios

El sistema de autenticación integrado, a través de la ruta POST `/auth/login`, brinda seguridad a la aplicación al permitir que los usuarios inicien sesión y accedan a sus tareas de manera segura.

## ¿Por qué los usuarios usarían estas funcionalidades?

Los usuarios utilizarían estas funcionalidades para gestionar eficientemente sus tareas diarias y mantener un registro organizado de lo que deben hacer. La posibilidad de crear, actualizar y eliminar tareas les permite mantener su lista de tareas al día y adaptarla a medida que avanza el tiempo. El listado de tareas completas e incompletas, así como la obtención de detalles de tareas individuales, proporciona a los usuarios una vista completa y detallada de su progreso. La autenticación garantiza que solo los usuarios autorizados puedan acceder y administrar sus tareas, brindando seguridad y privacidad a sus datos.
