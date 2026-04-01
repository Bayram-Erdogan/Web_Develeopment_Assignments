'use strict';

let users = [
  {profile: {name: 'Ahmet'}},
  {profile: null},
  {},
  {profile: {name: 'Ayşe'}},
  null,
];

let newArray = users.map((user) => user?.profile?.name || 'Guest');
console.log(newArray); // Output: ["Ahmet", "Guest", "Guest", "Ayşe", "Guest"]
