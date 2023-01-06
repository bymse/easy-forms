import React from "react";
import {FormItemProps, IFormItem} from "../IFormItem";
import cn from "classnames";
import {FormItemComponentBase} from "../FormItemComponentBase";

export class TextInputFormItem implements IFormItem {
    Component: React.FC<FormItemProps> = TextInputFormItemComponent;
    public static readonly type: string = "TextInputFormItem";
}

export const TextInputFormItemComponent: React.FC<FormItemProps> = (props: FormItemProps) => {
    return <FormItemComponentBase className={cn(props.className, "FormInput")} type={TextInputFormItem.type}>
        <input
            disabled={props.disabled}
            type="text"
            placeholder="Text input"
        />
    </FormItemComponentBase>
}