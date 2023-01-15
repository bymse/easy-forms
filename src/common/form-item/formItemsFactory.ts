import {FormItemType, IFormItem} from "./IFormItem";
import {FormCheckbox} from "./inputs/FormCheckbox";
import {FormLabel} from "./labels/FormLabel";
import {FormSubmit} from "./inputs/FormSubmit";
import {FormInput} from "./inputs/FormInput";

export const formItemsFactory = (type: FormItemType): IFormItem => {
    switch (type) {
        case FormItemType.Checkbox:
            return new FormCheckbox();
        case FormItemType.Label:
            return new FormLabel();
        case FormItemType.NumberInput:
            return new FormInput("number");
        case FormItemType.TextInput:
            return new FormInput("text");
        case FormItemType.Submit:
            return new FormSubmit();
        case FormItemType.Placeholder:
        default:
            throw new Error(`${type} creation not supported`);
    }
}