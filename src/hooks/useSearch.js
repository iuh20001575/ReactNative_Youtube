import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = (props) => {
    const [value, setValue] = useState('');

    return <SearchContext.Provider value={{ value, setValue }} {...props} />;
};

function useSearch() {
    return useContext(SearchContext);
}

export default useSearch;
export { SearchProvider };
