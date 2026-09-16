
function ListGroup(){
    const items = [
        'Pictures From My Trips',
        'Posts About My Favorite Media',
        'Book Reviews / Ramblings',
        'General Brain Dumps',
        'Fun Things I\'ve learned',
        'Processes and Habits'
    ]; 
    
    
    return (
        <div>
        {/* React Has Ugly Comment Syntax */}
        <>
            <h1>Things I Want to Add To The Site</h1>
            <ul className="list-group">
                {items.map(item => <li className="list-group-item">{item}</li>)}
            </ul>
        </>
        </div>   
    )
}

export default ListGroup;