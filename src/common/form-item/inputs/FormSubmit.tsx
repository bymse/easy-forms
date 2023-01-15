import React from "react";
import {
    FormItemType,
    GridFromItemProps,
    IFormItem,
    PreviewFormItemProps,
    ToolsFormItemProps
} from "../IFormItem";
import cn from "classnames";
import "./FormSubmit.scss"
import {FormItemComponentBase} from "../FormItemComponentBase";

export class FormSubmit implements IFormItem {
    GridComponent: React.FC<GridFromItemProps> = DisabledComponent;
    ToolsComponent: React.FC<ToolsFormItemProps> = DisabledComponent;
    PreviewComponent: React.FC<PreviewFormItemProps> = PreviewComponent;
    type: FormItemType = FormItemType.Submit;
}

const DisabledComponent: React.FC<ToolsFormItemProps> = (props: ToolsFormItemProps) => {
    return <FormItemComponentBase type={FormItemType.Submit}>
        <Submit className={props.className} disabled={false}/>
    </FormItemComponentBase>
}

const PreviewComponent: React.FC<PreviewFormItemProps> = (props: PreviewFormItemProps) => {
    return <Submit className={props.className} disabled={false}/>
}

const Submit = React.forwardRef<HTMLButtonElement, { className?: string, disabled: boolean }>((props, ref) => {
    return <button disabled={props.disabled} ref={ref} type="submit"
                   className={cn(props.className, "FormItem", "FormSubmit")}
    >
        Submit
    </button>
});