import React,{useState} from 'react';
import Item from './Item';
import axios from 'axios';

//use state to create values


const INITIAL_STATE ={
    term: '',
};
const Search = () => {
    const [values,setValues] = useState(INITIAL_STATE);
    const [responseData,setResponseData] = useState({}); //the search object from the aapi init value will be empty
    
    const handleChange = (event) => {
            const {name,value}=event.target; //from the event get name and value
            setValues((presvState) => ({...presvState, [name] : value })); //set the values from pre values  and the name will get the value
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        //console.log(values.term);
        runSearch(values.term); //for search
    };
    const runSearch =(term) => {
        axios
          .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=
          ${term}`)  //pay attention is the letter next to digit 1
          .then((response) => {
              console.log(response);
                setResponseData(response.data); //data is what axios returns
          })
          .catch((error) => {
                console.log('Error',error);
          })
          .finally(()=> {
            setValues(INITIAL_STATE);
          });  //we will clear the input
         
    };
    return (
        <>
        <form onSubmit={handleSubmit} className='search'>
            <input 
            onChange={handleChange} //to manage changes
            type ='text'
            name='term'
            className='search-input'
            placeholder='Search..'
            value={values.term}
            
            />
        
        </form>
        {/*we extract from the site the id kind and object name*/}
        {/*uppercent to check if object exist adn extract it with item component*/}
        {responseData.drinks &&
            responseData.drinks.map((item) => (
            <Item key={item.idDrink}
                  item={item} />
        ))}
        </>
    );
};

export default Search
