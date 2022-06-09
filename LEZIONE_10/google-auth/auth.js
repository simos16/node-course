const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '508348262474-ajpak1vm78vuc1sl2nm7fll0t5gosl6m.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({

        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:5000/auth/google/callback',
        passReqToCallBack: true,
    },
    function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }));

passport.serializeUser(function(user, done) {

    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});