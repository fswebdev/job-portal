import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"25rem",background:"#B1F1F9", border:"none", padding:"0.6rem"};
  return (
    <input 
     style={BarStyling}
     key="randomkey"
     value={keyword}
     placeholder={"search by candidate's name"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar
