import React, {FC} from "react";
import cn from "classnames";
import {
    DragNDropType,
    FormItemProps,
    FormItemType,
    GridFromItemProps,
    IFormItem,
    PreviewFormItemProps,
    ToolsFormItemProps
} from "./IFormItem";
import "./FormPlaceholder.scss"
import {useDrop} from "react-dnd";
import {useGrid} from "../grid/FormGridContext";

export class FormPlaceholder implements IFormItem {
    GridComponent: React.FC<GridFromItemProps> = GridComponent;
    PreviewComponent: React.FC<PreviewFormItemProps> = PreviewComponent;
    ToolsComponent: React.FC<ToolsFormItemProps> = ToolsComponent;
    type: FormItemType = FormItemType.Placeholder;
}

const ToolsComponent: FC<FormItemProps> = (props: FormItemProps) => {
    throw new Error("Unavailable in tools context");
}

const PreviewComponent: FC<PreviewFormItemProps> = (props: PreviewFormItemProps) => {
    return <span></span>;
}

const GridComponent: FC<GridFromItemProps> = (props: GridFromItemProps) => {
    const grid = useGrid();
    const [,drop] = useDrop<{itemType: FormItemType}>(
        () => ({
            accept: DragNDropType.FormItem,
            canDrop: () => true,
            drop: ({itemType}) => {
                grid.addItem(props.x, props.y, itemType);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [grid],
    )

    return <div ref={drop} className={cn("FormPlaceholder", "FormItem", props.className)}/>
}