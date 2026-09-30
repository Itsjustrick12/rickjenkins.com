import { Link } from "react-router-dom"

export function NavBar (){
    return (
        <div className="NavBar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/travel">Travel</Link>
                </li>
                <li>
                    <Link to="/hobbies">Hobbies</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    )
}