import React, {ReactNode} from "react";
import {useDrag} from "react-dnd";
import {DragNDropType, FormItemType} from "./IFormItem";
import "./FormItem.scss"
import cn from "classnames";

type Props = {type: FormItemType, children: ReactNode};

export function FormItemComponentBase(props: Props) {
    const [{isDragging}, drag] = useDrag(() => ({
        collect: monitor => ({isDragging: monitor.isDragging()}),
        type: DragNDropType.FormItem,
        item: {itemType: props.type}
    }));
    
    const inner = React.cloneElement(props.children as React.ReactElement,
        {
            className: cn(getInitialClassName(props.children), isDragging && "Dragging"),
            ref: drag
        }
    );
    
    return <>{inner}</>;
}

function getInitialClassName(node: ReactNode) {
    return (node as any).props?.className
}