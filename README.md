# Proyecto de Gestión de Torneo Deportivo con MongoDB

Este proyecto desarrolla un modelo de base de datos MongoDB para gestionar un torneo deportivo. El objetivo es almacenar y consultar datos de deportistas, equipos, árbitros, partidos y resultados.


## Contenido del repositorio
- **`database/`:** Diseño de la base de datos, datos iniciales y diagrama.
- **`scripts/`:** Ejemplos de consultas útiles para interactuar con la base de datos.

## Cómo usar este repositorio
1. **Configurar MongoDB:**
   - Asegúrate de que MongoDB esté instalado y corriendo.
   - Usa Compass o la shell para ejecutar los scripts proporcionados.

2. **Insertar datos iniciales:**
   - Ve a la carpeta `database/` y ejecuta el archivo `initial_data.js` para poblar las colecciones.

3. **Consultar datos:**
   - Usa las consultas del archivo `consultas_ejemplo.js` en la carpeta `scripts/`.

## **Configuración del Entorno de Replicación**
Sigue las instrucciones detalladas en [`database/replication_setup.md`](./database/replication_setup.md) para configurar el entorno de replicación en MongoDB.

### Configuración de Sharding
Para habilitar el sharding en la colección `matches`, ejecuta los comandos proporcionados en el archivo `replication_commands.js` o sigue las instrucciones en `replication_setup.md`.


## Autor(es)
- Alec Niño
