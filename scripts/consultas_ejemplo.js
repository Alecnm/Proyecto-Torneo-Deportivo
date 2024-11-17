// obtener todos los jugadores que han recibido tarjetas rojas
db.participants.find({ "stats.red_cards": { $gt: 0 } });

// Consultar partidos donde un equipo específico jugó
db.matches.find({ $or: [{ "team1_id": 1 }, { "team2_id": 1 }] });

// Actualizar los puntos de un equipo después de un partido
db.teams.updateOne({ "_id": 1 }, { $set: { "points": 9 } });