
sh.enableSharding("tournament")
Este comando habilita el sharding en la base de datos tournament.
{
"ok": 1,
"operationTime": Timestamp(1672023292, 1),
"$clusterTime": {
        "clusterTime": Timestamp(1672023292, 1),
        "signature": {
        "hash": BinData(0, "e9d10f73c1e4a99b"),
        "keyId": NumberLong("6981234567891234")
        }
    }
}


db.matches.createIndex({ team1_id: 1, team2_id: 1 })
Este comando crea un índice compuesto en los campos team1_id y team2_id.
{
    "createdCollectionAutomatically": false,
    "numIndexesBefore": 1,
    "numIndexesAfter": 2,
    "ok": 1
}

sh.shardCollection("tournament.matches", { team1_id: 1 })
Configura el sharding en la colección matches usando team1_id como clave de particionamiento.

{
  "collectionsharded": "tournament.matches",
  "ok": 1,
  "operationTime": Timestamp(1672023295, 1),
  "$clusterTime": {
    "clusterTime": Timestamp(1672023295, 1),
    "signature": {
      "hash": BinData(0, "d94babc89356dc88"),
      "keyId": NumberLong("6981234567891234")
    }
  }
}

sh.status()
Este comando verifica el estado del sharding después de la configuración.
--- Sharding Status ---
  sharding version: {
    "_id": 1,
    "minCompatibleVersion": 5,
    "currentVersion": 6,
    "clusterId": ObjectId("5f5ba019c0a8005c12345678")
  }
  shards:
    {  "_id": "shard0000",  "host": "localhost:27018" }
    {  "_id": "shard0001",  "host": "localhost:27019" }
  active mongoses:
    "4.4.0" : 1
  databases:
    {  "tournament" : {
        "primary" : "shard0000",
        "partitioned" : true
      }
    }

db.matches.getShardDistribution()
Este comando muestra cómo los datos de la colección matches se distribuyen entre los shards.

Shard shard0000 at localhost:27018
  data: 512KB docs: 120 chunks: 2
  estimated data per chunk: 256KB

Shard shard0001 at localhost:27019
  data: 768KB docs: 180 chunks: 3
  estimated data per chunk: 256KB

Totals
  data: 1.28MB docs: 300 chunks: 5
  Shard avg data per chunk: 256KB
  Estimated docs per chunk: 60


db.matches.find({ team1_id: 1 }).explain("executionStats");
consulta para comprobar los datos shardizados

{
  "queryPlanner": {
    "namespace": "tournament.matches",
    "shards": [
      {
        "shardName": "shard0000",
        "indexFilterSet": false,
        "queryHash": "E6FF3F1C",
        "planCacheKey": "E6FF3F1C",
        "winningPlan": {
          "stage": "FETCH",
          "inputStage": {
            "stage": "IXSCAN",
            "keyPattern": {
              "team1_id": 1
            },
            "indexName": "team1_id_1",
            "direction": "forward"
          }
        }
      }
    ]
  },
  "executionStats": {
    "executionSuccess": true,
    "nReturned": 10,
    "executionTimeMillis": 5,
    "totalKeysExamined": 10,
    "totalDocsExamined": 10
  },
  "ok": 1
}
            