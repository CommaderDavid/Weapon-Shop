import React from "react";
import Weapon from "./Weapon";
import PropTypes from "prop-types";

function WeaponList(props) {
    return (
        <React.Fragment>
            <hr />
            {props.weaponList.map((weapon) =>
                <Weapon
                    name={weapon.name}
                    type={weapon.type}
                    cost={weapon.cost}
                    production={weapon.production}
                    description={weapon.description}
                    id={weapon.id}
                    key={weapon.id} />
            )}
        </React.Fragment>
    );
}

WeaponList.propsTypes = {
    weaponList: PropTypes.array,
    production: PropTypes.number
};

export default WeaponList;