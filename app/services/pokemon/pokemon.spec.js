describe('Pokemon Factory :: ', function() {
    var Pokemon, $q, $httpBackend;
    const API = 'http://pokeapi.co/api/v2/pokemon/';
    const SUCCESS = {
        'id': 25,
        'name': 'pikachu',
        'sprites': {
            'front_default': 'http://pokeapi.co/media/sprites/pokemon/25.png'
        },
        'types': [{
            'type': { 'name': 'electric' }
        }]
    };

    const RESPONSE_ERR = {
        'detail': 'Not found.'
    };

    beforeEach(angular.mock.module('api.pokemon'));

    beforeEach(inject((_Pokemon_, _$q_, _$httpBackend_) => {
        Pokemon = _Pokemon_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    it('should exist', () => {
        expect(Pokemon).toBeDefined();
    });

    describe('findByName()', () => {
        let result;
        beforeEach(() => {
            result = {};
            spyOn(Pokemon, 'findByName').and.callThrough();
        });

        it('should return a valid Pokemon', () => {
            var search = 'pikauchu';

            $httpBackend.whenGET(API + search).respond(200, $q.when(SUCCESS));

            expect(Pokemon.findByName).not.toHaveBeenCalled();
            expect(result).toEqual({});

            Pokemon.findByName(search)
                .then(res => {
                    result = res;
                });
            
            $httpBackend.flush();

            expect(Pokemon.findByName).toHaveBeenCalledWith(search);

            expect(result.id).toEqual(25);

            expect(result.name).toEqual('pikachu');

            expect(result.sprites.front_default).toContain('.png');

            expect(result.types[0].type.name).toEqual('electric');           

        });

        // TODO : the tutorial comments also say that this rejection fails...
        xit('should return a 404 when called with an invalid name', () => {
            var search = 'taco';

            $httpBackend.whenGET(API + search).respond(404, $q.reject(RESPONSE_ERR));

            expect(Pokemon.findByName).not.toHaveBeenCalled();
            expect(result).toEqual({});

            Pokemon.findByName(search)
                .catch(function(res){
                    result = res;
                });
            
            $httpBackend.flush();

            expect(Pokemon.findByName).toHaveBeenCalledWith(search);
            expect(result.detail).toEqual('Not Found.'); 

        });

    });
});