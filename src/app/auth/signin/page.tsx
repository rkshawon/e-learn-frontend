"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Implement your signup logic here
    console.log("Signing up with:", name, email, password);
  };

  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <div className="bg-[#fafafa] shadow-md  py-10 px-4 rounded-xl flex flex-col gap-5 w-3/12 min-w-[250px] max-w-[350px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button onClick={handleSignup}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Signin;
