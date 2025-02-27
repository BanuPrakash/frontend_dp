import { CheckboxComponentProps } from "../components/checkbox/CheckboxComponent";
import { InputComponentProps } from "../components/input/InputComponent";
import CheckboxBuilder from "./CheckboxBuilder";
import FormElement from "./FormElement";
import InputBuilder from "./InputBuilder";

export default class FormBuilder {
    elements: FormElement[];
    constructor(){
        this.elements = [];
    }
    input(props: InputComponentProps) {
        this.elements.push(new InputBuilder(props));
        return this;
    }

    checkbox(props: CheckboxComponentProps) {
        this.elements.push(new CheckboxBuilder(props));
        return this;
    }
    build() {
        return this.elements.map(elem => elem.component)
    }
}