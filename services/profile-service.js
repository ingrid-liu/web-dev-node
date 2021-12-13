let profile = require('../data/profile.json');

module.exports = (app) => {
    const findAllProfile = (req, res) => {
        res.json(profile);
    }

    app.get('/api/profile', findAllProfile);

    const updateCurrentProfile = (req, res) => {
        profile = {...profile, ...req.body};
        return res.json(profile);
    }
    app.post('/api/profile', updateCurrentProfile);

}