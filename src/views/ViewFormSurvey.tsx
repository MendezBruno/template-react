import * as React from "react";
import {IPropsViewFormSurvey} from "../models/Interfaces/IPropsViewFormSurvey";
import {Form, IFields, required, isEmail, maxLength} from "../components/Form";
import {Field} from "../components/Field";





export class ViewFormSurvey extends React.Component {

    fields: IFields = {
        name: {
            id: "name",
            label: "Name",
            validation: { rule: required }
        },
        email: {
            id: "email",
            label: "Email",
            validation: { rule: isEmail }
        },
        reason: {
            id: "reason",
            label: "Reason",
            editor: "dropdown",
            options: ["", "Marketing", "Support", "Feedback", "Jobs"],
            validation: { rule: required }
        },
        notes: {
            id: "notes",
            label: "Notes",
            editor: "multilinetextbox",
            validation: { rule: maxLength, args: 1000 }
        }
    };

    render() {
       return  (
               <div>
                    <h2>Formulario de Carga de Campaña</h2>
                    <p> Complete los campos marcados como obligatorios para configurar el inicio de la campaña </p>
                    <Form
                        action={'http://theAction'}
                        fields={this.fields}
                        render={() => (
                            <React.Fragment>
                                <Field{...this.fields.name}/>
                                <Field{...this.fields.email}/>
                                <Field{...this.fields.reason}/>
                                <Field{...this.fields.notes}/>
                            </React.Fragment>
                        )}

                    />
               </div>


        );
    }


}
