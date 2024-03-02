import { IconContext } from 'react-icons';
import { FaSearch } from 'react-icons/fa';
import './search.css';

export const Search = ({ handleSearch }) => {

  return (
    <div className='search-container'>
      <input type="text" className='search-bar' placeholder='Buscar contacto' onChange={handleSearch} />
      <IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}>
        <div className='icon'>
          <FaSearch />
        </div>
      </IconContext.Provider>
    </div>
  );
};
