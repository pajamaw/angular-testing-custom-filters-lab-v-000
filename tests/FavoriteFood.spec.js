describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

    var mockedPersons = [{
      name: 'John',
      favoriteFood: 'pie'  
    }, {
      name: 'Dumb',
      favoriteFood: 'dairy'
    }, {
      name: 'Gwen',
      favoriteFood: 'pie'
    }];

  it('should filter a list of persons based on the favorite food inputted', function(){

      var results = $filter('favoriteFood')(mockedPersons, 'dairy');

      expect(results.length).toEqual(1);
      expect(results[0].name).toEqual('Dumb');
    });

  it('should return 2 persons based on the favorite food inputted', function(){

    var results = $filter('favoriteFood')(mockedPersons, 'pie');

    expect(results.length).toEqual(2);
    expect(results[1].name).toEqual('Gwen');
  });

});
