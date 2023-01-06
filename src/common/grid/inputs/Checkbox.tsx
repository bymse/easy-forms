import React from "react";
import {FormItemProps, IFormItem} from "../IFormItem";
import cn from "classnames";
import "./Checkbox.scss"
import {FormItemComponentBase} from "../FormItemComponentBase";

export class CheckboxFormItem implements IFormItem {
    Component: React.FC<FormItemProps> = CheckboxFormItemComponent;
    public static readonly type: string = "CheckboxFormItem";
}

export const CheckboxFormItemComponent: React.FC<FormItemProps> = (props: FormItemProps) => {
    const isTools = props.mode === "tools";
    const Input = <input
        className={cn(props.className, "FormItemCheckbox")}
        disabled={props.disabled}
        type="checkbox"
        placeholder="Checkbox"
    />;
    if (isTools) {
        return <FormItemComponentBase type={CheckboxFormItem.type}
                                      className={cn(props.className, "FormItem", "FormItemCheckboxTools")}
        >
            <div>
                {Input}
                <span>Checkbox</span>
            </div>
        </FormItemComponentBase>
    }

    return Input;
}