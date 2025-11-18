import React, { useEffect, useState } from 'react'

export default function ReactBatching  () {
     const [batch,setBatch]  = useState(0);
       useEffect(() => {
     console.log(batch);
    },[batch]);

    const showBatches = () =>
    {
        setBatch(batch + 1 );
        setBatch(batch + 1 );
        setBatch(batch + 1 );
        setBatch(batch + 1 );
        setBatch(batch + 1 );

        //uses stale (old) value
        // React Batching :React groups multiple state 
        // updates together and runs only one 
        // re-render at the end — this is called batching.
        // here all state updates get value 0 and execute and render together..so value updates to 1 only.
    }

    const withoutBatch = () => {
        setBatch(b => b + 1 );
        setBatch(b => b + 1 );
        setBatch(b => b + 1 );
        setBatch(b => b + 1 );
        setBatch(b => b + 1 );
        //always uses latest value in memory
        //first exuted then second then so on...
    }
  return (
    <>
     <button onClick={showBatches}>React batching</button>
     <button onClick={withoutBatch}>Without Batch</button>
    </>
  )
}
