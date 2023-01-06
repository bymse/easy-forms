import React from "react";
import {FormItemProps, IFormItem} from "../IFormItem";
import cn from "classnames";
import "./Submit.scss"

export class SubmitFormItem implements IFormItem {
    Component: React.FC<FormItemProps> = SubmitFormItemComponent;
}

export const SubmitFormItemComponent: React.FC<FormItemProps> = (props: FormItemProps) => {
    return <input
        className={cn(props.className, "FormItem", "FormInput", "SubmitFormItem")}
        style={props.style}
        disabled={props.disabled}
        type="submit"
    />
}