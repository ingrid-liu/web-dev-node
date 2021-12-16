const model = require('./tweet-model');

const findAllTweets = () => model.find();

const deleteTweet = (id) => model.deleteOne({_id: id});

const createTweet = (tweet) =>
    model.create(tweet);

// const updateTweet = (id, tweet) =>
//     console.log('========================', tweet, tweet.id);
//     model.updateOne({_id: id}, {$set: tweet});

const updateTweet = (tweet) =>
    console.log('========================', tweet, tweet.id);
model.updateOne({_id: tweet._id}, {$set: tweet});


const findTweetById = (id) =>
    model.findById(id);


module.exports = {
    findAllTweets, createTweet,
    deleteTweet, updateTweet,findTweetById
};

