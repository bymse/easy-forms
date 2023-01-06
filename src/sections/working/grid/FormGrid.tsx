import React from "react";
import "./FormGrid.scss";
import "../../../common/grid/FormItem.scss"
import {useGrid} from "../../../common/grid/FormGridContext";

export function FormGrid() {
    const grid = useGrid();
    return <div className="FormGrid" style={{
        gridTemplateColumns: `repeat(${grid.columns}, 1fr)`
    }}>
        {grid.items.map((item, index) => {
            return <item.Component mode="grid" key={index} />
        })}
    </div>
}