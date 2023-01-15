import React, {createContext, PropsWithChildren, useContext, useMemo, useState} from "react";
import {FormGrid} from "./FormGrid";

interface IFormGridContext {
    formGrid: FormGrid;
}

const FormGridContext = createContext<IFormGridContext>({
    formGrid: null!
});

export const useGrid = (): FormGrid => useContext(FormGridContext).formGrid;

export const FormGridContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [updateKey, setUpdateKey] = useState(0);
    const grid = useMemo<FormGrid>(
        () => new FormGrid(() => setUpdateKey(e => e + 1)),
        [setUpdateKey]
    );

    return <FormGridContext.Provider value={{formGrid: grid}}>
        {children}
    </FormGridContext.Provider>
}