import Navbar from "../components/Navbar";
import CryptoChart from "../components/CryptoChart";
import MarketTable from "../components/MarketTable";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-8 py-4">
        <h1 className="text-4xl font-bold">Buy & sell cryptocurrency</h1>
        <p className="text-lg text-gray-600">
          Trade Bitcoin, Ethereum, and other digital assets.
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8">
          <MarketTable />
          <CryptoChart />
        </div>
      </div>
    </div>
  );
}