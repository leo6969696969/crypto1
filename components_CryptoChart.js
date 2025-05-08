import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CryptoChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart", {
      params: { vs_currency: "usd", days: 30 }
    }).then(res => {
      const prices = res.data.prices.map(price => price[1]);
      setChartData({
        labels: Array(prices.length).fill(""),
        datasets: [
          {
            label: "Bitcoin Price",
            data: prices,
            borderColor: "blue",
            fill: false
          }
        ]
      });
    });
  }, []);

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-lg font-bold mb-4">Bitcoin Price</h2>
      <Line data={chartData} />
    </div>
  );
}