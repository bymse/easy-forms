import React from "react";
import {FormItemProps, IFormItem} from "../IFormItem";
import cn from "classnames";
import {FormItemComponentBase} from "../FormItemComponentBase";

export class NumberInputFormItem implements IFormItem {
    public static readonly type = "NumberInputFormItem";
    Component: React.FC<FormItemProps> = NumberInputFormItemComponent;
}

export const NumberInputFormItemComponent: React.FC<FormItemProps> = (props: FormItemProps) => {
    return <FormItemComponentBase className={cn(props.className, "FormInput")} type={NumberInputFormItem.type}>
        <input
            disabled={props.disabled}
            type="number"
            placeholder="Number input"
        />
    </FormItemComponentBase>
}