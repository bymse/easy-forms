import React from "react";
import {FormItemProps, IFormItem} from "../IFormItem";
import cn from "classnames";

export class TextInputFormItem implements IFormItem {
    Component: React.FC<FormItemProps> = TextInputFormItemComponent;
}

export const TextInputFormItemComponent: React.FC<FormItemProps> = (props: FormItemProps) => {
    return <input
        className={cn(props.className, "FormItem", "FormInput")}
        style={props.style}
        disabled={props.disabled}
        type="text"
        placeholder="Text input"
    />
}