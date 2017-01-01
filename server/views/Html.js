/* eslint-disable react/no-danger, react/prop-types */
import React from 'react';

export default ({ head, assets, markup }) => (
  <html lang="en">
    <head>
      {head.meta.toComponent()}
      {head.title.toComponent()}
      <link rel="shortcut icon" href="/assets/favicon.svg" />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </head>
    <body>
      <div dangerouslySetInnerHTML={{ __html: markup }} id="root" />
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" />
      <script src="/assets/js/bootstrap.min.js" />
      <script src={assets.vendor.js} />
      <script src={assets.main.js} />
    </body>
  </html>
);
