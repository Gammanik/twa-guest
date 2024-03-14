import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import { retrieveLaunchParams } from "@tma.js/sdk";
import {SDKProvider, type SDKInitOptions, DisplayGate, useInitData} from '@tma.js/sdk-react';
import {SDKProviderError} from "./components/sdk/SDKProviderError";
import {SDKProviderLoading} from "./components/sdk/SDKProviderLoading";
import {SDKInitialState} from "./components/sdk/SDKInitialState";

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  const { network } = useTonConnect();
  // const startParam = retrieveLaunchParams().startParam;
  const options: SDKInitOptions = {
    acceptCustomStyles: true,
    cssVars: true,
    complete: false,
    async: false,
  };
  // const initData = useInitData();


  return (
    <StyledApp>
      <SDKProvider options={options}>
      <DisplayGate error={SDKProviderError} loading={SDKProviderLoading} initial={SDKInitialState}>
        <p>А вот тебе сразу данные твоего пользователя:</p>
        {/*<pre>{JSON.stringify(initData?.user, null, 2)}</pre>*/}

      <AppContainer>
          <FlexBoxCol>
            <FlexBoxRow>
                <TonConnectButton />
                <Button> {network ? network === CHAIN.MAINNET ? "mainnet" : "testnet" : "N/A"} </Button>
            </FlexBoxRow>
            <Counter />
            <TransferTon />
            <Jetton />
          </FlexBoxCol>
      </AppContainer>

      </DisplayGate>
      </SDKProvider>
    </StyledApp>
  );
}

export default App;
