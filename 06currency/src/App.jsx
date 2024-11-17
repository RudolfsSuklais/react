import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox.jsx";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("eur");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount); 
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=600)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectedCurrency={from}
                            />
                        </div>
                        <div className="w-full mb-1">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectedCurrency={to}
                                amountDisabled
                            />
                        </div>
                        <div className="w-full text-center">
                            <button
                                type="button"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2"
                                onClick={swap}
                            >
                                Swap
                            </button>
                            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg">
                                Convert
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
