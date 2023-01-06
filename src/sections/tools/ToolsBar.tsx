import React, {PropsWithChildren} from "react";
import "./ToolsBar.scss";
import {TextInputFormItemComponent} from "../../common/grid/inputs/TextInput";
import {NumberInputFormItemComponent} from "../../common/grid/inputs/NumberInput";
import {CheckboxFormItemComponent} from "../../common/grid/inputs/Checkbox";
import {SubmitFormItemComponent} from "../../common/grid/inputs/Submit";

export function ToolsBar() {
    return <section className="ToolsBar">
        <Section title="Inputs">
            <TextInputFormItemComponent disabled={true} mode="tools" className="ToolsItem"/>
            <NumberInputFormItemComponent disabled={true} mode="tools" className="ToolsItem"/>
            <CheckboxFormItemComponent disabled={true} mode="tools" className="ToolsItem"/>
            <SubmitFormItemComponent disabled={true} mode="tools" className="ToolsItem"/>
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