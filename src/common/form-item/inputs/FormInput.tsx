import React, {HTMLInputTypeAttribute, useState} from "react";
import {
    FormItemProps,
    FormItemType,
    GridFromItemProps,
    IFormItem,
    PreviewFormItemProps,
    ToolsFormItemProps
} from "../IFormItem";
import cn from "classnames";
import {FormItemComponentBase} from "../FormItemComponentBase";
import {capitalizeFirstLetter} from "../../utils";

export class FormInput implements IFormItem {
    constructor(type: HTMLInputTypeAttribute) {
        this.type = type === "text" ? FormItemType.TextInput : FormItemType.NumberInput;
        this.GridComponent = this.ToolsComponent = p => <DisabledComponent inputType={type} itemType={this.type} {...p} />;
        this.PreviewComponent = p => <InputPreviewComponent inputType={type} itemType={this.type} {...p} />;
    }

    GridComponent: React.FC<GridFromItemProps>;
    ToolsComponent: React.FC<ToolsFormItemProps>;
    PreviewComponent: React.FC<PreviewFormItemProps>;
    type: FormItemType;
}

type Props = FormItemProps & { inputType: HTMLInputTypeAttribute, itemType: FormItemType };

const DisabledComponent: React.FC<Props> = (props: Props) => {
    return <FormItemComponentBase type={props.itemType}>
        <Input className={props.className} value="" disabled {...props}/>
    </FormItemComponentBase>
}

const InputPreviewComponent: React.FC<Props> = (props: Props) => {
    const [value, setValue] = useState("");
    return <Input disabled={false} value={value} onValueChange={e => setValue(e)} {...props}/>
}

const Input = React.forwardRef<HTMLInputElement, {
    disabled: boolean;
    value: string;
    onValueChange?: (val: string) => void,
    className?: string,
    inputType?: HTMLInputTypeAttribute
}>((props, ref) => {
    return <input
        ref={ref}
        disabled={props.disabled}
        type={props.inputType}
        placeholder={capitalizeFirstLetter(`${props.inputType} input`)}
        onChange={e => props.onValueChange && props.onValueChange(e.target.value)}
        value={props.value}
        className={cn(props.className, "FormItem")}
    />
});