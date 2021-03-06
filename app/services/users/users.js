(function (){
    'use strict';

    var mockUsers = [
        {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane',
            pokemon: { name: 'blastoise' }
        },
        {
            id: '2',
            name: 'Bob',
            role: 'Developer',
            location: 'New York',
            twitter: 'billybob',
            pokemon: { name: 'growlithe' }
        },
        {
            id: '3',
            name: 'Jim',
            role: 'Developer',
            location: 'Chicago',
            twitter: 'jimbo',
            pokemon: { name: 'hitmonchan' }
        },
        {
            id: '4',
            name: 'Bill',
            role: 'Designer',
            location: 'LA',
            twitter: 'dabill',
            pokemon: { name: 'barney' }
        }
    ];

    var singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
    };

    angular.module('api.users', [])
        .factory('Users', function () {
            var Users = {};

            Users.all = function () {
                return mockUsers;
            };

            Users.findById = function (id) {
                return mockUsers.filter(user => user.id === id)[0];
            };

            return Users;
        });
})();