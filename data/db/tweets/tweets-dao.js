const model = require('./tweet-model');

const findAllTweets = () => model.find();

const createTweet = (tweet) =>
    model.create(tweet);

const deleteTweet = (id) => model.deleteOne({_id: id});

// const updateTweet = (id, tweet) =>
//     model.updateOne({_id: id},
//     {$set: tweet});

const updateTweet = (tweet) =>{
    console.log('========================', tweet, tweet.id);
    return model.updateOne({_id: tweet._id}, {$set: tweet});
}

const findTweetById = (id) =>
    model.findById(id);


module.exports = {
    findAllTweets, createTweet,
    deleteTweet, updateTweet,findTweetById
};
