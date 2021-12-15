const dao = require('./tweet-dao')

module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => {
                    console.log(tweets)
                    return res.json(tweets)
                }
            );

    const deleteTweet = (req, res) => {
        console.log("req.params.id", req.params.id)
        return  dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));
    }



    const createTweet = (req, res) => {
        const Tweet =  {
            "topic": "Web Development",
            "userName": "Zexi",
            "verified": false,
            "handle": "zexi nong",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "logo-image": "../../../images/react-blue.png",
            "avatar-image": "../../../images/react-blue.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            "liked":false,
            ...req.body,
        };
        console.log("+++++++", req.body)
        return dao.createTweet(Tweet)
            .then((insertedTweet) => res.json(insertedTweet))
    }

    const findTweetById = (req, res) =>
        dao.findTweetById(req.params.id)
            .then(tweet => res.json(tweet));

    const updateTweet = (req, res) =>
        dao.updateTweet(req.params.id, req.body)
            .then(status => res.send(status));

    const likeTweet = (req, res) =>{

        return dao.findTweetById(req.params.id)
            .then(tweet => {
                    console.log("111："+tweet.liked)
                    console.log("222：" + tweet.stats.likes)
                    if (tweet.liked) {
                        tweet.stats.likes--
                        console.log("加了吗"+tweet.stats.likes)
                    } else {
                        tweet.stats.likes++
                        console.log("加了吗"+tweet.stats.likes)
                    }
                    tweet.liked = !tweet.liked
                    return  dao.updateTweet(tweet)
                        .then(status => res.json(status) + console.log(status))
                }
            )
    }


    app.put('/rest/tweets/:id/like', likeTweet);
    app.put("/rest/tweets/:id", updateTweet);
    app.get("/rest/tweets/:id", findTweetById);
    app.post("/rest/tweets", createTweet);
    app.delete("/rest/tweets/:id", deleteTweet);
    app.get("/rest/tweets", findAllTweets);

}