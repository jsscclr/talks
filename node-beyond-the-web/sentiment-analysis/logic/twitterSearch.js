'use strict';

const util = require('util');
const twitter = require('twitter');
const sentimentAnalysis = require('./sentimentAnalysis.js');
// const fs = require('fs');

const config = {
  consumer_key: '9RGBZapoXUzHmWTVudv6CtvIr',
  consumer_secret: 'W4gJeVruFPNTlWnXtB0mXpMvDqghpo2uG3UntcpXZp8bmpfYlq',
  access_token_key: '3117126676-0R4q6bEF7suM4y1LAN62cyNJurLSsWmE8je05p5',
  access_token_secret: 'llnKl479M7SlGXGAgIZ9W4iiSnBeRmPj6tjrGFPrMoRyQ'
};

module.exports = (text, callback) => {
  var twitterClient = new twitter(config);
  var response = [];
  var data = [];

  twitterClient.get('statuses/user_timeline',
                    { screen_name : text },
                    (error, tweets, response) => {
                      for (let i = 0; i < tweets.length; i++) {
                        let statusSentiment = {};
                        statusSentiment.tweet = tweets[i].text;
                        statusSentiment.sentiment = sentimentAnalysis(
                          tweets[i].text
                        );
                        data.push({
                          tweet: tweets[i].text,
                          score: statusSentiment.sentiment.score,
                          tokens: statusSentiment.sentiment.tokens,
                          positiveWords: statusSentiment.sentiment.positive,
                          negativeWords: statusSentiment.sentiment.negative
                        });
                        response.push(statusSentiment);
                      }
                      callback(data);
                    });
  
};
