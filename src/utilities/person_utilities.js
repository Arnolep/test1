function numberOfPersonsForCity(persons, city) {
    //return persons.reduce((counter, p) => counter + (p.city === city && 1), 0);
    //no need for reduce!!!!
    return persons.filter(p => p.city === city).length;
}
function numberOfPersonsForSchool(persons, city) {
    return persons.filter(p => p.school === city).length;
}
export function isFromSchool(persons,school){
return persons.filter(p => p.school === school);
}
export function AreFromSchool(persons,school){
    return persons.filter(p => p.school === school);
}
export function schoolsFromPersonData(persons) {
    const uniqueSchoolNames = [...new Set(persons.map(p => p.school))];
    return uniqueSchoolNames.map(s => ({
        name: s,
        numberOfPersons: numberOfPersonsForSchool(persons, s)
    }) );
}
export function citiesFromPersonData(persons) {
    const uniqueCityNames = [...new Set(persons.map(p => p.city))];
    return uniqueCityNames.map(c => ({
        name: c,
        numberOfPersons: numberOfPersonsForCity(persons, c)
    }));
}