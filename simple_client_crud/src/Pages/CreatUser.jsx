import { useEffect, useState } from "react";


const CreatUser = () => {
const [users, setUsers] =useState([])

useEffect(()=>{
    fetch('http://localhost:8000/api/v1/get_user')
    .then(res=>res.json())
    .then(x=>setUsers(x))

},[])

    return (
    
      

        <div className="bg-slate-500  p-5">
            <h2 className="text-center text-white py-4 font-semibold text-2xl">All user</h2>
           {
             users.data&& users.data.map((user,i) =><h2 key={i}>{user.userName}</h2>)
            
           }
        </div>
        
    );
};

export default CreatUser;