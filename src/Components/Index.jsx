import React, { useId } from "react";

function InputBox({
  label,
  ammount,
  onAmmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  ammountDisable = false,
  currencyDisable = false,

  className = "",
}) {

    const ammountInputId=useId();
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg text-sm flex flex-col sm:flex-row sm:items-center">
      <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
        <label htmlFor={ammountInputId} className="text-white mb-2 inline-block">{label}</label>
        <input
        id={ammountInputId}
          className="outline-none w-full bg-white bg-opacity-20 py-2 px-3 rounded-md text-white placeholder-white"
          type="number"
          placeholder="Amount"
          disabled={ammountDisable}
          value={ammount}
          onChange={(e) =>
            onAmmountChange && onAmmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col sm:flex-row sm:justify-end sm:items-center text-right">
        <p className="text-white mb-2 sm:mb-0 sm:mr-4 w-full sm:w-auto">
          Currency Type
        </p>
        <select
          className="rounded-md px-3 py-2 bg-white bg-opacity-20 text-white cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
