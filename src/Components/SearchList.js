import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CandidateList from './CandidateList';

const SearchList = (props) => {
  const [input, setInput] = useState('');
 const [candidateListDefault, setCandidateListDefault] = useState();
  const [candidateList, setCandidateList] = useState();

  const fetchData = async () => {
    return await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/name')
      .then(response => response.json())
      .then(data => {
         setCandidateList(data) 
        setCandidateListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = candidateListDefault.filter(candidate => {
      return candidate.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCandidateList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Candidate List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <CandidateList candidateList={candidateList}/>
    </>
   );
}

export default SearchList
