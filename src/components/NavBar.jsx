import { Link } from "react-router-dom"

export function NavBar (){
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/travel">
                <button>Travel</button>
            </Link>
            <Link to="/hobbies">
                <button>Hobbies</button>
            </Link>
            <Link to="/blog">
                <button>Blog</button>
            </Link>
            <Link to="/typography">
                <button>Typography</button>
            </Link>
        </>
    )
}