import React, {createContext, PropsWithChildren, useContext, useMemo} from "react";
import {FormGrid, IFormGrid} from "./FormGrid";

interface IFormGridContext {
    formGrid: IFormGrid;
}

const FormGridContext = createContext<IFormGridContext>({
    formGrid: new FormGrid()
});

export const useGrid = (): IFormGrid => useContext(FormGridContext).formGrid;

export const FormGridContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const grid = useMemo<FormGrid>(() => new FormGrid(), []);
    
    return <FormGridContext.Provider value={{formGrid: grid}}>
        {children}
    </FormGridContext.Provider>
}