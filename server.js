const express = require('express');
const next = require('next');

const isProduction = process.env.NODE_ENV === 'production';
const app = next({ isProduction });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/story/:slug', (req, res) => {
      const actualPage = '/storydetail';
      const { slug } = req.params;
      const queryParams = { title: slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(
        '>>>Listening on port 3000. View at http://localhost:3000<<<',
      );
    });
  })
  .catch(exception => {
    // eslint-disable-next-line no-console
    console.error(exception.stack);
    process.exit(1);
  });
