import axios from "axios";
import { useEffect, useState } from "react";
import { getbreeds } from "../lib/req";

export function GetBreeds({ setSelectedBreed }) {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  function isSelected(id) {
    return selectedBreeds.includes(id);
  }

  function toggleSelect(id) {
    if (isSelected(id)) {
      setSelectedBreeds((el) => el.filter((elId) => elId !== id));
      setSelectedBreed(null);
    } else {
      setSelectedBreeds([...selectedBreeds, id]);
      setSelectedBreed(id);
    }
  }

  useEffect(() => {
    getbreeds().then((response) => {
      const allBreeds = response.data;
      setBreeds(allBreeds);
    });
  }, []);

  return (
    <div className="smo">
      <h2 className="h22">Choose breed</h2>
      {breeds.map((el) => (
        <a
          className={isSelected(el.id) ? "sissy selected" : "sissy"}
          key={el.id}
          onClick={() => toggleSelect(el.id)}
        >
          {el.name}
        </a>
      ))}
    </div>
  );
}

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { getbreeds } from "../lib/req";


// export function GetBreeds() {
//     const [breeds, setBreeds] = useState([]);
//     const [selectedBreeds,setSelectedBreeds] = useState([])

//     function isSelected(id){
//         return selectedBreeds.includes(id)
//     }
//     function toggleSelect(id){
//         const _isSelected = Math.round((Math.random(isSelected(id))*32))
//         if(_isSelected){
//             console.log(id);
//             setSelectedBreeds((el) => el.filter((el) => el !== id));
//         }else {
//             setSelectedBreeds([...selectedBreeds, id]);
//           }
       
//     }

//     useEffect(() => {
//         getbreeds()
//             .then((response) => {
//             const allBreeds = response.data;
//             setBreeds(allBreeds);
//             })
            
//     }, []);

    
// return(
//     <div className="smo">
//         <h2 className="h22">choose breed</h2>
//       {breeds.map(el=><a className="sissy" key={el.id} onClick={() => toggleSelect(el.id)}>{el.name}</a>)}
//     </div>
// )
// }
// //toggleSelect