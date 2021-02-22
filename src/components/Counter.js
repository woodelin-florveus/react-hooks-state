// import React, { useState } from "react";

import React, { useState } from "react";



function Counter(){
  const [count, setCount] = useState(0)

    function increment(){
      // console.log(`Before setState: ${count}`)
      // setCount(count + 1)
      // setCount(count + 1)
      // console.log(`After setState: ${count}`)

      setCount((currentCount) => currentCount + 1)
      setCount((currentCount) => currentCount + 1)
     
    }

  return <button onClick={increment}>{count}</button>

}

export default Counter;