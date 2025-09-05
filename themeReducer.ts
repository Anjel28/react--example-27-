import { ThemeState, ThemeAction } from './type';

export const themeReducer = (state: ThemeState, action: ThemeAction):  ThemeState => {
    switch (action.type){
        case 'TOGGLE_THEME':
            return {theme: state.theme === 'Light' ? 'dark' : 'Light'};
            default:
                return state;
    }
}
