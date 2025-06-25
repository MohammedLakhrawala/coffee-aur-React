import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [characterallowed, setCharacterallowed] = useState(false);
  const [password, setPassword] = useState("");
  const inputRef = useRef(null)

  useEffect(() => {
     passwordGenerator()
  },[length,numberallowed,characterallowed])

  const handleCopy = () => {
    const input = inputRef.current
    input.select()
    input.setSelectionRange(0,45)
    navigator.clipboard.writeText(input.value)
  }

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str += "1234567890"
    if(characterallowed) str += "!@#$%^&*()_*/"
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [numberallowed, characterallowed, setPassword, length])

  return (
    <>
      <h1 className='flex flex-row justify-center items-center text-white font-semibold text-2xl'>Password Generator</h1>
      <div className='bg-gray-800 w-full max-w-lg rounded-lg p-10 mx-auto py-11 px-12 text-white'>
        <div className='flex justify-center'>
          <input 
          ref={inputRef}
          placeholder='Password' 
          type="text"
          value={password} 
          readOnly  
          className='gap-5 py-3 rounded-md px-4 w-full outline-none text-orange-500 font-semibold text-xl '/>
          <button onClick={handleCopy} className='p-2 bg-blue-500 px-3 rounded-md'>
            copy
          </button>

        </div>
        <div className='flex gap-2 items-center justify-center flex-row py-5'>
          <input 
          type="range"
          min={8}
          max={50}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
           
           <input type="checkbox"
           defaultChecked={numberallowed}
           onChange={() => setNumberallowed((prev) => !prev)}
           />
           <label>Number</label>
           <input type="checkbox"
           defaultChecked={characterallowed}
           onChange={() => setCharacterallowed((prev) => !prev)}
           />
           <label>Character</label>
        </div>
      </div>
    </>
  )
}

export default App
