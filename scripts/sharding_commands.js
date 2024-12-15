// Habilitar sharding en la base de datos
sh.enableSharding("tournament");

// Crear índice en la colección matches
db.matches.createIndex({ team1_id: 1, team2_id: 1 });

// Configurar sharding con team1_id como clave de particionamiento
sh.shardCollection("tournament.matches", { team1_id: 1 });

// Verificar el estado del sharding
sh.status();
