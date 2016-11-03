8개의 리그를 선택할 수 있는 화면 -> 순위표가나옴 -> 순위표에서 팀 선택 -> 팀 정보와 선수정보가 나옴 해당팀의 스케쥴

bootstrap grid system 사용할것

# 필터링 방법

리그id / 팀id

1. 시즌별로 (season=/\d\d\d\d/)

   http://api.football-data.org/v1/soccerseasons/?season=2015

2. 리그순위표 (matchday=/\d+/)

   http://api.football-data.org/v1/soccerseasons/398/leagueTable?matchday=38

   필터를 안하면 자동으로 최신 테이블 나옴

   398은 premier league이고 38round까지 있다. 38round의 리그순위표이다.

   matchday가 38을 초과했을경우 아래와 같이 null값이 나온다.

  { "leagueCaption": "Premier League 2015/16", "matchday": null, "standing": [] }

3. 스케쥴 (fixtures) (timeFrame=/p|n[1-9]{1,2}/) (matchday=/\d+/)

   timeFrame의 default값은 n7.. 즉 next7days를 뜻한다

   http://api.football-data.org/v1/soccerseasons/398/fixtures?matchday=8

# league number

Bundesriga      : 394

Ligue1          : 396

Premier League  : 398

Primera Division: 399

Serie A         : 401

Primeira Liga   : 402

Eredivisie      : 404

Champions League: 405

# team number

http://api.football-data.org/v1/soccerseasons/398/teams

398리그의 팀이 나온다 request를 minified로 해야 팀 id가 나옴

### 선수정보 (team id: 65) http://api.football-data.org/v1/teams/65/players

```json
{
  "_links": {
    "self": {
      "href": "http://api.football-data.org/v1/teams/65/players"
    },
    "team": {
      "href": "http://api.football-data.org/v1/teams/65"
    }
  },
  "count": 23,
  "players": [
    {
      "name": "Kevin de Bruyne",
      "position": "Right Wing",
      "jerseyNumber": 17,
      "dateOfBirth": "1991-06-28",
      "nationality": "Belgium",
      "contractUntil": "2021-06-30",
      "marketValue": "60,000,000 €"
    },
    {
      "name": "Wilfried Bony",
      "position": "Centre Forward",
      "jerseyNumber": 14,
      "dateOfBirth": "1988-12-10",
      "nationality": "Cote d'Ivoire",
      "contractUntil": "2019-06-30",
      "marketValue": "25,000,000 €"
    },
    {
      "name": "Luke Brattan",
      "position": "Defensive Midfield",
      "jerseyNumber": 47,
      "dateOfBirth": "1990-03-08",
      "nationality": "Australia",
      "contractUntil": "2019-06-30",
      "marketValue": "500,000 €"
    }
  ]
}
```

### 팀일정 (teamid: 65) http://api.football-data.org/v1/teams/65/fixtures

```json
{
  "_links": {
    "self": {
      "href": "http://api.football-data.org/v1/teams/65/fixtures"
    },
    "team": {
      "href": "http://api.football-data.org/v1/teams/65"
    }
  },
  "count": 38,
  "fixtures": [
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/150842"
        },
        "soccerseason": {
          "href": "http://api.football-data.org/v1/soccerseasons/426"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/65"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/71"
        }
      },
      "date": "2016-08-13T14:00:00Z",
      "status": "TIMED",
      "matchday": 1,
      "homeTeamName": "Manchester City FC",
      "awayTeamName": "Sunderland AFC",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/150828"
        },
        "soccerseason": {
          "href": "http://api.football-data.org/v1/soccerseasons/426"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/70"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/65"
        }
      },
      "date": "2016-08-20T14:00:00Z",
      "status": "TIMED",
      "matchday": 2,
      "homeTeamName": "Stoke City FC",
      "awayTeamName": "Manchester City FC",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/150820"
        },
        "soccerseason": {
          "href": "http://api.football-data.org/v1/soccerseasons/426"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/65"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/563"
        }
      },
      "date": "2016-08-27T14:00:00Z",
      "status": "TIMED",
      "matchday": 3,
      "homeTeamName": "Manchester City FC",
      "awayTeamName": "West Ham United FC",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/150474"
        },
        "soccerseason": {
          "href": "http://api.football-data.org/v1/soccerseasons/426"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/346"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/65"
        }
      },
      "date": "2017-05-21T14:00:00Z",
      "status": "TIMED",
      "matchday": 38,
      "homeTeamName": "Watford FC",
      "awayTeamName": "Manchester City FC",
      "result": {
        "goalsHomeTeam": null,
        "goalsAwayTeam": null
      }
    }
  ]
}
```

### 팀정보 (team id: 65) http://api.football-data.org/v1/teams/65

```json
{
  "_links": {
    "self": {
      "href": "http://api.football-data.org/v1/teams/65"
    },
    "fixtures": {
      "href": "http://api.football-data.org/v1/teams/65/fixtures"
    },
    "players": {
      "href": "http://api.football-data.org/v1/teams/65/players"
    }
  },
  "name": "Manchester City FC",
  "code": "MCFC",
  "shortName": "ManCity",
  "squadMarketValue": "510,000,000 €",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/f/fd/ManCity.svg"
}
```

### 순위표 (league no: 398) http://api.football-data.org/v1/soccerseasons/398/leagueTable

```json
{
  "_links": {
    "self": {
      "href": "http://api.football-data.org/v1/soccerseasons/398/leagueTable/?matchday=38"
    },
    "soccerseason": {
      "href": "http://api.football-data.org/v1/soccerseasons/398"
    }
  },
  "leagueCaption": "Premier League 2015/16",
  "matchday": 38,
  "standing": [
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/338"
        }
      },
      "position": 1,
      "teamName": "Leicester City FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png",
      "playedGames": 38,
      "points": 81,
      "goals": 68,
      "goalsAgainst": 36,
      "goalDifference": 32,
      "wins": 23,
      "draws": 12,
      "losses": 3,
      "home": {
        "goals": 35,
        "goalsAgainst": 18,
        "wins": 12,
        "draws": 6,
        "losses": 1
      },
      "away": {
        "goals": 33,
        "goalsAgainst": 18,
        "wins": 11,
        "draws": 6,
        "losses": 2
      }
    },
    {
      "_links": {
        "team": {
          "href": "http://api.football-data.org/v1/teams/58"
        }
      },
      "position": 20,
      "teamName": "Aston Villa FC",
      "crestURI": "http://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg",
      "playedGames": 38,
      "points": 17,
      "goals": 27,
      "goalsAgainst": 76,
      "goalDifference": -49,
      "wins": 3,
      "draws": 8,
      "losses": 27,
      "home": {
        "goals": 14,
        "goalsAgainst": 35,
        "wins": 2,
        "draws": 5,
        "losses": 12
      },
      "away": {
        "goals": 13,
        "goalsAgainst": 41,
        "wins": 1,
        "draws": 3,
        "losses": 15
      }
    }
  ]
}
```

### 리그정보(여기서 팀id알수있음) http://api.football-data.org/v1/soccerseasons/398/teams

note: request를 minified로 했다 full로 다 땡기면 id가 안나옴

```json
{
  "count": 20,
  "teams": [
    {
      "id": 66,
      "name": "Manchester United FC",
      "shortName": "ManU",
      "squadMarketValue": "394,550,000 €",
      "crestUrl": "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
    },
    {
      "id": 73,
      "name": "Tottenham Hotspur FC",
      "shortName": "Spurs",
      "squadMarketValue": "278,000,000 €",
      "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg"
    },
  ]
}
```

### 해당리그 정보 http://api.football-data.org/v1/soccerseasons/398
