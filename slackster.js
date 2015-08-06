module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Yo, ' + userName + '!  I\'m Slackster.  I don\'t do much now, but stay tuned!'
  };
 
  // avoid infinite loop
  if (userName !== 'slackster') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
