import React from "react";
import {FormItemType, GridFromItemProps, IFormItem, PreviewFormItemProps, ToolsFormItemProps} from "../IFormItem";
import cn from "classnames";
import {FormItemComponentBase} from "../FormItemComponentBase";
import "./FormLabel.scss"

export class FormLabel implements IFormItem {
    GridComponent: React.FC<GridFromItemProps> = GridComponent;
    PreviewComponent: React.FC<PreviewFormItemProps> = PreviewComponent;
    ToolsComponent: React.FC<ToolsFormItemProps> = ToolsComponent;
    type: FormItemType = FormItemType.Label;
}

const ToolsComponent: React.FC<ToolsFormItemProps> = (props: ToolsFormItemProps) => {
    return <FormItemComponentBase type={FormItemType.Label}>
        <span className={cn(props.className, "FormItem", "FormLabel")}>Label</span>
    </FormItemComponentBase>;
}

const GridComponent: React.FC<GridFromItemProps> = (props: GridFromItemProps) => {
    const [text, setText] = React.useState("");
    return <FormItemComponentBase type={FormItemType.Label}>
        <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Label"
            className={cn(props.className, "FormItem")}
        />
    </FormItemComponentBase>
}
type PreviewProps = PreviewFormItemProps & {text?: string};

const PreviewComponent: React.FC<PreviewProps> = (props: PreviewProps) => {
    return <span className={cn(props.className, "FormItem")}>
        {props.text || "Label"}
    </span>
}