import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
    const [dark, setDark] = useState(false);

    return <ThemeContext.Provider value={{ dark, setDark }} {...props} />;
}

function useTheme() {
    return useContext(ThemeContext);
}

export default useTheme;
export { ThemeProvider };
