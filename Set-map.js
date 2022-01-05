//sets

let roles = new Set();
roles.add('admin')
    .add('editor')
    .add('subscriber');
    for (let role of roles) {
    console.log(role);
}
// for (let [key, value] of roles.entries()) {
//     console.log(key === value);
// }
// roles.forEach(role => console.log(role.toUpperCase()));
roles.forEach(
    function (role){
        console.log(role.toUpperCase());
    }
)

//maps

let john = {name: 'John Doe'},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'};

let userRoles = new Map();

console.log(userRoles);