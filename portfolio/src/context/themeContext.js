import { createContext } from "react";
import { ThemeProvider } from "styled-components";

const themeContext = createContext();

const themeColors = {
    black: '#05070A',
    yellow: '#FFCC06',
    orange: '#FEA906',
    gray: '#7A7E7C',
    lightGray: '#F0F2F4',
    white: '#FDFDFD'
}

const ThemeContextProvider = ({children}) => {
    return (
        <themeContext.Provider value={''}>
            <ThemeProvider theme={themeColors}>
                {children}
            </ThemeProvider>
        </themeContext.Provider>
    );
}

export {themeContext, ThemeContextProvider}