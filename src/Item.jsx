export default function Item({ name, onDelete: deleteTheItem }) {
    return (
        <>
            <div className="item">
                <p className="item-name">{name}</p>
                <button className="remove" onClick={deleteTheItem}>Remove</button>
            </div>
        </>
    )
}