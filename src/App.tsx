import React from 'react';
import './App.css';
import tubaroesData from './Data/tubas.json';
import tickersData from './Data/tickers-indicators.json';
import parametersData from './Data/parameters.json';
import { Tubaroes } from './Components/Tubaroes/index';
import { ChakraProvider } from "@chakra-ui/react";
import TickersList from './Components/Tickers';
import TickersListJoelGreenblat from './Components/TickersJoelGreenblat';
import TickersListPeterLynch from './Components/TickersPeterLynch';


function App() {

  return (
    <ChakraProvider>
          <header className="app-header">
            <img src="sextante64.png" alt="Logomarca" />
            <h1 style={{height:'50px', fontSize: '36px'}}>Projeto Sextante</h1>
          </header>
          <TickersList tickersData={tickersData} parametersData={parametersData} />
          <TickersListJoelGreenblat tickersData={tickersData} />
          <TickersListPeterLynch tickersData={tickersData} />

           <Tubaroes data={tubaroesData} />     
    </ChakraProvider>

  );
}

export default App;
