import React from 'react';
import "./App.scss";
import {WorkingSection} from "./sections/working/WorkingSection";
import {FormGridContextProvider} from "./common/grid/FormGridContext";
import {ToolsBar} from "./sections/tools/ToolsBar";

export function App() {
    return <main className="App">
        <FormGridContextProvider>
            <div className="ToolsBarWrapper">
                <ToolsBar/>
            </div>
            <div className="WorkingSectionWrapper">
                <WorkingSection/>
            </div>
        </FormGridContextProvider>
    </main>

}