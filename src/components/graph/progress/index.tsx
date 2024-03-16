import { CategoryScale, LinearScale, PointElement as point, LineElement as line, Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";
import { backgroundColor, borderColor } from "../../../constants/data";
ChartJS.register(CategoryScale, LinearScale, point, line);

export type customerCountType = {
    [year: number]: number
}
export type lineChartType = {
    customerCount: customerCountType
}
const dataProvider = (customerCount: customerCountType) => {
    return {
        labels: Object.keys(customerCount),
        datasets: [{
            label: "Progress",
            data: Object.values(customerCount),
            fill: true,
            backgroundColor: backgroundColor[0],
            borderColor: borderColor[0]
        }]
    }
}

const options = {
    plugins: {
        legend: {
            display:true,
            labels:{
                usePointStyle:true
            }
        }
    }
}

const LineChart = ({ customerCount }: lineChartType) => {
    const data = dataProvider(customerCount)
    return (<Line  height={'100%'} data={data} options={options} />)
}

export default LineChart