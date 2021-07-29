import React from "react";
import "../../global.scss";

export default function TickersListPeterLynch({ tickersData }) {
  const dataPeterLynch = tickersData
    .filter((item) => {
      const precoLucro = item.indicators?.precoLucro
        ?.replace(",", ".")
        .replace("%", "");

      return precoLucro > 0 && item.indicators.crescimento5a > 0 && item;
    })
    .map((item) => {
      return {
        ...item,
        peterLynchIndx: (
          item.indicators.precoLucro?.replace(",", ".").replace("%", "") /
          (item?.indicators?.crescimento5a / 5)
        ).toFixed(2),
      };
    });

  const dataSorted = dataPeterLynch.sort((a, b) => {
    return +a.peterLynchIndx < +b.peterLynchIndx
      ? -1
      : +a.peterLynchIndx > +b.peterLynchIndx
      ? 1
      : 0;
  });

//  console.log(dataSorted);

  return (
    <div>
      <h1 className="container--tickers__title"> Peter Lynch </h1>
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
              <th>Marg. Liquida</th>
              <th>ROIC</th>
              <th>Yeld</th>
              <th>Crescimento 5a</th>
              <th>Peter Lynch</th>
            </tr>
          </thead>
          <tbody>
            {dataSorted.map((item) => (
              <tr key={item.code}>
                <td> {item.code}</td>
                <td> {+item.price.replace(",", ".")} </td>
                <td>
                  {item.indicators?.precoSobreValorPatrimonial}
                </td>
                <td> {item.indicators?.precoLucro} </td>
                <td>
                  {item.indicators?.valorDividendos12Meses}
                </td>
                <td>
                  {" "}
                  {item.indicators?.dividaLiquidaEbitda}{" "}
                </td>
                <td> {item.indicators?.margemLiquida} </td>
                <td>
                  {item.indicators?.returnOverInvestedCapital}
                </td>
                <td> {item.indicators?.dividendYeld} </td>
                <td> {item.indicators?.crescimento5a} </td>
                <td> {item.peterLynchIndx} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
