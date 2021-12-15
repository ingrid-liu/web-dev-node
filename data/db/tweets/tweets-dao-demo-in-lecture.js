// learn in the lecture
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdev')

const tweetSchema = mongoose.Schema({
    topic:String,
    userName: String,
    verified: {type: Boolean, defaultValue: false},
    handle: String,
    time: String,
    title: String,
    tweet: String,
    attachments: {
        video: String
    }
}, {collection: "tweets"});

const tweetModel = mongoose.model("TweetModel", tweetSchema);

// const promise =  tweetModel.find()
// promise.then((data) => {console.log(data)})
// // concise above promise into the following line
// tweetModel.find().
//     then((data) => {
//         console.log(data)
//     });

const findAllTweet = () => tweetModel.find();

// findAllTweet()
//     .then(tweets => console.log(tweets));

// const findAllTweetById = (id) => tweetModel.find({_id: id});
const findTweetById = (id) => tweetModel.findById({id});

// findTweetById("61b7a93c56fda0f27c13ca3e")
//     .then(tweet => console.log(tweet));
//todo why my return result is still an array not a single element

// const findTweetByUsername = (username) =>
//     tweetModel.find({userName: username})

const findTweetByUsername = (username) =>
    tweetModel.findOne({userName: username})

// findTweetByUsername("SpaceX")
//     .then(tweet => console.log(tweet))

// remove

const deleteTweetById = (id) =>
    tweetModel.removeOne({_id: id});
// deleteTweetById("61b7aa0156fda0f27c13ca3f")
//     .then(status => console.log(status))
// // ↑ seems not working

const createTweet = (newTweet) =>
    tweetModel.create(newTweet)

createTweet({

    "topic": "Web Development",
    "userName": "ReactJS",
    "verified": false,
    "handle": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "tweet": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "attachments": {
        "video": "unKvMC3Y1kI"
    },
    "logo-image": "../../../images/tweet_img_reactJS.png",
    "avatar-image": "../../../images/tweet_img_reactJS.png",
    "stats": {
        "comments": 123,
        "retweets": 234,
        "likes": 345
    }
}).then(actualSavedTweet => console.log(actualSavedTweet))