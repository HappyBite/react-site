/* eslint-disable react/no-danger, react/prop-types */
import React from 'react';

export default ({ head, assets, markup }) => (
  <html lang="en">
    <head>
      {head.meta.toComponent()}
      {head.title.toComponent()}
      <link rel="shortcut icon" href="/assets/favicon.png" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/animate.css" />
      <link rel="stylesheet" href="/assets/fonts/font-awesome.min.css" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800" />
    </head>
    <body>
      <div dangerouslySetInnerHTML={{ __html: markup }} id="root" />
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" />
      <script src="/assets/js/bootstrap.min.js" />
      <script src="/assets/js/scrolltopcontrol.js" />
      <script src="/assets/js/default.js" />
      <script src={assets.vendor.js} />
      <script src={assets.main.js} />
    </body>
  </html>
);