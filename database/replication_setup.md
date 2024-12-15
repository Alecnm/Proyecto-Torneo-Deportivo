# Configuración de Replicación en MongoDB

Este documento explica cómo configurar un *replica set* en MongoDB para garantizar redundancia y alta disponibilidad.

## **Pasos para Configurar**

1. **Crea Directorios para los Nodos**:
   - En tu máquina, crea los siguientes directorios:
     ```
     C:\data\db1
     C:\data\db2
     C:\data\db3
     ```

2. **Inicia los Procesos MongoDB**:
   - Abre tres terminales diferentes y ejecuta los siguientes comandos:

     **Nodo Primario:**
     ```bash
     mongod --replSet "rs0" --port 27017 --dbpath C:\data\db1
     ```

     **Nodo Secundario:**
     ```bash
     mongod --replSet "rs0" --port 27018 --dbpath C:\data\db2
     ```

     **Nodo Árbitro:**
     ```bash
     mongod --replSet "rs0" --port 27019 --dbpath C:\data\db3
     ```

3. **Inicializa el Replica Set**:
   - Conéctate al nodo primario:
     ```bash
     mongo --port 27017
     ```

   - Ejecuta el siguiente comando para inicializar el *replica set*:
     ```javascript
     rs.initiate({
       _id: "rs0",
       members: [
         { _id: 0, host: "localhost:27017" },
         { _id: 1, host: "localhost:27018" },
         { _id: 2, host: "localhost:27019", arbiterOnly: true }
       ]
     });
     ```

4. **Verifica el Estado del Replica Set**:
   - Ejecuta el comando:
     ```javascript
     rs.status();
     ```

## **Notas Adicionales**
- Asegúrate de que los puertos utilizados (27017, 27018, 27019) estén disponibles.
- En caso de errores, revisa que los directorios tengan permisos de escritura.


## Configuración de Sharding en MongoDB

1. **Habilitar sharding en la base de datos**:
   Conéctate al router `mongos` y ejecuta:
   ```javascript
   sh.enableSharding("tournament");
2. **Crear índice en la colección matches**:
   ```javascript
   db.matches.createIndex({ team1_id: 1, team2_id: 1 });
3. **Configurar particionamiento**:
   ```javascript
   sh.shardCollection("tournament.matches", { team1_id: 1 });
4. **Verificar estado del sharding**:
   ```javascript
   sh.status();

