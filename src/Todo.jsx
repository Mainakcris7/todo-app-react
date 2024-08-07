import "./Todo.css"
import Item from "./Item"
import { useState } from "react"

export default function Todo() {
    const [items, setItems] = useState([])
    const [item, setItem] = useState("");
    const changeItem = (event) => {
        setItem(event.target.value)
    }
    // Add item
    const addItem = () => {
        if (item.trim() !== "") {
            setItems((prevItems) => [...prevItems, item])
        }
        setItem("")
    }
    // Delete item
    const deleteItem = (delItem) => {
        setItems((prevItems) => prevItems.filter((ele, idx) => (ele + idx) != delItem))
    }
    const deleteAllItems = () => {
        setItems([])
    }
    return (
        <>
            <div className="outer">
                <div className="header">
                    <h2>TODO list</h2>
                    <div className="addBox">
                        <input type="text" name="addItem" onChange={changeItem} value={item} />
                        <button className="add" onClick={addItem}>Add</button>
                    </div>
                </div>
                <div className="items">
                    {items.map((item, idx) =>
                        <Item name={item} key={item + idx} onDelete={() => { deleteItem(item + idx) }} />
                    )}
                </div>
                <div className="removeAll">
                    {
                        items.length > 0 &&
                        (<button className="remove-all" onClick={deleteAllItems}>
                            Remove all
                        </button>)
                    }
                </div>
            </div>
        </>
    )
}