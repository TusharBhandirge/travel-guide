
import './App.css';
import React,{useState} from "react";

function App() {

  

  var list ={
    "Street Food" : [
      {
        name : "Vada Paav",
        desc : "The dish consists of a deep fried potato dumpling placed inside a bread bun (pav) sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper."
      }
      , {
        name : "Paav Bhaji",
        desc : "Pav bhaji is a spiced mixture of mashed vegetables in a thick gravy served with bread. Vegetables in the curry may commonly include potatoes, onions, carrots, chillies, peas, bell peppers and tomatoes. Street sellers usually cook the curry on a flat griddle (tava) and serve the dish hot."
      }
      , {
        name : "Puran poli",
        desc : "Puran poli is a sweet flatbread stuffed with a sweet lentil filling made from husked spilt bengal gram (chana dal) and jaggery. Puran poli is a popular Maharashtrian recipe made during Ganesh Chaturthi or Diwali or any other festive occasion."
      }],
    "Beaches" : [
      {
        name : "Ganapatipule Beach",
        desc : "Ganapatipule Beach is a spectacular paradise along the Konkan Coast. It's a perfect gateway that captivates beach lovers, adventure enthusiasts, and pilgrims as well. It simply looks stunning with the Ganapati temple on the shores that offers a soothing atmosphere."
      }
      ,{
        name : "Dahanu-Bordi Beach",
        desc : "Dahanu Bordi Beach is located in Dahanu taluka of Palghar district. It is spread over a distance of 17 km. Not only for its extensive and tidy beach, Dahanu is also known for its vast chikoo fruit orchids. Although, it is quite warm during summer, the gentle breeze cools down the entire beach."
      },{
        name : "Juhu Beach",
        desc : "Juhu is an upmarket neighbourhood of Mumbai. It is most famous for the sprawling Juhu Beach. It is surrounded by the Arabian Sea to the west, Versova to the north, Santacruz and Vile Parle to the east and Khar to the south."
      }
      ],
    "HillStations" :[
      {
        name : "Matheran",
        desc : "Matheran is one of the smallest hill stations in India. It is located on the Western Ghats range at an elevation of around 800 m (2,625 feet) above sea level. It is about 90 km from Mumbai, and 120 km from Pune. Matheran's proximity to many metropolitan cities makes it a weekend getaway for urban residents."
      }
      ,{
        name : "Mahabaleshwar",
        desc : "Mahabaleshwar is a peaceful hill station located in the Sahayadri range of Maharashtra. It lies 120km south-west of Pune and at a distance of 260.6 km from Mumbai. The city has stunning views to offer with Arthur's Seat, Bombay Point, Babington Point, Wilson Point and Kate's Point being the famous among all."
      },{
        name : "Lonavala",
        desc : "Often called the 'Jewel of Sahyadri' and the 'City of Caves', this hill station boasts of a spectacular setting that includes lush green valleys, stunning waterfalls, serene lakes and remarkable caves. The myriad places to visit in Lonavala that include historical sites, natural wonders, religious attractions, etc."
      } ]
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
                     <h4>{item.name}</h4> 
                     <p>{item.desc}</p>
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
