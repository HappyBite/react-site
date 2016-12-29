import React from 'react';
import Match from 'react-router/Match';

import H1 from '../../../components/H1';

const SubPage = ({ pathname }) => (
  <div>
    <H1>{pathname} - SubPage</H1>
  </div>
);

export default SubPage;
