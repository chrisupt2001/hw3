import { useState, useEffect } from 'react'

const SearchBar = ({search, setSearch, maxLength, setMaxLength, Ascend, Descend}) => {
    
    const [AnD, setAnD] = useState(false);
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }

    const handleClick = () => {

        if (AnD == false)
        {
            Descend();
            setAnD(true);
        }
        else
        {
            Ascend();
            setAnD(false);
        }

        
    }

    return <>
        <label htmlFor="search">Search Query</label>
        <input type="text" name="search" onChange={searchHandler} value={search} />
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
        <button onClick={handleClick} type="button" >Ascend/Descend</button>
    </>
}

export default SearchBar;