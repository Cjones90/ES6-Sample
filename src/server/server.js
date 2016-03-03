'use strict';

const shttp = require('shttp');

shttp.listenToPort(8080);
shttp.setPublicFolder(`${__dirname}/../../pub`);
shttp.setDefaultPage("index.html");

shttp.routePath('app.bundle.js').toFile('app.bundle.js');

shttp.startServer();
