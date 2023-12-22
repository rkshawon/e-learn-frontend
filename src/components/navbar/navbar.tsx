"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

export function Navbar() {
  const router = useRouter();

  return (
    <div className="sticky top-0 flex items-center justify-center z-10 ">
      <div className="flex items-center justify-around gap-20 w-[80%] bg-white backdrop-blur-md bg-opacity-80 shadow-md mt-5 py-3 px-4 rounded-xl ">
        <div className="flex items-center gap-4">
          <h1>E Learn</h1>
          {/* <p>Caategorry</p> */}
        </div>
        <Input variant="search" placeholder="Search..." />
        <div className="flex items-center gap-4 ">
          <Button onClick={() => router.push("/auth/login")}>Log in</Button>
          <Button onClick={() => router.push("/auth/signin")}>Sign in</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
