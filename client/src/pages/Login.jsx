import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      setUser({
        email:"",
        password:""
      })
  }

  return (
    <div>
      <div className="px-8">
        <h1 className="text-center text-4xl mb-4">Login</h1>
        <form
          onSubmit={handleSubmit}
          className=" text-center gap-2 flex flex-col p-2  max-w-md m-auto border border-gray"
        >
          <input
            className="p-1 border border-gray rounded-md"
            type="email"
            name="email"
            value={user.email}
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <input
            className="p-1 border border-gray rounded-md"
            name="password"
            value={user.password}
            type="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
          <button className="p-1 border border-primary bg-primary rounded-md text-white">
            Login
          </button>
          <div>
            <span>Dont have account yet?</span>
            <Link className="ml-2 underline text-black" to="/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
