import "./Person.css";
import profileimg from "../../assest/personimg.jpg";
import backimg from "../../assest/backgroundimg.jpg";

import { MdStars } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Person = () =>{

    return(
        <main>
            <section className="section1">
                <img className="backimg" src={backimg} alt="background img" />
               
                <div className="profileContent">
                    <img className="profileimg" src={profileimg} alt="profile img" />
                    <div className="info">
                        <h2>Ayushi Gosalia</h2>
                        <input type="none" placeholder="6482"/>
                        <label htmlFor="">Followers</label>
                        <input type="none" placeholder="245" />
                        <label htmlFor="">Follows</label>
                        <p>Co-founder & CEO at Terribly Tiny Tales</p>
                        <a href="http://www.instagram.com/anujgosalia">http://www.instagram.com/anujgosalia</a>
                        <br></br>
                        <MdStars style={{marginRight: '40px', marginTop:'5px'}} size="30px" color="#5295BF"/>
                        <BiSolidLike style={{marginRight: '40px', marginTop:'5px'}} size="30px" color="#E2D243" /> 
                        <FaEye style={{marginRight: '40px', marginTop:'5px'}} size="30px"/>
                        <FaHeart style={{marginRight: '40px', marginTop:'5px'}} size="25px" color="#D46FD2"/>

                    </div>
                    
                </div>
                
            </section>
            <section>

            </section>
        </main>
    );
};

export default Person;