import React from 'react';

import onlineIcon from '../../../icons/onlineIcon.png';
import { Link } from "react-router-dom";
import './ChatMenu.css';

const ChatMenu = ({ users, chats }) => (
  <div className="textContainer">

    {chats.map((element) =>(

             <Link onClick={e => (!"666978" || !element) ? e.preventDefault() : null} to={`/chat?name=666978&room=${element}`}>
             {element}
            
            </Link>
    ))}

  </div>)


  ;

export default ChatMenu;