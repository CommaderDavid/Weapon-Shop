import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewWeaponForm(props) {
    function handleNewWeaponFormSubmission(event) {
        event.preventDefault();
        props.onNewWeaponCreation({ name: event.target.name.value, type: event.target.type.value, cost: event.target.cost.value, production: event.target.production.value, id: v4() })
    }

    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleNewWeaponFormSubmission}
                buttonText="Place Order" />
        </React.Fragment>
    )
}

NewWeaponForm.propsTypes = {
    onNewWeaponCreation: PropTypes.func
};

export default NewWeaponForm;