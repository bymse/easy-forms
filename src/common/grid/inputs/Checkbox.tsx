import React from "react";
import {FormItemProps, IFormItem} from "../IFormItem";
import cn from "classnames";
import "./Checkbox.scss"

export class CheckboxFormItem implements IFormItem {
    Component: React.FC<FormItemProps> = CheckboxFormItemComponent;
}

export const CheckboxFormItemComponent: React.FC<FormItemProps> = (props: FormItemProps) => {
    const isTools = props.mode === "tools";
    const Input = <input
        className={cn(props.className, "FormItemCheckbox")}
        style={props.style}
        disabled={props.disabled}
        type="checkbox"
        placeholder="Checkbox"
    />;
    if (isTools) {
        return <div className={cn(props.className, "FormItem", "FormItemCheckboxTools")}>
            {Input}
            <span>Checkbox</span>
        </div>
    }
    
    return Input; 
}