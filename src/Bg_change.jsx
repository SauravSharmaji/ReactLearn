import { useState } from "react";

const BgChange = () => {
    const [color, setColor] = useState('green');
    
    return (
        <div className="box w-full flex shadow-sm justify-center items-center min-h-screen rounded-2xl"  style={{ backgroundColor: color }}>
            <div className="button-box shadow-sm p-2 rounded-xl m-2 bg-amber-50 flex justify-evenly text-amber-50">
                <button onClick={() => setColor('Red')} className="shadow-sm p-2 rounded-xl m-2 " style={{ backgroundColor: "Red" }}>Red</button>
                <button onClick={() => setColor('black')} className="shadow-sm p-2 rounded-xl m-2 " style={{ backgroundColor: "Black" }}>Black</button>
                <button onClick={() => setColor('blue')} className="shadow-sm p-2 rounded-xl m-2 " style={{ backgroundColor: "blue" }}>Yellow</button>
                <button onClick={() => setColor('orange')} className="shadow-sm p-2 rounded-xl m-2 " style={{ backgroundColor: "orange" }}>White</button>
            </div>
        </div>
    );
};

export default BgChange;
