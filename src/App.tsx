import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function App() {
    /*const count = useSelector(state=>state.countReducer.count)
    const visible = useSelector(state => state.countReducer.visible)*/

    const customer = useSelector(state => state.customerReducer)
    const item = useSelector(state => state.itemReducer)

    const dispatch = useDispatch();

    const [customerName, setCustomerName] = useState("");
    const [itemName, setItemName] = useState("");
    return (
        <>
            <input type={"text"} placeholder={"Customer Name"} onChange={(e) => setCustomerName(e.target.value)} value={customerName}></input>
            <button onClick={() => dispatch({type: 'ADD_CUSTOMER', payload: customerName})}>Submit Customer</button>

            <input type={"text"} placeholder={"Item Name"} onChange={(e) => setItemName(e.target.value)} value={itemName}></input>
            <button onClick={() => dispatch({type: 'ADD_ITEM', payload: itemName})}>Submit Customer</button>

            <br/>
            {customer}
            <br/>
            {item}

            {/*{visible && count}
            <br/>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"TOGGLE"})}>Toggle</button>*/}
        </>
    )
}

export default App