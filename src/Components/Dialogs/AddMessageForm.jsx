import React from "react"
import { maxLengthCreator, required } from "../../utils/validators"
import { Textarea } from "../Common/FormsControls"
const { Field, reduxForm } = require("redux-form")

const maxLength50 = maxLengthCreator(50)


const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" 
            validate={[required, maxLength50]} /> 
        </div>
        <div>
            <button>Add Message</button>
        </div>
    </form>
    )
}

export const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm)