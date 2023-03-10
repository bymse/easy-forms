import React from 'react';
import "./App.scss";
import {WorkingSection} from "./sections/working/WorkingSection";
import {FormGridContextProvider} from "./common/grid/FormGridContext";
import {ToolsBar} from "./sections/tools/ToolsBar";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

export function App() {
    return <main className="App">
        <FormGridContextProvider>
            <DndProvider backend={HTML5Backend}>
                <div className="ToolsBarWrapper">
                    <ToolsBar/>
                </div>
                <div className="WorkingSectionWrapper">
                    <WorkingSection/>
                </div>
            </DndProvider>
        </FormGridContextProvider>
    </main>

}