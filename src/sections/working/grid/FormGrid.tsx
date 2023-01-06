import React from "react";
import "./FormGrid.scss";
import {useGrid} from "../../../common/grid/FormGridContext";
import {IFormGrid} from "../../../common/grid/FormGrid";

export function FormGrid() {
    const grid: IFormGrid = useGrid();
    return <div className="FormGrid" style={{
        gridTemplateColumns: `repeat(${grid.columns}, 1fr)`
    }}>
        {grid.items.map((item, index) => {
            return <item.ReactComponent key={index} className="FormGridItem"/>
        })}
    </div>
}