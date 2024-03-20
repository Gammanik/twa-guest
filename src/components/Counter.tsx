import { TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "../hooks/useCounterContract";
import { useTonConnect } from "../hooks/useTonConnect";

import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Ellipsis,
  Button,
} from "./styled/styled";
import {useInitData} from "@tma.js/sdk-react";

export function Counter() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();
  const initData = useInitData();


  return (
    <div className="Container">
      <TonConnectButton />

      <Card>
        <FlexBoxCol>
          <h3>Counter 4</h3>
          <p>А вот тебе сразу данные твоего пользователя:</p>
          <pre>{JSON.stringify(initData?.user, null, 2)}</pre>

          <FlexBoxRow>
            <b>Address</b>
            <Ellipsis>{address}</Ellipsis>
          </FlexBoxRow>
          <FlexBoxRow>
            <b>Value</b>
            <div>{value ?? "Loading..."}</div>
          </FlexBoxRow>
          <Button
              disabled={!connected}
              className={`Button ${connected ? "Active" : "Disabled"}`}
              onClick={() => {
                sendIncrement();
              }}
          >
            Increment
          </Button>
        </FlexBoxCol>
      </Card>
    </div>
  );
}
