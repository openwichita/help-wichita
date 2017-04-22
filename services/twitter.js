require('dotenv').config()

const Twitter = require('twitter')
const moment = require('moment')
const debug = require('debug')('help-wichita:twitter')

const HASHTAG = process.env.HASHTAG
const CHECK_INTERVAL = process.env.CHECK_INTERVAL || 300000

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret:process.env.ACCESS_TOKEN_SECRET
})

function getStatuses() {
  client.get('search/tweets', {
    q: `#${HASHTAG} since:${moment().format('YYYY-MM-DD')}`,
  }).then(data => {
    data.statuses.forEach(retweetStatus)
  }).catch(debug)
}

function retweetStatus(status) {
  client.post('statuses/retweet', {
    id: status.id_str
  }).then((retweetedStatus, response) => {
    debug(`-- Retweeting status ${status.id_str} from ${retweetStatus.screen_name}`);
  }).catch(debug);
}

setInterval(getStatuses, CHECK_INTERVAL)
