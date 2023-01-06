import React, {Key} from "react";

export interface FormItemProps {
    className?: string | undefined;
    mode: "grid" | "tools";
    disabled?: boolean | undefined;
}

export interface IFormItem {
    Component: React.FC<FormItemProps>;
}