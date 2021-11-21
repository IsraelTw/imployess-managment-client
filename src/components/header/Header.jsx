import { Link } from "react-router-dom";
import './Header.css';
const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/employees">Home</Link></li>
                <li><Link to="managment">Managment Employees</Link></li>
                <li><Link to="os">OS Employees</Link></li>
            </ul>
        </nav>
    );
}
export default Header;