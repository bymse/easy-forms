import React, {useState} from "react";
import cn from "classnames";
import {
    FormItemType,
    GridFromItemProps,
    IFormItem,
    PreviewFormItemProps,
    ToolsFormItemProps
} from "../IFormItem";
import {FormItemComponentBase} from "../FormItemComponentBase";
import "./FormCheckbox.scss"

export class FormCheckbox implements IFormItem {
    GridComponent: React.FC<GridFromItemProps> = GridComponent;
    ToolsComponent: React.FC<ToolsFormItemProps> = ToolsComponent;
    PreviewComponent: React.FC<PreviewFormItemProps> = PreviewComponent;
    type: FormItemType = FormItemType.Checkbox;
}

const ToolsComponent: React.FC<ToolsFormItemProps> = (props: ToolsFormItemProps) => {
    return <FormItemComponentBase type={FormItemType.Checkbox}>
        <div className={cn(props.className, "FormItem", "FormCheckboxWithTitle")}>
            <Checkbox disabled={true} value={true}/>
            <span>Checkbox</span>
        </div>
    </FormItemComponentBase>;
}

const GridComponent: React.FC<GridFromItemProps> = (props: GridFromItemProps) => {
    return <FormItemComponentBase type={FormItemType.Checkbox}>
        <Checkbox disabled={true} value={true}/>
    </FormItemComponentBase>;
}

const PreviewComponent: React.FC<PreviewFormItemProps> = (props: PreviewFormItemProps) => {
    const [value, setValue] = useState(false);
    return <Checkbox disabled={false} value={value} onValueChange={v => setValue(v)}/>;
}
type Props = { disabled: boolean; value: boolean, onValueChange?: (val: boolean) => void };

const Checkbox = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
    return <input
        ref={ref}
        className="FormCheckbox"
        disabled={props.disabled}
        type="checkbox"
        onChange={e => props.onValueChange && props.onValueChange(e.target.checked)}
        checked={props.value}
    />;
});