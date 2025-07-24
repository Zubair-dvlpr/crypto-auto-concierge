import React from "react";
import Marquee from "react-fast-marquee";

// Import your crypto icons
import btcIcon from "../../../assets/images/Bitcoin.png";
import ethIcon from "../../../assets/images/Ethereum.png";
import ltcIcon from "../../../assets/images/Litecoin.png";
import xrpIcon from "../../../assets/images/XRP.png";
import solIcon from "../../../assets/images/Solana.png";
import dogeIcon from "../../../assets/images/Dogecoin.png";

const cryptoData = [
  {
    name: "BITCOIN (BTC)",
    price: "$118,300.28",
    change: "+0.01%",
    changeColor: "text-green-500",
    icon: btcIcon,
  },
  {
    name: "ETHEREUM (ETH)",
    price: "$3,713.07",
    change: "+0.01%",
    changeColor: "text-green-500",
    icon: ethIcon,
  },
  {
    name: "LITECOIN (LTC)",
    price: "$3,713.07",
    change: "+0.01%",
    changeColor: "text-green-500",
    icon: ltcIcon,
  },
  {
    name: "XRP (XRP)",
    price: "$3.50",
    change: "+0.01%",
    changeColor: "text-green-500",
    icon: xrpIcon,
  },
  {
    name: "SOLANA (SOL)",
    price: "$180.10",
    change: "+0.01%",
    changeColor: "text-green-500",
    icon: solIcon,
  },
  {
    name: "DOGECOIN (DOGE)",
    price: "$0.2527",
    change: "-0.01%",
    changeColor: "text-red-500",
    icon: dogeIcon,
  },
];

const CryptoPriceMarquee = () => {
  return (
    <div className="w-full col-span-full  py-4">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {cryptoData.map((crypto, index) => (
          <div
            key={index}
            className="flex items-center border-r border-gray-600 px-6 min-w-max"
          >
            <img src={crypto.icon} alt={crypto.name} className="w-10 h-10 mr-3" />
            <div>
              <div className="text-white font-semibold text-lg">{crypto.price}</div>
              <div className="text-xs text-white opacity-90">{crypto.name}</div>
              <div className={`text-xs ${crypto.changeColor}`}>
                {crypto.change} (1d)
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CryptoPriceMarquee;
