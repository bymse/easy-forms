import React, {FC} from "react";
import cn from "classnames";
import {FormGridItemProps, IFormGridItem} from "./IFormGridItem";
import "./PlaceholderItem.scss"

export class PlaceholderItem implements IFormGridItem {
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    ReactComponent: React.FC<FormGridItemProps> = PlaceholderItemComponent;
    x: number;
    y: number;
}

const PlaceholderItemComponent : FC<FormGridItemProps> = (props: FormGridItemProps) => {
    return <div className={cn("PlaceholderItem", props.className)} style={props.style}>
        
    </div>
}