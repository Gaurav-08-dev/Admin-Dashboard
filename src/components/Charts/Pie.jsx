import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationTooltip, PieSeries, AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';


const Pie = ({ id, data, legendVisiblity, height }) => {

  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      height={height}
      legendSettings={{ visible: legendVisiblity, background: 'white' }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373e' : '#fff'}

    >
      <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective

          name="Sale"
          dataSource={data}
          type="Pie"
          xName="x"
          yName="y"
          innerRadius="40%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          startAngle={0}
          endAngle={360}
          radius="70%"
          dataLabel={{
            visible:true,
            name:'text',
            position:'Inside',
            font:{
              color:'#fff',
              fontWeight:'600'
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default Pie;