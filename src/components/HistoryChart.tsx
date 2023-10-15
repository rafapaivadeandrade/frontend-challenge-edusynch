import useAxios from '../hooks/useAxios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
// import Skeleton from "./Skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

interface ApiResponse {
  prices: [number, number][];
}

const HistoryChart = () => {
  // const router = useRouter();
  // const { id } = router.query
  const { response } = useAxios(
    `coins/bitcoin/market_chart?vs_currency=usd&days=7`,
  );
  const responseData: ApiResponse = response?.data;
  // if(!response) {
  //   return (
  //     <div className="wrapper-container mt-8">
  //       <Skeleton className="h-72 w-full mb-10" />
  //     </div>
  //   )
  // }
  const coinChartData =
    responseData?.prices?.map(value => ({
      x: value[0],
      y: value[1].toFixed(2),
    })) || [];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Set display to false to hide the legend
      },
    },
  };
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: 'bitcoin',
        data: coinChartData.map(val => val.y),
        borderColor: 'rgb(251, 171, 52)',
        backgroundColor: 'rgba(251, 171, 52, 0.5)',
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default HistoryChart;
