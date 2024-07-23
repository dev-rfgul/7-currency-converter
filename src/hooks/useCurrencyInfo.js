// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

//   let url = `https://api.exchangerate-api.com/v4/latest/${currency}`;

//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(`${url}`)
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//     console.log(data);
//   }, [currency]);
// }

// export default useCurrencyInfo;









import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const url = `https://api.exchangerate-api.com/v4/latest/${currency}`;
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => setData(res.rates)) // Extract rates from the response
      .catch((error) => console.error("Error fetching data:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
