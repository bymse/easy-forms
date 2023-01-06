import React, {CSSProperties, PropsWithChildren} from "react";
import {useDrag} from "react-dnd";
import {NumberInputFormItem} from "./inputs/NumberInput";
import cn from "classnames";

type BaseProps = PropsWithChildren & { type: string, className: string, style?: CSSProperties }

export const FormItemComponentBase: React.FC<BaseProps> = (props) => {
    const [{isDragging}, drag] = useDrag(() => ({
        collect: monitor => ({isDragging: monitor.isDragging()}),
        type: props.type
    }));

    const opacity = {opacity: isDragging ? 0.5 : 1};
    const style = props.style ? {opacity, ...props.style} : opacity;
    const inner = React.cloneElement(props.children as React.ReactElement,
        {
            className: cn("FormItem", props.className),
            style: style,
            ref: drag
        }
    );
    return <>{inner}</>
}