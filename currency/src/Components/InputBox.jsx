import React from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency,
    amountDisabled = false,
    currencyDisabled = false,
    className=""
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-md flex w-full h-28`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-6 inline-block">
                    {label}
                </label>
                <input
                    autoFocus
                    className="outline-1 w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisabled}
                    onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-6 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                    disabled={currencyDisabled}
                >
        
                        {currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

