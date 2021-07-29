import React from "react";
import "../../global.scss";

export default function TickersListJoelGreenblat({ tickersData }) {
  //roic e ev/ebit
  // roic 0- >9
  // ev/ebit 9 -> 0
  //remover bancos, seguradoras e empresas de agua e luz

  // const roic = ticker.indicators?.returnOverInvestedCapital?.replace(",", ".");
  // const evebit = ticker.indicators?.evebit?.replace(",", ".");

  let counterRoic = 1;
  let counterEvebit = 1;

  const dataSortedRoic = tickersData
    .filter((item) => {
      const aValue = item.indicators?.returnOverInvestedCapital
        ?.replace(",", ".")
        .replace("%", "");
      return aValue > 0 && item;
    })
    .sort((a, b) => {
      const aValue = +a.indicators.returnOverInvestedCapital
        .replace(",", ".")
        .replace("%", "");
      const bValue = +b.indicators.returnOverInvestedCapital
        .replace(",", ".")
        .replace("%", "");
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    })
    .map((item) => {
      return { ...item, roicIndex: counterRoic++ };
    });

    const dataSortedEvebit = dataSortedRoic.filter((item) => {
      const aValue = item.indicators?.evebit
        ?.replace(",", ".")
        .replace("%", "");
      return aValue > 0 && item;
    })
    .sort((a, b) => {
      const aValue = +a.indicators.evebit
        .replace(",", ".")
        .replace("%", "");
      const bValue = +b.indicators.evebit
        .replace(",", ".")
        .replace("%", "");
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    })
    .map((item) => {
      return { ...item, joelGreenbalIndx : counterEvebit + item.roicIndex , evebitIndex: counterEvebit++  };
    });

    const dataSorted = dataSortedEvebit.sort((a, b) => {
      return a.joelGreenbalIndx < b.joelGreenbalIndx ? -1 : a.joelGreenbalIndx > b.joelGreenbalIndx ? 1 : 0;
    })

//  console.log(dataSorted);

  return (
    <div className="strategy">
      <h1 className="container--tickers__title"> Joel Greenblat </h1>
      <div>
      <table className="fixTableHead">
          <thead>
            <tr>
              <th>Papel</th>
              <th>Cotação</th>
              <th>P/VP</th>
              <th>PL</th>
              <th>DVDO. 12M</th>
              <th>DVDA. / EBT</th>
              <th>Cres. 5a</th>
              <th>Marg. Liquida</th>
              <th>ROIC</th>
              <th>Yeld</th>
              <th>Joel Greenbal</th>
            </tr>
          </thead>
          <tbody>
            {dataSorted.map((item) => (
              <tr className="123" key={item.code}>
                <td className="123"> {item.code}</td>
                <td className="123"> {+item.price.replace(",", ".")} </td>
                <td className="123">
                  {item.indicators?.precoSobreValorPatrimonial}
                </td>
                <td className="123"> {item.indicators?.precoLucro} </td>
                <td className="123">
                  {item.indicators?.valorDividendos12Meses}
                </td>
                <td className="123">
                  {" "}
                  {item.indicators?.dividaLiquidaEbitda}{" "}
                </td>
                <td> {item.indicators?.crescimento5a} </td>
                <td className="123"> {item.indicators?.margemLiquida} </td>
                <td className="123">
                  {item.indicators?.returnOverInvestedCapital}
                </td>
                <td className="123"> {item.indicators?.dividendYeld} </td>
                <td className="123"> {item.joelGreenbalIndx} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
