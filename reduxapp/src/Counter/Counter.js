import { useSelector , useDispatch} from "react-redux";

const Counter = ()=>{
 
    const counterValue = useSelector((userstate) => userstate.counter);
    const show = useSelector((showstate) => showstate.showCounter);

    const dispatch = useDispatch();
    const incrementHandler = () =>{
        dispatch({type:'inc'});
    }
    const decrementHandler = () =>{
        dispatch({type:'dec'});
    }

    const increaseHandler = () =>{
        dispatch({type:'increase',value:10})
    }

    const toggleHandler = () =>{
        dispatch({type:'toggle'})
    }

    return(
        <main>
            <h1>Redux Counter</h1>
           {show ? <div>Counter value from store { counterValue}</div> : ""}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={increaseHandler}>Increase</button>
            <button onClick={toggleHandler}>Toggle</button>

        </main>
    );
}

export default Counter;