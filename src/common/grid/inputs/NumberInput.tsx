import React from "react";
import {FormItemProps, IFormItem} from "../IFormItem";
import cn from "classnames";

export class NumberInputFormItem implements IFormItem {
    Component: React.FC<FormItemProps> = NumberInputFormItemComponent;
}

export const NumberInputFormItemComponent: React.FC<FormItemProps> = (props: FormItemProps) => {
    return <input
        className={cn(props.className, "FormItem", "FormInput")}
        style={props.style}
        disabled={props.disabled}
        type="number"
        placeholder="Number input"
    />
}