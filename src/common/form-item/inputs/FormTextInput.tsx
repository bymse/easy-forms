import React, {useState} from "react";
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

export class FormTextInput implements IFormItem {
    GridComponent: React.FC<GridFromItemProps> = DisabledComponent;
    PreviewComponent: React.FC<PreviewFormItemProps> = PreviewComponent;
    ToolsComponent: React.FC<ToolsFormItemProps> = DisabledComponent;
    type: FormItemType = FormItemType.TextInput;
}

const DisabledComponent: React.FC<FormItemProps> = (props: FormItemProps) => {
    return <FormItemComponentBase type={FormItemType.NumberInput}>
        <Input className={props.className} value="" disabled/>
    </FormItemComponentBase>
}

const PreviewComponent: React.FC<PreviewFormItemProps> = (props: PreviewFormItemProps) => {
    const [value, setValue] = useState<string>("");
    return <Input disabled={false} value={value} onValueChange={e => setValue(e)}/>
}

const Input = (props: { disabled: boolean; value: string; onValueChange?: (val: string) => void, className?: string }) => {
    return <input
        disabled={props.disabled}
        type="text"
        placeholder="Number input"
        onChange={e => props.onValueChange && props.onValueChange(e.target.value)}
        value={props.value}
        className={cn(props.className, "FormItem")}
    />
}