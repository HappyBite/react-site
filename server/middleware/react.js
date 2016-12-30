import React from 'react';
import { ServerRouter, createServerRenderContext } from 'react-router';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import Helmet from "react-helmet";

import Routes from '../../routes';
import Html from '../views/Html';

export default function reactMiddleware(req, res) {
  var data = require('../../data-store/get-data.js');
  data = data.get('items');

  const assets = require('../../build/static/assets.json'); // eslint-disable-line global-require, import/no-unresolved
  const context = createServerRenderContext();
  
  const markup = renderToString(
    <ServerRouter location={req.url} context={context}>
      <Routes data={data} />
    </ServerRouter>
  );

  const { missed, redirect } = context.getResult();

  if (redirect) {
    return res.redirect(301, redirect.pathname);
  }

  let head = Helmet.rewind();
  // <Helmet
  //   script={[
  //     {innerHTML: `window.data = '${JSON.stringify(data)}'`}
  //   ]}
  // />
  const html = renderToStaticMarkup(
    <Html head={head} assets={assets} markup={markup} data={data} />
  );
  
  
  return res
    .status(missed ? 404 : 200)
    .send(`<!doctype html>${html}`);
}
