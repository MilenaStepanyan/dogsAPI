import axios from "axios";
import { useEffect, useState } from "react";
import { getdogs, getdogsByBreed } from "../lib/req";

export function GetDogs({ selectedBreed }) {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    if (selectedBreed) {
      getdogsByBreed(selectedBreed).then((rsp) => setDogs(rsp.data));
    } else {
      getdogs().then((rsp) => setDogs(rsp.data));
    }
  }, [selectedBreed]);

  return (
    <div className="divo">
      <h1 className="h1s">DOGS</h1>
      <div className="sm">
        {dogs.map((el) => (
          <img src={el.url} key={el.id} className="smt" alt={el.id} />
        ))}
      </div>
    </div>
  );
}



    // import axios from "axios";
    // import { useEffect, useState } from "react";
    // import { getdogs } from "../lib/req";


    // export function GetDogs() {
    //     const [dogs,setdogs] = useState([])
    // useEffect(()=>{
    // getdogs( )
    // .then(rsp=>setdogs(rsp.data))
    // },[])
    // return(
    //     <div className="divo">
    //         <h1 className="h1s">DOGS</h1>
    //         <div className="sm">
    //             {dogs.map(el=><img  src={el.url} key={el.id} className="smt" ></img>)}
    //         </div>
    //     </div>
    
    // )
    // }



    //className="w-[500px]"

    // const [users,setUsers]=useState([])
    // useEffect(()=>{
    //      fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(rsp=>rsp.json())
    //     .then(rsp=>setUsers(rsp))
    // },[])

    // return(
    //     <div>
    //         <ul> {users.map(el=><li key={el.id}>{el.name}</li>)}</ul>

    //     </div>
    // )npm i axios