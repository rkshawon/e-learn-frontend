"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md  py-10 px-4 rounded-xl flex flex-col gap-5 w-3/12 min-w-[250px] max-w-[350px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Log In</Button>
      </div>
    </div>
  );
};

export default Login;
