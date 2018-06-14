var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/app-google-login', function(req, res) {
  res.render('app-google-login', {
      name: "Website for login using Google",
      url: "/auth/google"
  });
})
app.get('/auth/google', function(req, res) {
  res.send("Congrats! You've just login yourself on the right page!");
  console.log('Login completed');
})

app.listen(3000);
app.use(function (req, res, next){
  res.status(404).send('We\'re sorry, but we couldn\'t find your request.')
  next();
})
