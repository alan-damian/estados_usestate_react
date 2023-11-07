import { useState } from "react"


const NameList = ()=>{
    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddName = () => {
        if (inputValue.trim() !== '') {
            setNames([...names, inputValue]);
            setInputValue('');
        }
    };
    
    
    return(
        <div>
            <h2>Name List</h2>

            
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleAddName}>
                Add name to list
            </button>

            <ul>
                {names.map((name, index)=>(
                    <li key={index}>{name}</li>
                ))}
            </ul>
        


        </div>
    );
};

export default NameList;