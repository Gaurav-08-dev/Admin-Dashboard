import React from 'react';
import { Header,Pie as PieChart } from '../../components';
import { pieChartData } from '../../data/dummy';


const Pie = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Line" title="Inflation Rate" />
      <div className='w-full'>
        <PieChart id="chart-pie" data={pieChartData} legendVisiblity  height="full"/>
      </div>
    </div>
  )
}
export default Pie