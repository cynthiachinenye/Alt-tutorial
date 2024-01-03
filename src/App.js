import { React, useState } from 'react';
import profile from './Components/profile';

import './App.css';

function Greeting() {
  return (<p>hello my react</p>)
}
// component loader
function Loader() {
  return (<div>Loading...</div>)
}
// component content
function Content() {
  return (
    <div className='content'>
      <p>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</p>
    </div>
  )
}
function Car({data}){
  return(<div className="car">{`${data.brand} ${data.color} ${data.year}`}</div>)

    
}

function App() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState("Magic is here")
  const [loading,setLoading] =useState(true);
  setTimeout(()=>{
   setLoading(false);
  },5000)
  const increment = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);

  }
  const decrement = (e) => {
    e.preventDefault();
    setCount((prev) => prev - 1);

  }
  const eventHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value)
  }
  const mouseHandle = (e) => {
    e.preventDefault();
    setState("welcome to the jungle");
    setTimeout(() => {
      setState("Magic is here")
    }, 2000)

  }
 
  const cars = [
    {
        brand:'ford',
        color:'red',
        year:'2023',
    },
    {
        brand:'toyota',
        color:'blue',
        year:'2019',
    },
    {
        brand:'sienna',
        color:'silver',
        year:'2015',
    },
    
]
const ListCars = cars.map((car) =>{
  return(<Car data={car}/>)
})

  return (
    <section>
      <Greeting />
      <div className='size'>
        <p>{count}</p>
        <button className='btn action' onClick={increment}>Increment</button>
        <button className=' btn action' onClick={decrement}>Decrement</button>
      </div>

      <form className='form'>

        <input type='text' placeholder='Enter your name' onChange={eventHandler} />
        <input type='email' placeholder='Enter your email' />
        <input type='phone' placeholder='Enter your phone' />
        <button>Submit</button>
      </form>

      <div>

        <div className='header'><h1 onMouseOver={mouseHandle}>{state}</h1></div>
      </div>

<div className='section'>
{loading ? <Loader/> :<Content/>}
</div>

return(<section>{ListCars}</section>)

<profile/>
    </section>

    
    
  );
}

export default App;
