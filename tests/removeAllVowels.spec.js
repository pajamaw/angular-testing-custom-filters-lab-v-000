describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		removeAllVowels = $filter('removeAllVowels');
	}));

  it('should remove all vowels in a string', 
    function(){

      expect(removeAllVowels('test')).toEqual('tst');
      expect(removeAllVowels('aeiouW')).toEqual('W');
      expect(removeAllVowels('y not y?')).toEqual('y nt y?');
    });
});
