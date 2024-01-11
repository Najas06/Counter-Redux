import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {
  const [range, setRange] = useState(1)
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value)
  console.log("=========The range is: ", range);
  return (
    <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
      <h1 style={{ fontSize: "70px", color: "black" }}>{count}</h1>
      <div>
        <button className='btn btn-danger p-3 ms-2' onClick={() => dispatch(decrement(Number(range)))}>Decrement</button>
        <button className='btn btn-success p-3 ms-2' onClick={() => dispatch(increment(Number(range)))}>Increment</button>
        <button className='btn btn-primary p-3 ms-2' style={{ width: "120px" }} onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        {/* <input type="text" className='form-control w-100 mt-3' placeholder='Please Enter the Range' style={{border:"blue"}} 
          onChange={(e)=>setRange(e.target.value)}/> */}
        <input
          type="text"
          className='form-control w-100 mt-3'
          placeholder='Please Enter the Range'
          style={{ border: "blue" }}
          onChange={(e) => {
            // Ensure only numeric input is accepted
            const enteredValue = e.target.value.replace(/[^0-9]/g, '');
            setRange(enteredValue);
          }}
        />

      </div>
    </div>
  )
}

export default Counter