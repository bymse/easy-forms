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

export class FormNumberInput implements IFormItem {
    GridComponent: React.FC<GridFromItemProps> = DisabledComponent;
    PreviewComponent: React.FC<PreviewFormItemProps> = PreviewComponent;
    ToolsComponent: React.FC<ToolsFormItemProps> = DisabledComponent;
    type: FormItemType = FormItemType.NumberInput;
}

const DisabledComponent: React.FC<FormItemProps> = (props: FormItemProps) => {
    return <FormItemComponentBase type={FormItemType.NumberInput}>
        <Input className={props.className} value={null} disabled/>
    </FormItemComponentBase>
}

const PreviewComponent: React.FC<PreviewFormItemProps> = (props: PreviewFormItemProps) => {
    const [value, setValue] = useState<number | null>(null);
    return <Input disabled={false} value={value} onValueChange={e => setValue(e)}/>
}

const Input = (props: { disabled: boolean; value: (number | null); onValueChange?: (val: number) => void, className?: string }) => {
    return <input
        disabled={props.disabled}
        type="number"
        placeholder="Number input"
        onChange={e => props.onValueChange && props.onValueChange(parseInt(e.target.value))}
        value={typeof props.value === "number" ? props.value : ""}
        className={cn(props.className, "FormItem")}
    />
}