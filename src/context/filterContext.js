import { createContext, useContext } from 'react';

const FilterContext = createContext();

function FilterProvider(props) {
    return <FilterContext.Provider {...props} />;
}

function useFilter() {
    return useContext(FilterContext);
}

export default useFilter;
export { FilterProvider };
