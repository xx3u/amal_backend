const passport = require('passport');
const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const User = require('../models').User;

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_KEY,
    },
    async function (jwtPayload, done) {
      try {
        const user = await User.findOne({ where: { id: jwtPayload.id } });
        return done(null, user);
      } catch (error) {
        console.log(error);
      }
    }
  )
);

const passAuth = passport.authenticate('jwt', { session: false });
module.exports = passAuth;
