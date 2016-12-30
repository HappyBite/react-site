/* eslint-disable react/no-danger, react/prop-types */
import React from 'react';

export default ({ head, assets, markup, data }) => (
  <html lang="en">
    <head>
      {head.meta.toComponent()}
      {head.title.toComponent()}
      {head.link.toComponent()}
    </head>
    <body>
      <div dangerouslySetInnerHTML={{ __html: markup }} id="root" />
      {head.script.toComponent()}
      <div dangerouslySetInnerHTML={{ __html: `<div><script>window.data = '${JSON.stringify(data)}';</script></div>` }} />
      <script src={assets.vendor.js} />
      <script src={assets.main.js} />
    </body>
  </html>
);
