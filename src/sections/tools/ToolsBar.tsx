import React, {PropsWithChildren} from "react";
import "./ToolsBar.scss";
import {TextInputFormItemComponent} from "../../common/grid/inputs/TextInput";
import {NumberInputFormItemComponent} from "../../common/grid/inputs/NumberInput";
import {CheckboxFormItemComponent} from "../../common/grid/inputs/Checkbox";
import {SubmitFormItemComponent} from "../../common/grid/inputs/Submit";
import {labelComponentProvider, LabelMode} from "../../common/grid/labels/FormLabel";

export function ToolsBar() {
    return <section className="ToolsBar">
        <Section title="Inputs">
            <TextInputFormItemComponent disabled={true} mode="tools" className="ToolsItem"/>
            <CheckboxFormItemComponent disabled={true} mode="tools" className="ToolsItem"/>
            <NumberInputFormItemComponent disabled={true} mode="tools" className="ToolsItem"/>
            <SubmitFormItemComponent disabled={true} mode="tools" className="ToolsItem"/>
        </Section>
        <Section title="Labels">
            <Labels/>
        </Section>
    </section>
}

function Labels() {
    const RegularLabel = labelComponentProvider(LabelMode.Regular, "Label");
    const BoldLabel = labelComponentProvider(LabelMode.Bold, "Bold label");
    const ItalicLabel = labelComponentProvider(LabelMode.Italic, "Italic label");
    const UnderlineLabel = labelComponentProvider(LabelMode.Underline, "Underline label");

    return <>
        <RegularLabel disabled={true} mode="tools" className="ToolsItem"/>
        <BoldLabel disabled={true} mode="tools" className="ToolsItem"/>
        <ItalicLabel disabled={true} mode="tools" className="ToolsItem"/>
        <UnderlineLabel disabled={true} mode="tools" className="ToolsItem"/>
    </>
}

function Section({title, children}: PropsWithChildren<{ title: string }>) {
    return <div className="ToolsSectionWrapper">
        <div className="ToolsSection">
            {children}
        </div>
        <div className="ToolsSectionTitle">{title}</div>
    </div>
}