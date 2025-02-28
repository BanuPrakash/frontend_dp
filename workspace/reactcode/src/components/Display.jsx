import React, { useState } from 'react'
import useStore from '../store';

export default function Display() {
  let [getStore, setStore] = useStore();
  let [state, setState] = useState();

  function storeToState() {
    setState(getStore());
  }
  useEffect(() => {
    subscribe(storeToState);
    return () => {
      unsubscribe(storeToState);
    }
  }, []);

  return (
    <div>
      Data : {state} from Store <br />
      <button onClick={storeToState}>Get data</button>
    </div>
  )
}
