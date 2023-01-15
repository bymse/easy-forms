import React, {PropsWithChildren, useMemo} from "react";
import "./ToolsBar.scss";
import {formItemsFactory} from "../../common/form-item/formItemsFactory";
import {FormItemType} from "../../common/form-item/IFormItem";

export function ToolsBar() {
    const inputItems = useMemo(() => [
        formItemsFactory(FormItemType.TextInput),
        formItemsFactory(FormItemType.Checkbox),
        formItemsFactory(FormItemType.NumberInput),
        formItemsFactory(FormItemType.Submit),
    ], []);
    
    const label = useMemo(() => formItemsFactory(FormItemType.Label), []);

    return <section className="ToolsBar">
        <Section title="Inputs">
            {inputItems.map(({ToolsComponent, type}) => <ToolsComponent key={type}/>)}
        </Section>
        <Section title="Labels">
            <label.ToolsComponent/>
        </Section>
    </section>
}

function Section({title, children}: PropsWithChildren<{ title: string }>) {
    return <div className="ToolsSectionWrapper">
        <div className="ToolsSection">
            {children}
        </div>
        <div className="ToolsSectionTitle">{title}</div>
    </div>
}