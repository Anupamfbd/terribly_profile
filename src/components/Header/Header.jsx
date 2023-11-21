import { AiOutlineHeart } from "react-icons/ai";
import headimg from "../../assest/headerimg.jpg";
import "./Header.css";

const Header = () =>{
    return(
        <header>
            <div className="head">
                <img className="headimg" src={headimg} alt="header image" />
                <div class="vl"></div>
                <h2>STORIES</h2>
                <button className="headbtn"><b>Courses</b></button>
            </div>

        </header>
    );
};
export default Header;