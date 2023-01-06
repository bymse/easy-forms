import React, {Key} from "react";

export interface FormGridItemProps {
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
}

export interface IFormGridItem {
    ReactComponent: React.FC<FormGridItemProps>;
    x: number;
    y: number;
}