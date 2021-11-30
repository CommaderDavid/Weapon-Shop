import React from "react";
import PropTypes from "prop-types";

function Weapon(props) {
    const totalProduction = props.production > 0 ? props.production : "No Orders"
    return (
        <React.Fragment>
            <div onClick={() => props.whenWeaponClicked(props.id)}>
                <h3>{props.name} - {totalProduction}</h3>
                <p>{props.cost}</p>
            </div>
            <button onClick={() => props.onClickingSell(props.id)}>Sell</button>
            <button onClick={() => props.onClickingOrder(props.id)}>Order</button>
        </React.Fragment>
    );
}

Weapon.propsTypes = {
    name: PropTypes.string.isRequired,
    production: PropTypes.number.isRequired,
    cost: PropTypes.string,
    id: PropTypes.string
};

export default Weapon;