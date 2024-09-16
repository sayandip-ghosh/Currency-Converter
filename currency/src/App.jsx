import { useEffect, useState } from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [convertedAmt, setConvertedAmt] = useState(0);
  const [to, setTo] = useState('inr');
  const [isDisabled, setIsDisabled] = useState(false);
  const [addClass, setAddClass] = useState("");

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap= ()=>{
    setFrom(to)
    setTo(from)
  }

  const convert =()=>{
    setConvertedAmt(amount * currencyInfo[to])
    setIsDisabled(true)
    setAddClass("bg-gray-500")
  }
  const checkDisabled =()=>{
      setIsDisabled(false)
      setAddClass("")
  }
  useEffect(checkDisabled,[from,to,amount])
  

  return (
    <>
    <div className="bg-[url('./assets/background.jpg')] bg-cover h-screen flex items-center justify-center">
      <div className="bg-white backdrop-blur-md bg-opacity-20 shadow-2xl h-2/3 w-1/2 rounded-3xl flex items-center justify-center">
      <div className="flex justify-center w-full">
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
                                selectCurrency={from}
                                onAmountChange={(val) => setAmount(val)}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}>
                                SWAP
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmt}
                                currencyOptions={options}
                                selectCurrency={to}
                                amountDisabled={true}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                
                            />
                        </div>
                        <button type="submit" className= {`w-full ${addClass} bg-blue-700 text-white px-4 py-3 rounded-lg shadow-md`} disabled={isDisabled} >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                    </div>
      </div>
      </div>
    </>
  )
}

export default App
