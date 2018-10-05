//** For Heroku to serve our Angular App **//

// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist/ directory
app.use(express.static('./dist/example-restapi-client'));

// Serve website from /dist folder when root url is accessed
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname,'/dist/example-restapi-client/index.html'));
});

// Start the app by listening on the default or Heroku port
const port = process.env.PORT || 8080;
app.listen(port);