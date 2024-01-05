import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ToDo from "./newTodoCo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import EditNoteIcon from '@mui/icons-material/EditNote';






const NewToDo = () => {
    const [item, setItem] = useState("");
    const [newItem, setnewItem] = useState([]);
    const [newedItem,setnewedItem] = useState(null)
    const [toggle,setToggle] = useState(false)

    const itemEvent = (event) => {
        setItem(event.target.value)
    }

    const ListofItem = () => {
        if(!item){
            alert("Please fill data")
        }else if(item && toggle){

            
            setnewItem(
                newItem.map((val)=>{
                    if(val.id === newedItem){
                        return {...val,name:item}
                    }
                    return val;
                })
                )
            setToggle(false)
            setItem("")
            setnewedItem(null)

        }else{

            const capitalizedItem = item.trim().charAt(0).toUpperCase() + item.trim().slice(1);
            const allInputData = {id:new Date().getTime().toString(), name:capitalizedItem    }
            setnewItem((oldval) => {
                return [...oldval, allInputData]
            })
            setItem("")
        }
    }
    const deleteAll = () => {
        setnewItem([])
    }


    const deleteOne = () => {
        setnewItem((oldval) => {
            if (oldval.length > 0) {
                const updataData = [...oldval];
                updataData.pop();
                return updataData;
            } else {
                return oldval;
            }
        })
    }

    const editItem =(id)=>{
       let edItem = newItem.find((val)=>{
        return val.id === id;
       })
       setToggle(true)
       setItem(edItem.name)
       setnewedItem(id)
    }
   
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1 className="heading">ToDo List</h1>
                    <br />
                    <p>Grocery</p>
                    <input type="text" placeholder="Add item" value={item} onChange={itemEvent} />
                    <Button className="AddBtn" onClick={ListofItem}>
                       {

                       toggle? <EditNoteIcon /> :<AddIcon />
                       }
                    </Button>
                    <br />
                    <ol>

                        {newItem.map((val) => {
                            return (
                                <><ToDo key={val.id} text={val.name} 
                            editItem={()=>editItem(val.id)} />
                              </>
                            )
                        }
                        )}

                    </ol>
                    <div className="btn_cntrl">

                        <button className="btn btn-danger" onClick={deleteAll}>Clear All</button>
                        <button className="btn btn-dark " onClick={deleteOne}>Clear One</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewToDo;