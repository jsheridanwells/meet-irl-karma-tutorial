(function(){
    angular.module('api.pokemon', [])
        .factory('Pokemon', function($http) {

            const API = 'http://pokeapi.co/api/v2/pokemon/';

            var Pokemon = {};

            Pokemon.findByName = (name) => {
                return $http.get(`${API}${name}`)
                    .then(res => res.data)
                    .catch(res => res.data);                
            };
            

            return Pokemon;
        });
}())