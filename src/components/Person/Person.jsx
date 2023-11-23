import "./Person.css";
import profileimg from "../../assest/personimg.jpg";
import backimg from "../../assest/backgroundimg.jpg";

import { MdStars } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

const Person = () =>{

    return(
        <main>
            <section className="section1">
                <img className="backimg" src={backimg} alt="background img" />
               
                <div className="profileContent">
                    <img className="profileimg" src={profileimg} alt="profile img" />
                    <div className="info">
                        <h2>Ayushi Gosalia 
                        <RiGlobalFill  style={{paddingTop:'5px',paddingLeft:'2px'}} min-size="1vw" color="#561B9C"/>
                        <FaCheckCircle  style={{paddingTop:'5px',paddingLeft:'4px'}} min-size="1vw" color="green"/></h2>
                        <input type="none" placeholder="6482"/>
                        <label className="label1">Followers</label>
                        <input type="none" placeholder="245" />
                        <label className="label2">Follows</label>
                        <p>Co-founder & CEO at Terribly Tiny Tales</p>
                        <a href="http://www.instagram.com/anujgosalia">http://www.instagram.com/anujgosalia</a>
                        <br></br>
                        <div className="icons">
                            <MdStars  style={{marginTop:'-4px'}} min-size="1.8vw" color="#5295BF"/><label>125</label>
                            <BiSolidLike  style={{marginLeft: '40px', marginTop:'-4px'}} min-size="1.8vw" color="#E2D243" /><label>12</label>
                            <FaEye style={{marginLeft: '40px', marginTop:'-4px'}} min-size="1.8vw"/><label>57.8k</label>
                            <FaHeart style={{marginLeft: '40px', marginTop:'-4px'}} min-size="1.8vw" color="#D46FD2"/><label>26.0k</label>
                        </div>

                    </div> 
                </div>
            </section>

            <section className="section2">
                
                <div className="postcount">
                    <h5>134 Posts</h5>

                </div>
                <div className="hrline">
                   
                </div>

                {/* -------------Post------------------ */}

                <div className="postList">
                    <div className="postHead">
                        <h2>A Changing World Order</h2>
                        <BiSolidLike style={{position: 'absolute', left: '90%', marginTop:'-5px'}} min-size="1.5vw" color="#E2D243" />
                    </div>
                    <p>The World is changing at a feveris pace. Friends, collegues and everyone engaged in knowledge
                    work are beginning to sense this, including...</p>
                    <div className="postFoot">
                        <label htmlFor="">musing</label>&nbsp;
                        <label htmlFor="">by anujgosalia</label>&nbsp;
                        <label htmlFor="">August 2 &bull; 2 mins Read &bull; 102 views</label>
                    </div>

                </div>
                <hr style={{opacity:"50%"}}/>
                {/* ----------second post------------- */}
                <div className="postList">
                    <div className="postHead">
                        <h2>Indian v/s Australia</h2>
                        <BiSolidLike style={{position: 'absolute', left: '90%', marginTop:'-5px'}} min-size="1.5vw" color="#E2D243" />
                    </div>
                    <p>Think about it - this cricket series was akin to therapy.<br/>Laying our childhood trauma up top,
                        working with it slowly and surely over two m...</p>
                    <div className="postFoot">
                        <label htmlFor="">thought</label>&nbsp;
                        <label htmlFor="">by anujgosalia</label>&nbsp;
                        <label htmlFor="">January 21 &bull; 1 mins Read &bull; 156 views</label>
                    </div>

                </div>
                <hr style={{opacity:"50%"}}/>
                {/* --------------3rd post------------------- */}
                <div className="postList">
                    <div className="postHead">
                        <h2>Write To build</h2>
                        <BiSolidLike style={{position: 'absolute', left: '90%', marginTop:'-5px'}} min-size="1.5vw" color="#E2D243" />
                    </div>
                    <p>
                        Writing is the first step to create:<br/>
                        -stories<br/>
                        -products<br/>
                        -companies<br/>
                    </p>
                    <div className="postFoot">
                        <label htmlFor="">musing</label>&nbsp;
                        <label htmlFor="">by anujgosalia</label>&nbsp;
                        <label htmlFor="">August 2 &bull; 2 mins Read &bull; 102 views</label>
                    </div>

                </div>
                
            </section>
        </main>
    );
};

export default Person;