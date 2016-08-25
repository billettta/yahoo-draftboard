Meteor.methods({

  'getDraftResults': function (leagueId) { //should take in league id
    return HTTP.get('http\://fantasysports.yahooapis.com/fantasy/v2/leagues;league_keys=359.l.407146/draftresult?format=json')

  }

});
