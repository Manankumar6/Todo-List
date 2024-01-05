import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setinputList] = useState("") //for taking input onChange
  const itemEvent = (event) => {
    setinputList(event.target.value) // set Value for input
  }
  const ListofItem = () => {     //onClick button return old array that hold all value of input 
    setItem((olditem) => {
      return [...olditem, inputList]
    })
    setinputList("")
  }
  const [Item, setItem] = useState([]); //use in map function for diplay in li
  const deleteitem = (id) => {
    console.log("deleted")
    setItem((olditem) => {
      return olditem.filter((arrEle, index) => {
        return id !== index
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="heading">ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent} />
          <button onClick={ListofItem}>+</button>

          <ol >
            {/* <li>{inputList}</li> */}
            {
              Item.map((itemval, index) => {
                return <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteitem}
                />
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;
  