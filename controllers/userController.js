const User = require('../models/User');

exports.login = (req, res) => {
    const { email, password } = req.body;
    const user = User.findUser ByEmail(email); // Corrected method name
    
    if (user && user.password === password) {
        req.session.userId = user.id; // Store user ID in session
        res.redirect('/jobs'); // Redirect to jobs page
    } else {
        res.render('login', { error: 'Invalid email or password.' });
    }
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/jobs');
        }
        res.clearCookie('connect.sid'); // Clear session cookie
        res.redirect('/');
    });
};