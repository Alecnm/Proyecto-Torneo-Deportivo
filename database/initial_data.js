db.participants.insertMany([
    // Jugadores adicionales
    { "_id": 4, "name": "Kylian Mbappé", "role": "player", "team_id": 1, "stats": { "goals": 3, "yellow_cards": 0, "red_cards": 0 } },
    { "_id": 5, "name": "Neymar Jr", "role": "player", "team_id": 2, "stats": { "goals": 2, "yellow_cards": 1, "red_cards": 0 } },
    { "_id": 6, "name": "Luka Modrić", "role": "player", "team_id": 3, "stats": { "goals": 1, "yellow_cards": 0, "red_cards": 1 } },
    // Entrenadores adicionales
    { "_id": 7, "name": "Carlo Ancelotti", "role": "coach", "team_id": 3, "experience": "12 years" },
    // Árbitros adicionales
    { "_id": 8, "name": "Pierluigi Collina", "role": "referee", "experience": "20 years" }
  ]);
  
  db.teams.insertMany([
    { "_id": 3, "name": "Team C", "coach_id": 7, "players": [6], "matches_played": 3, "points": 4, "goal_difference": -1 },
    { "_id": 4, "name": "Team D", "coach_id": null, "players": [], "matches_played": 0, "points": 0, "goal_difference": 0 }
]);
  

db.matches.insertMany([
{
    "_id": 2,
    "team1_id": 1,
    "team2_id": 3,
    "date": "2024-11-12T18:00:00Z",
    "location": "Stadium B",
    "referee_id": 8,
    "result": { "team1_score": 1, "team2_score": 1 },
    "events": [
    { "time": "30:00", "player_id": 4, "event_type": "goal" },
    { "time": "70:00", "player_id": 6, "event_type": "goal" },
    { "time": "80:00", "player_id": 6, "event_type": "yellow_card" }
    ]
},
{
    "_id": 3,
    "team1_id": 2,
    "team2_id": 3,
    "date": "2024-11-14T20:00:00Z",
    "location": "Stadium C",
    "referee_id": 5,
    "result": { "team1_score": 2, "team2_score": 0 },
    "events": [
    { "time": "15:00", "player_id": 5, "event_type": "goal" },
    { "time": "60:00", "player_id": 5, "event_type": "goal" },
    { "time": "90:00", "player_id": 6, "event_type": "red_card" }
    ]
}
]);


db.standings.insertMany([
{ "_id": 3, "team_id": 3, "matches_played": 3, "wins": 1, "draws": 1, "losses": 1, "goals_scored": 2, "goals_conceded": 3, "points": 4 },
{ "_id": 4, "team_id": 4, "matches_played": 0, "wins": 0, "draws": 0, "losses": 0, "goals_scored": 0, "goals_conceded": 0, "points": 0 }
]);
