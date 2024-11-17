db.participants.insertMany([
    { "_id": 1, "name": "Lionel Messi", "role": "player", "team_id": 1, "stats": { "goals": 5, "yellow_cards": 1, "red_cards": 0 } },
    { "_id": 2, "name": "Cristiano Ronaldo", "role": "player", "team_id": 2, "stats": { "goals": 4, "yellow_cards": 0, "red_cards": 0 } },
    { "_id": 3, "name": "Kylian Mbappé", "role": "player", "team_id": 1, "stats": { "goals": 3, "yellow_cards": 0, "red_cards": 0 } },
    { "_id": 4, "name": "Neymar Jr", "role": "player", "team_id": 2, "stats": { "goals": 2, "yellow_cards": 1, "red_cards": 0 } },
    { "_id": 5, "name": "Luka Modrić", "role": "player", "team_id": 3, "stats": { "goals": 1, "yellow_cards": 0, "red_cards": 1 } },
    { "_id": 6, "name": "Pep Guardiola", "role": "coach", "team_id": 1, "experience": "10 years" },
    { "_id": 7, "name": "Zinedine Zidane", "role": "coach", "team_id": 2, "experience": "8 years" },
    { "_id": 8, "name": "Carlo Ancelotti", "role": "coach", "team_id": 3, "experience": "12 years" },
    { "_id": 9, "name": "Pierluigi Collina", "role": "referee", "experience": "20 years" }
]);


db.teams.insertMany([
    { "_id": 1, "name": "Team A", "coach_id": 6, "players": [1, 3], "matches_played": 2, "points": 6, "goal_difference": 5 },
    { "_id": 2, "name": "Team B", "coach_id": 7, "players": [2, 4], "matches_played": 2, "points": 4, "goal_difference": 3 },
    { "_id": 3, "name": "Team C", "coach_id": 8, "players": [5], "matches_played": 2, "points": 1, "goal_difference": -1 }
]);

db.matches.insertMany([
    {
        "_id": 1,
        "team1_id": 1,
        "team2_id": 2,
        "date": "2024-11-10T15:00:00Z",
        "location": "Stadium A",
        "referee_id": 9,
        "result": { "team1_score": 2, "team2_score": 1 },
        "events": [
            { "time": "10:00", "player_id": 1, "event_type": "goal" },
            { "time": "30:00", "player_id": 3, "event_type": "goal" },
            { "time": "50:00", "player_id": 2, "event_type": "goal" }
        ]
    },
    {
        "_id": 2,
        "team1_id": 1,
        "team2_id": 3,
        "date": "2024-11-12T18:00:00Z",
        "location": "Stadium B",
        "referee_id": 9,
        "result": { "team1_score": 1, "team2_score": 1 },
        "events": [
            { "time": "20:00", "player_id": 3, "event_type": "goal" },
            { "time": "70:00", "player_id": 5, "event_type": "goal" },
            { "time": "80:00", "player_id": 5, "event_type": "yellow_card" }
        ]
    }
]);

db.standings.insertMany([
    { "_id": 1, "team_id": 1, "matches_played": 2, "wins": 2, "draws": 0, "losses": 0, "goals_scored": 3, "goals_conceded": 1, "points": 6 },
    { "_id": 2, "team_id": 2, "matches_played": 2, "wins": 1, "draws": 0, "losses": 1, "goals_scored": 2, "goals_conceded": 3, "points": 4 },
    { "_id": 3, "team_id": 3, "matches_played": 2, "wins": 0, "draws": 1, "losses": 1, "goals_scored": 1, "goals_conceded": 2, "points": 1 }
]);
