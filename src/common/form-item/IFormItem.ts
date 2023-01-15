import React from "react";

export interface FormItemProps {
    className?: string;
}

export type GridFromItemProps = FormItemProps;
export type ToolsFormItemProps = FormItemProps;
export type PreviewFormItemProps = FormItemProps;

export interface IFormItem {
    GridComponent: React.FC<GridFromItemProps>;
    ToolsComponent: React.FC<ToolsFormItemProps>;
    PreviewComponent: React.FC<PreviewFormItemProps>;
    type: FormItemType;
}

export enum FormItemType {
    "Checkbox",
    "TextInput",
    "NumberInput",
    "Label",
    "Submit",
    "Placeholder"
}

export enum DragNDropType {
    FormItem = "FromItem",
}