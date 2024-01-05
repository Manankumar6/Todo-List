import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
const ToDo = ({text,editItem}) => {
    const [line, setline] = useState(false);


    const cutIt = () => {
        setline((prevLine) => !prevLine);
    }
    return (
        <div className="item_style" >
            <span onClick={cutIt}><DeleteIcon className="deleteBtn" /> </span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}>
                {text}
            </li>
            <span className="edit_btn"><EditNoteIcon  onClick={editItem }/></span>

        </div>
    );
};

export default ToDo;