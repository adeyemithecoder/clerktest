import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className='w-full p-4 bg-slate-500 fixed flex justify-between items-center '>
      <div></div>
      <SignedIn>
        <UserButton afterSignOutUrl='/' />
      </SignedIn>

      <SignedOut>
        <button className='rounded-full p-2'>
          <Link href='/sign-in'>Login</Link>
        </button>
      </SignedOut>
    </div>
  );
};

export default Navbar;
