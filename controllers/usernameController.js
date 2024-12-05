const db = require('../db/queries');

async function getUsernames(req, res) {
    const search = req.query.search;
    console.log(search);
    if (search) {
        const matches = await db.searchUsername(search);
        console.log('Matches: ', matches);
        res.send('Matches: ' + matches.map(match => match.username).join(', '));
    }
    else {
        const usernames = await db.getAllUsernames();
        console.log('Usernames: ', usernames);
        res.send('Usernames: ' + usernames.map(user => user.username).join(', '));
    }
}

async function createUsernameGet(req, res) {
    res.render('form');
}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect('/');
}

async function deleteAllUsernames(req, res) {
    await db.deleteAllUsernames();
    res.redirect('/');
}

module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    deleteAllUsernames,
}