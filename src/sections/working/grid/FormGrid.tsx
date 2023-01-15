import React from "react";
import "./FormGrid.scss";
import {useGrid} from "../../../common/grid/FormGridContext";

export function FormGrid() {
    const grid = useGrid();
    return <div className="FormGrid" style={{
        gridTemplateColumns: `repeat(${grid.columns}, 1fr)`
    }}>
        {grid.items.map((item, index) => {
            return <item.GridComponent key={index}/>
        })}
    </div>
}