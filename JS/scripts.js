function executeProgram() {

  var pokemonRepository = (function () {
    var repository = [
      {name: 'Bulbasaur', height: 7, types: ['grass', ' poison'] },
      {name: 'Charmander', height: 6, types: ['fire'] },
      {name: 'Squirtle', height: 5, types: ['water'] }
    ];

    function add(repository) {
      repository.push(repository);
    }

    function getAll() {
      return repository;
    }

    return {
      add: add,
      getAll: getAll
    };
  })();

  pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height >= 7) {
      document.write(pokemon.name + ' (<i>height:</i> ' + pokemon.height + ' - “Wow, that’s big!” - , <i>type:</i> ' + pokemon.types + ') ' + '<br>');
    } else {
      document.write(pokemon.name + ' (<i>height:</i> ' + pokemon.height + ', <i>type:</i> ' + pokemon.types + ') ' + '<br>');
    }
  });

}
executeProgram();
