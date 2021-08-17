
import './App.css';
import React,{useState} from "react";

function App() {

  
  
  const [emojiMeaning, setEmojiMeaning]  = useState(""); 

 

  var list ={
    "Street Food" : ["Vada Paav", "Paav Bhaji", "Puran poli"],
    "Beaches" : ["Ganapatipule Beach", "Dahanu-Bordi Beach.","Juhu Beach."],
    "HillStations" :["Matheran","Mahabaleshwar", "Lonavala"]
  }

  const [items,setItems] = useState("Street Food");

  function sectionButtonClickhandler(section){
      console.log("clicked "+section);
      setItems(section);
  }

  return (
    <div className="App" id="container">
     
     <h1>Welcome to Travel Guide of Maharashtra</h1>

    <div> 
          {
                Object.keys(list).map( (section)=>(
                    <button id="id-section-button"
                      onClick={()=> sectionButtonClickhandler(section)}
                    >
                      {section}
                    </button>
                )
                )
          }
      
    </div>
    <h2>Top three {items} in Maharashtra are : </h2>

    <div id="id-div-output">
          <ul id="id-ul-list">
              {
                list[items].map((item)=>(
                  <li id="id-list-item">
                      {item}
                  </li>
                )
                
                )

              }
          </ul>
    </div>

    </div>
  );
}

export default App;
