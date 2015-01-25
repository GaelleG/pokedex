/* ========================================================================== */
/* =============== %%%%% %%%%% %  %% %%%%% %%%%  %%%%% %    % =============== */
/* =============== %   % %   % % %%  %     %  %% %      %  %  =============== */
/* =============== %%%%% %   % %%%   %%%%  %   % %%%%    %%   =============== */
/* =============== %     %   % % %%  %     %  %% %      %  %  =============== */
/* =============== %     %%%%% %  %% %%%%% %%%%  %%%%% %    % =============== */
/* ========================================================================== */

(function () {

  // ===========================================================================
  //                   MODEL, COLLECTION, VIEW AND APPLICATION
  // ===========================================================================

  // ------------------------------------------------------------- POKEMON.MODEL
  var Pokemon = Backbone.Model.extend({
    url: '',
    defaults: function () {
      return {
        number: 0,
        name: {
          jap: "",
          en: "",
          fr: ""
        }
      };
    }
  });

  // -------------------------------------------------------------- POKEMON.VIEW
  var PokemonView = Backbone.View.extend({
    tagName: "div",
    className: "pokemon",
    template: _.template(
      "<%= number %>" +
      " " +
      "<%= name.en %>"),
    events: {

    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  // --------------------------------------------------- POKEMON_LIST.COLLECTION
  var PokemonList = Backbone.Collection.extend({
    model: Pokemon
  });

  // --------------------------------------------------------- POKEMON_LIST.VIEW
  var PokemonListView = Backbone.View.extend({
    el: $("#pokemon-list"),
    render: function () {
      this.collection.forEach(this.addOne, this);
    },
    addOne: function (pokemon) {
      var pokemonView = new PokemonView({model: pokemon});
      this.el.appendChild(pokemonView.render().el);
    }
  });

  // ===========================================================================
  //                                 HERE WE GO
  // ===========================================================================

  var pokemonsMock = [
    {
      name: {
        jap: "Pikachu",
        en: "Pikachu",
        fr: "Pikachu"
      },
      number: 25
    },{
      name: {
        jap: "Fushigidane",
        en: "Bulbasaur",
        fr: "Bulbizarre"
      },
      number: 1
    },{
      name: {
        jap: "Digda",
        en: "Diglett",
        fr: "Taupiqueur"
      },
      number: 50
    },{
      name: {
        jap: "Nidorina",
        en: "Nidorina",
        fr: "Nidorina"
      },
      number: 30
    }
  ];
  
  var pokemonList = new PokemonList();
  for (var i in pokemonsMock) {
    pokemonList.add(new Pokemon(pokemonsMock[i]));
  }

  var pokemonListView = new PokemonListView({collection: pokemonList});
  pokemonListView.render();
  
})();