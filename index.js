const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, attribute)
{
    return drivers.filter((drivers) => drivers. toLowerCase().includes(attribute.toLowerCase()));

}

function fuzzyMatch(drivers, attribute)
{
    return drivers.filter((drivers) => drivers. toLowerCase().includes (0,attribute.length ===attribute.toLowerCase)); 
}

function matchName(drivers,attribute)
{
    return drivers.filter((driver) => driver.name===attribute);
}