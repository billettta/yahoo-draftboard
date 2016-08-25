import { Template } from 'meteor/templating';



import './body.html';



Template.body.helpers({

  tasks: [

    {
     "pick": "1",
     "round": "1",
     "team_key": "359.l.407146.t.10",
     "player_key": "359.p.28474"
    },
    {
     "pick": "2",
     "round": "1",
     "team_key": "359.l.407146.t.7",
     "player_key": "359.p.24171"
    },
    {
     "pick": "3",
     "round": "1",
     "team_key": "359.l.407146.t.2",
     "player_key": "359.p.27540"
    }

  ],
  teams: [
    {name: "Team1"},
    {name: "team2"},
    {name: "team3"},
  ],

});
