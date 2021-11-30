import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <input
                    type='text'
                    name='name'
                    placeholder='Weapon Name' />
                <input
                    type='text'
                    name='type'
                    placeholder='Weapon Type' />
                <input
                    type='text'
                    name='cost'
                    placeholder='Weapon Creation Cost' />
                <input
                    type='number'
                    name='production'
                    placeholder='Current Queue of Weapon' />
                <textarea
                    name='description'
                    placeholder='Weapon Description' />
                <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    )
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;