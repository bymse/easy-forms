import {FormItemType, IFormItem} from "./IFormItem";
import {FormCheckbox} from "./inputs/FormCheckbox";
import {FormLabel} from "./labels/FormLabel";
import {FormNumberInput} from "./inputs/FormNumberInput";
import {FormTextInput} from "./inputs/FormTextInput";
import {FormSubmit} from "./inputs/FormSubmit";

export const formItemsFactory = (type: FormItemType): IFormItem => {
    switch (type) {
        case FormItemType.Checkbox:
            return new FormCheckbox();
        case FormItemType.Label:
            return new FormLabel();
        case FormItemType.NumberInput:
            return new FormNumberInput();
        case FormItemType.TextInput:
            return new FormTextInput();
        case FormItemType.Submit:
            return new FormSubmit();
        case FormItemType.Placeholder:
        default:
            throw new Error(`${type} creation not supported`);
    }
}

