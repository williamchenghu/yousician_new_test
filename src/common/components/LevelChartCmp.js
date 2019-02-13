// @flow
import React from 'react';

import PieChart from 'react-minimal-pie-chart';
import PropTypes from 'prop-types';

type Props = {
  level: number
};
const LevelChartCmp = ({ level }: Props) => {
  return (
    <div className="donut-level">
      <PieChart
        className="donut"
        data={[
          { value: level, key: 1, color: '#4fc514' },
          { value: 15 - level, key: 3, color: '#878789' }
        ]}
        lineWidth={10}
        paddingAngle={5}
        lengthAngle={-360}
        animate={true}
      />
      <div className="number">{level}</div>
    </div>
  );
};

export default LevelChartCmp;
