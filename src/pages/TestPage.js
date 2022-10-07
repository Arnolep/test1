import * as PropTypes from "prop-types";
import {Persons, Persons2} from "../components/Persons";
import {isFromCity} from "../utilities/person_utilities";
Persons2.propTypes = {title: PropTypes.string};

export function TestPage(props) {
    const {persons} = props;
    return (
        <div className="mx-3">
            <Persons2 persons={persons} title="alle personen"/>
            <Persons persons={isFromCity(persons,"ANT")} title="Antwerpen"/>

        </div>
    )
}