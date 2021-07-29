import React from "react";
import "../../global.scss";

export default function TickersList({ tickersData, parametersData }) {
  const getBGrahamSqrt = (ticker) => {
    const lucroPorAcao = ticker.indicators?.lucroPorAcao?.replace(",", ".");
    const valorPatrimonialAcao =
      ticker.indicators?.valorPatrimonialAcao?.replace(",", ".");

    if (lucroPorAcao > 0 && valorPatrimonialAcao > 0) {
      return Math.sqrt(22.5 * lucroPorAcao * valorPatrimonialAcao).toFixed(2);
    } else {
      return 0;
    }
  };
  const tickerWithIndicador = tickersData
    .filter((item) => item.price > 0)
    .map((item) => {
      const fairPrice = getBGrahamSqrt(item);
      const secureMargin = (
        ((fairPrice - item.price) * 100) /
        item.price
      ).toFixed(2);
      return { ...item, fairPrice, secureMargin };
    });

  const dataSorted = tickerWithIndicador.sort((a, b) =>
    +a.secureMargin > +b.secureMargin
      ? -1
      : +a.secureMargin < +b.secureMargin
      ? 1
      : 0
  );

  return (
    <div>
      <h1 className="container--tickers__title"> Graham </h1>
      <div>
        <table className="fixTableHead">
          <thead>
            <tr>
              <th>Papel</th>
              <th>Cotação</th>
              <th>Preço Justo (G)</th>
              <th>Margem (G)</th>
              <th>P/VP</th>
              <th>PL</th>
              <th>DVDO. 12M</th>
              <th>DVDA. / EBT</th>
              <th>Cres. 5a</th>
              <th>Marg. Liquida</th>
              <th>ROIC</th>
              <th>Yeld</th>
            </tr>
          </thead>
          <tbody>
            {dataSorted.map((item) => (
              <tr className="123" key={item.code}>
                <td className="123"> {item.code}</td>
                <td className="123"> {+item.price.replace(",", ".")} </td>
                <td className="123">{item.fairPrice}</td>
                <td className="123">{item.secureMargin}%</td>
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
                <td className="123"> $00.00 </td>
                <td className="123"> {item.indicators?.margemLiquida} </td>
                <td className="123">
                  {item.indicators?.returnOverInvestedCapital}
                </td>
                <td className="123"> {item.indicators?.dividendYeld} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
