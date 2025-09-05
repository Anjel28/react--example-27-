import  React, { createContext, useReducer, ReactNode } from 'react';
import { themeReducer } from './themeReducer';
import { ThemeState, ThemeAction } from './type';

interface ThemeContextProps{
 state: ThemeState;
 dispatch: React.Dispatch<ThemeAction>;
}

const initialState: ThemeState = { theme: 'Light'};

export const ThemeContext = createContext<ThemeContextProps>({
    state: initialState,
    dispatch: ()  => null,
})

export const ThemeProvider = ({ children }: {children: ReactNode }) => {
const [state, dispatch ] = useReducer(themeReducer, initialState);

return(
    <ThemeContext.Provider value={{state, dispatch}}>
        {children}
    </ThemeContext.Provider>
)
}