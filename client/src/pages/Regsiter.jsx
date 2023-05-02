import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Regsiter() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

function submitForm(e){
e.preventDefault();
const data = new FormData(e.target);
const name = data.get("name");
const email= data.get("email");
const password = data.get("password");

 axios.post("http://localhost:3000/register",{name,email,password})
 .then((res)=>{
  console.log(res.data);
 })
 .catch((err)=>{
  console.log(err);
 })
 setUser({name:"",email:"",password:""});
}

 
  return (
    <div className="px-8">
      <h1 className="text-center text-4xl mb-4">Register</h1>
      <form onSubmit={submitForm} className=" text-center gap-2 flex flex-col p-2  max-w-md m-auto border border-gray">
        <input
        name="email"
       value={user.email}
       onChange={(e)=>setUser({...user,email:e.target.value})}
          className="p-1 border border-gray rounded-md"
          type="email"
          placeholder="email"
        ></input>
        <input
        name="name"
        value={user.name}
       onChange={(e)=>setUser({...user,name:e.target.value})}
          className="p-1 border border-gray rounded-md"
          type="text"
          placeholder="name"
        ></input>
        <input
        value={user.password}
       onChange={(e)=>setUser({...user,password:e.target.value})}
        name="password"
          className="p-1 border border-gray rounded-md"
          type="password"
          placeholder="password"
        ></input>
        <button className="p-1 border border-primary bg-primary rounded-md text-white">
        Register
        </button>
        <div>
          <span>Already have an account?</span>
          <Link className="ml-2 underline text-black" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Regsiter;
