import * as PropTypes from "prop-types";
import {Persons, Persons2} from "../components/Persons";
import {AreFromSchool, isFromSchool, schoolsFromPersonData} from "../utilities/person_utilities";
import {Schools} from "../components/Schools";
Persons2.propTypes = {title: PropTypes.string};

export function TestPage(props) {
    const {persons} = props;
    return (
        <div className="mx-3">
            <Persons2 persons={persons} title="alle personen"/>
            <Persons persons={isFromSchool(persons,"ANT")} title="Antwerpen"/>
            <Schools schools={schoolsFromPersonData(persons)} title="alle scholen"/>
        </div>
    )
}