import React from "react";

const Header = () => {
    const name = "Made By Saurav Sharma";
return <>

<header className="bg-green-200 w-full text-green-950">
    <nav className="flex justify-center">
        <ul className="flex justify-evenly p-5 m-5">
            <li className="p-2 m-2 text-2xl font-bold">Home</li>
            <li className="p-2 m-2 text-2xl font-bold">Blog</li>
            <li className="p-2 m-2 text-2xl font-bold">Service</li>
        </ul>
    </nav>
    <p>{name}</p>
</header>
</>
} 
export default Header;