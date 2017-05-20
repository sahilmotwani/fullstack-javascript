import config from './config';
import apiRouter from './api';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import bodyParser from 'body-parser';
import path from 'path';

const server = express();
server.use(bodyParser.json());
server.set('view engine', 'ejs');

server.use(sassMiddleware(
    {
        src: path.join(__dirname, 'sass'),
        dest: path.join(__dirname, 'public')
    }
)
);

import serverRender from './serverRender';

server.get(['/','/contest/:contestId'], (req, res) => {
    serverRender(req.params.contestId)
        .then(({initialMarkup, initialData}) => {
            res.render('index', {
                initialMarkup,
                initialData
            });
        })
        .catch(error => {
            res.status(404).send("Bad Request");
        });
});

server.use(express.static('public'));
server.use('/api', apiRouter);
server.listen(config.port, config.port, () => {
    console.info('Express listening on port ', config.port);
});