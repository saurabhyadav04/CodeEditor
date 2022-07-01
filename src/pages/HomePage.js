import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();
 const [roomID ,setroomID] =useState('');
 const [username ,setusername] =useState('');
 const createnewroom=(ele)=>{
      ele.preventDefault();
      const id=uuidv4();
      setroomID(id);
      toast.success('a new room created!');
  }

  const JoinRoom=()=>{
    if(!username){
      toast.error('Username required !');
      return;
    }else if(!roomID){
      toast.error('ROOM ID required !');
      return;
    }else{
      navigate(`/editor/${roomID}`, {
        state: {
            username,
        },
    });
    }
  };

  const handleInputEnter=(e)=>{
    if(e.code==='Enter'){
      JoinRoom();
    }
  }

  return (
    <div className="HomePagewrapper">
      <div className="Formwrapper">
          <img className="Homepagelogo" src="/code-sync.png" alt="code-sync logo" />
          <h4 className="mainLabel">
            Paste invitation ROOM ID
          </h4>
          <div className="InputGroup">
                <input type="text" className="inputBox" placeholder="ROOM ID"  onKeyUp={handleInputEnter} onChange={(e)=>setroomID(e.target.value)} value={roomID}/>
                <input type="text" className="inputBox" placeholder="USERNAME" onKeyUp={handleInputEnter} onChange={(e)=>setusername(e.target.value)} value={username}/>
                <button className="btn JoinBtn" onClick={JoinRoom}>Join</button>
                <span className="createInfo">If you don't have an invite the create &nbsp;
                <a href="/" onClick={createnewroom} className="crateNewBtn">new room</a>
                </span>
          </div>
      </div>
      <footer>
          <h4>Made with ❤️ by Saurabh Yadav</h4>
      </footer>
    </div>
  );
}
