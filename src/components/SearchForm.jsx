import { useState } from 'react';

export const SearchForm = ({onSearch}) => {
    const [value, setValue] = useState('');
    
    const handelSubmit = (e) => {
        e.preventDefault() 

        const query = value.trim();
    if (query) {
      onSearch(value);
      setValue('');
    }
    }

  return (
    <>
      <form onSubmit={handelSubmit}>
              <input type="text" value={value}  onChange={(e) => setValue(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
    </>
  );
};
