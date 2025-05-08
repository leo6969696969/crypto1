import { useEffect, useState } from "react";
import axios from "axios";

export default function MarketTable() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 4,
        page: 1
      }
    }).then(res => setCryptoData(res.data));
  }, []);

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-lg font-bold mb-4">Market</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map(coin => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>${coin.current_price.toFixed(2)}</td>
              <td className={coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}