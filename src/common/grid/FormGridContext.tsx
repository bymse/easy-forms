import React, {createContext, PropsWithChildren, useContext, useMemo} from "react";
import {FormGrid} from "./FormGrid";

interface IFormGridContext {
    formGrid: FormGrid;
}

const FormGridContext = createContext<IFormGridContext>({
    formGrid: new FormGrid()
});

export const useGrid = (): FormGrid => useContext(FormGridContext).formGrid;

export const FormGridContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const grid = useMemo<FormGrid>(() => new FormGrid(), []);
    
    return <FormGridContext.Provider value={{formGrid: grid}}>
        {children}
    </FormGridContext.Provider>
}