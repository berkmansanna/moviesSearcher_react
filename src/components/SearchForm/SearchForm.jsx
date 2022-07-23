import { useState } from 'react';
import { Input, Button,} from './SearchForm.styled';

export const SearchForm = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handelSubmit = e => {
    e.preventDefault();

    const query = value.trim();
    if (query) {
      onSearch(value);
      setValue('');
    }
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <Input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
    </>
  );
};
