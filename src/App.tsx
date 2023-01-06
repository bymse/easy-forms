import React from 'react';
import "./App.scss";
import {WorkingSection} from "./sections/working/WorkingSection";
import {ToolsSection} from "./sections/tools/ToolsSection";
import {FormGridContextProvider} from "./common/grid/FormGridContext";

export function App() {
    return <main className="App">
        <FormGridContextProvider>
            <div className="ToolsSectionWrapper">
                <ToolsSection/>
            </div>
            <div className="WorkingSectionWrapper">
                <WorkingSection/>
            </div>
        </FormGridContextProvider>
    </main>

}