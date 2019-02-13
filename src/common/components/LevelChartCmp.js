// @flow
import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import styled from 'styled-components';

const Donut = styled.div`
  & > *:first-child {
    height: ${props => props.theme.space.single.xl};
  }
  & > *:last-child {
    position: relative;
    text-align: center;
    top: -2em;
  }
`;

type Props = {
  level: number
};
const LevelChartCmp = ({ level }: Props) => {
  return (
    <Donut>
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
      <div>{level}</div>
    </Donut>
  );
};

export default LevelChartCmp;
