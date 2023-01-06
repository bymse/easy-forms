import React from "react";
import {FormItemProps, IFormItem} from "../IFormItem";
import cn from "classnames";
import "./Submit.scss"
import {FormItemComponentBase} from "../FormItemComponentBase";

export class SubmitFormItem implements IFormItem {
    Component: React.FC<FormItemProps> = SubmitFormItemComponent;
    public static readonly type: string = "SubmitFormItem";
}

export const SubmitFormItemComponent: React.FC<FormItemProps> = (props: FormItemProps) => {
    return <FormItemComponentBase
        className={cn(props.className, "FormInput", "SubmitFormItem")}
        type={SubmitFormItem.type}
    >
        <input
            type="submit"
        />
    </FormItemComponentBase>
}