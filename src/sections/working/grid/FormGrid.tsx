import React from "react";
import "./FormGrid.scss";
import {useGrid} from "../../../common/grid/FormGridContext";

export function FormGrid() {
    const grid = useGrid();
    let row = 0;
    let col = -1;
    const columnsInRow = grid.columns;
    return <div className="FormGrid" style={{
        gridTemplateColumns: `repeat(${grid.columns}, 1fr)`
    }}>
        {grid.items.map((item, index) => {
            col++;
            if (col === columnsInRow) {
                col = 0;
                row++;
            }
            return <item.GridComponent key={index} x={col} y={row}/>
        })}
    </div>
}