import { useState ,useCallback,useEffect,useRef} from "react";


const Password = ()=>{

const [length,setLenth] = useState(8);
const [number,setNumber] = useState(false);
const [characters,setCharacters] = useState(false);
const [Password,setPassword] = useState('');
const passwordref = useRef(null)
const passwordGenerator = useCallback(()=>{
    let pass = '';
    let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number) alphabets += '0123456789';
    if(characters) alphabets += '!@#$%^&*()_+-=[]{}|';
    for (let i = 1; i <= length; i++) {
       let char = Math.floor( Math.random()* alphabets.length +1)
        pass += alphabets.charAt(char);
        setPassword(pass)
    }
} , [length,number,characters,setPassword])

const passwodCopytoClip =  useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,99)
window.navigator.clipboard.writeText(Password)
},[Password])
useEffect(() => {passwordGenerator()},[length,characters,number,passwordGenerator])
return <>
<div className="box w-3xl p-5 rounded-2xl shadow-2xl bg-gray-400 m-auto">
    <h1 className="text-4xl text-white p-2">Password Generator</h1>
    <input 
    className="bg-white w-2xs p-2 text-2xl text-black  rounded-xl"
     type="text"
      value={Password}
       readOnly
        ref={passwordref}
        />
    <button className="bg-blue-600 p-3 rounded-xl " onClick={passwodCopytoClip}>Copy</button>
  <div className="">
<label htmlFor="length text-2xl">length : {length}</label>
<input 
  className="m-2" 
  type="range" 
  min={6} 
  max={99} 
  value={length} 
  onChange={(e) => setLenth(e.target.value)} 
  
/><label htmlFor="checkboxNumber">Number</label>
    <input 
     className="m-2 p-5 cursor-pointer "
      type="checkbox"
      defaultChecked={number}
      onClick={()=> {setNumber((prev) => !prev)}}
      id="checkboxNumber"
        />
 <label  className="m-2 p-2" htmlFor="checkboxSpecialcharacters">Special characters</label>
    <input  
    className="m-2 p-2 cursor-pointer "
    defaultChecked={characters}
     type="checkbox"
       id="checkboxSpecialcharacters" 
       onClick={()=> {setCharacters((prev) => !prev)}}
       
       />
    </div>
</div>

</>
} 
export default Password;