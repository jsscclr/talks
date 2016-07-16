'use strict';

const util = require('util');
const twitter = require('twitter');

const config = {
  consumer_key: '9RGBZapoXUzHmWTVudv6CtvIr',
  consumer_secret: 'W4gJeVruFPNTlWnXtB0mXpMvDqghpo2uG3UntcpXZp8bmpfYlq',
  access_token_key: '3117126676-0R4q6bEF7suM4y1LAN62cyNJurLSsWmE8je05p5',
  access_token_secret: 'llnKl479M7SlGXGAgIZ9W4iiSnBeRmPj6tjrGFPrMoRyQ'
};

var twitterClient = new twitter(config);
var response = [];
var data = [];

twitterClient.get('statuses/user_timeline',
                  { screen_name : 'BrendanEich', count: 200, include_rts: false },
                  (error, tweets, response) => {
                    for (let i = 0; i < tweets.length; i++) {
                      console.log(tweets[i].text);
                      
                    }
                  });
