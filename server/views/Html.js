/* eslint-disable react/no-danger, react/prop-types */
import React from 'react';

export default ({ head, assets, markup, contexti }) => (
  <html lang="en">
    <head>
      {head.meta.toComponent()}
      {head.title.toComponent()}
      {head.link.toComponent()}
    </head>
    <body>
      <div dangerouslySetInnerHTML={{ __html: markup }} id="root" />
      <script src={assets.vendor.js} />
      <script src={assets.main.js} />
      {head.script.toComponent()}
      <script>
        window.data = "{contexti}";
      </script>
    </body>
  </html>
);
