import React from "react";
import {FormItemProps, IFormItem} from "../IFormItem";
import cn from "classnames";
import {FormItemComponentBase} from "../FormItemComponentBase";

export enum LabelMode {
    Regular,
    Bold,
    Italic,
    Underline
}

export class LabelFormItem implements IFormItem {
    public static getName(mode: LabelMode) {
        return `${LabelFormItem}${mode}`;
    }

    Component: React.FC<FormItemProps>;

    public mode: LabelMode;

    constructor(mode: LabelMode) {
        this.mode = mode;
        this.Component = labelComponentProvider(mode);
    }
}

export const labelComponentProvider = (mode: LabelMode, text?: string): React.FC<FormItemProps> => {
    return (props: FormItemProps) => <FormLabelFormItemComponent labelMode={mode} text={text} {...props} />;
}

type FormLabelFormItemComponentProps = FormItemProps & { labelMode: LabelMode, text?: string };

const FormLabelFormItemComponent: React.FC<FormLabelFormItemComponentProps> = (props: FormLabelFormItemComponentProps) => {
    if (props.mode === "tools") {
        return <FormItemComponentBase
            type={LabelFormItem.getName(props.labelMode)}
            className={cn(props.className, "FormLabel")}
        >
            <span style={getStyle(props.labelMode)}>
                {props.text}
            </span>
        </FormItemComponentBase>
    }

    return <input/>
}

const getStyle = (mode: LabelMode) => {
    switch (mode) {
        case LabelMode.Regular:
            return {};
        case LabelMode.Bold:
            return {fontWeight: "bold"};
        case LabelMode.Italic:
            return {fontStyle: "italic"};
        case LabelMode.Underline:
            return {textDecoration: "underline"};
    }
}