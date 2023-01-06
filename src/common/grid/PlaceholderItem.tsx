import React, {FC} from "react";
import cn from "classnames";
import {FormItemProps, IFormItem} from "./IFormItem";
import "./PlaceholderItem.scss"

export class PlaceholderItem implements IFormItem {
    Component: React.FC<FormItemProps> = PlaceholderItemComponent;
}

const PlaceholderItemComponent : FC<FormItemProps> = (props: FormItemProps) => {
    return <div className={cn("PlaceholderItem", "FormItem", props.className)}/>
}