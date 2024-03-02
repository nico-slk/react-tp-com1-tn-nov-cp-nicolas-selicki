import { FaSearch } from 'react-icons/fa';
import './search.css';

export const Search = ({ handleSearch }) => {

  return (
    <div className='search-container'>
      <input type="text" className='search-bar' placeholder='Buscar contacto' onChange={handleSearch} />
      <FaSearch />
    </div>
  );
};
