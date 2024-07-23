// import React, {useId} from 'react'

// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectCurrency = "usd",
//     amountDisable = false,
//     currencyDisable = false,
//     className = "",
// }) {
//    const amountInputId = useId()

//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//             <div className="w-1/2">
//                 <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
//                     {label}
//                 </label>
//                 <input
//                     id={amountInputId}
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled={amountDisable}
//                     value={amount}
//                     onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//                 />
//             </div>
//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                     value={selectCurrency}
//                     onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//                     disabled={currencyDisable}
//                 >

//                         {currencyOptions.map((currency) => (
//                             <option key={currency} value={currency}>
//                             {currency}
//                             </option>
//                         ))}

//                 </select>
//             </div>
//         </div>
//     );
// }

// export default InputBox;

import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <>
      <div
        className={`bg-white shadow-lg p-4 rounded-lg text-sm flex flex-wrap ${className}`}
      >
        <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
          <label
            htmlFor={amountInputId}
            className="text-gray-600 mb-2 inline-block"
          >
            {label}
          </label>
          <input
            id={amountInputId}
            className="outline-none w-full bg-transparent py-2 border-b-2 border-gray-300 focus:border-blue-500 transition-colors duration-300"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="w-full md:w-1/2 pl-2 flex flex-col justify-end text-right">
          <p className="text-gray-600 mb-2">Currency Type</p>
          <select
            className="rounded-lg px-2 py-2 bg-gray-100 cursor-pointer outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
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
    </>
  );
}

export default InputBox;
