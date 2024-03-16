import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { petsType } from '../../../types';
import { backgroundColor, borderColor } from '../../../constants/data';

ChartJS.register(ArcElement, Tooltip, Legend);

export type pieChartType = {
    pieData: petsType
}

export const dataProvider = (pieData: petsType) => {
    return {
        labels: Object.keys(pieData),
        datasets: [
            {
                label: '# of ',
                data: Object.values(pieData),
                backgroundColor: backgroundColor,
                // borderColor: borderColor,
                borderWidth: 3,
            },
        ],
    }
};

export const options = {
    plugins: {
        legend: {
            position: 'bottom' as const,
            labels: {
                usePointStyle: true
            }
        },
    },
    elements: {
        arc: {
            borderWidth: 0,
        },
    },
};

const PieChart = ({ pieData }: pieChartType) => {
    const data = dataProvider(pieData);
    return <div style={{ width: '350px', height: '350px' }}><Pie width={'100%'} height={'100%'} data={data} options={options} /></div>
}

export default PieChart;