import {MyCard} from "./MyCard";
import {Col} from "react-bootstrap";
import {Section} from "./Section";

function School(props) {
    const {school} = props;
    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <MyCard title={school.name}>
                <div>subscriptions:</div>
                {school.numberOfPersons}
            </MyCard>
        </Col>
    );
}
export function Schools(props) {
    const {schools, title} = props
    return (
        <Section title={title}>
            {schools.map(c => <School key={c.name} school={c}/>)}
        </Section>
    );
}