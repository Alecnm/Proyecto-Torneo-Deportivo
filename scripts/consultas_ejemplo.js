// Consulta para encontrar jugadores con al menos un gol
db.participants.find({ "role": "player", "stats.goals": { $gt: 0 } });

// Consulta para listar árbitros con más de 10 años de experiencia
db.participants.find({ "role": "referee", "experience": { $regex: /^1[0-9]|20/ } });

// Consulta para encontrar equipos con 3 o más puntos en la tabla
db.teams.find({ "points": { $gte: 3 } });

// Consulta para obtener los eventos del partido con ID 2
db.matches.find(
    { _id: 2 },
    { events: 1, _id: 0 }
);

// Consulta para listar jugadores con al menos una tarjeta amarilla
db.participants.find({ "role": "player", "stats.yellow_cards": { $gt: 0 } });

// Consulta para encontrar el equipo con la mayor diferencia de goles
db.teams.find().sort({ "goal_difference": -1 }).limit(1);

// Consulta para obtener todos los partidos donde participó el equipo 3
db.matches.find({ $or: [{ "team1_id": 3 }, { "team2_id": 3 }] });

// Consulta para obtener todos los partidos donde participó el equipo 3
db.matches.find({ $or: [{ "team1_id": 3 }, { "team2_id": 3 }] });
