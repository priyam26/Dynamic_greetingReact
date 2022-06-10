import React from 'react';
import {add, sub, mul, div} from './Calc';

function App()
{
    return(
    <>
   <ul>
     <li>Sum of two no is {add (22,20)}</li>
     <li>{sub(20,6)}</li>
     <li>{mul(20,5)}</li>
     <li>{div(36/6)}</li>
   </ul>
  </>
);
}
export default App;