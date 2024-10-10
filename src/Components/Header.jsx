import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>Christ Computer Academy</h1>
            <ul>
                {/* <li>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </li> */}
                <li>
                    <Link to="/">
                        <button>Register</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}