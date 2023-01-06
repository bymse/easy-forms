import React from 'react';
import "./App.scss";
import {WorkingSection} from "./sections/working/WorkingSection";
import {ToolsSection} from "./sections/tools/ToolsSection";

export function App() {
    return <main className="App">
        <div className="ToolsSectionWrapper">
            <ToolsSection/>
        </div>
        <div className="WorkingSectionWrapper">
            <WorkingSection/>
        </div>
    </main>

}