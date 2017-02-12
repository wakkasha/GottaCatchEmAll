namespace GottaCatchEmAll.Controllers {
    let pokemons = [
        { id: 1, image: "http://img4.wikia.nocookie.net/__cb20140328190757/pokemon/images/thumb/2/21/001Bulbasaur.png/200px-001Bulbasaur.png", name: 'Bulbasar', type: 'Grass/Piosion', evolvesInto: 'Ivysaur', image2:'http://vignette4.wikia.nocookie.net/pokemon/images/7/73/002Ivysaur.png/revision/latest/scale-to-width-down/200?cb=20140328190847'},
        { id: 2, image: "http://img4.wikia.nocookie.net/__cb20140724195345/pokemon/images/thumb/7/73/004Charmander.png/200px-004Charmander.png", name: 'Charmander', type: 'Fire', evolvesInto: 'Charmeleon', image2:'http://vignette4.wikia.nocookie.net/pokemon/images/4/4a/005Charmeleon.png/revision/latest/scale-to-width-down/200?cb=20140328191309'},
        { id: 3, image: "http://img1.wikia.nocookie.net/__cb20140328191525/pokemon/images/thumb/3/39/007Squirtle.png/200px-007Squirtle.png", name: 'Squirtle', type: 'Water', evolvesInto: 'Wartortle', image2: 'http://vignette1.wikia.nocookie.net/pokemon/images/0/0c/008Wartortle.png/revision/latest/scale-to-width-down/200?cb=20140328191553' },
        { id: 4, image: 'http://vignette2.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest?cb=20140328192412', name: 'Pikachu', type: 'Electric', evolvesInto: 'Raichu', image2:'http://vignette2.wikia.nocookie.net/pokemon/images/8/88/026Raichu.png/revision/latest/scale-to-width-down/200?cb=20140328192425' },
        { id: 5, image: 'http://vignette4.wikia.nocookie.net/pokemon/images/6/60/037Vulpix.png/revision/latest?cb=20140328193205', name: 'Vulpix', type: 'Fire', evolvesInto: 'Ninetails', image2:'http://vignette2.wikia.nocookie.net/pokemon/images/8/88/026Raichu.png/revision/latest/scale-to-width-down/200?cb=20140328192425' }

    ];

    export class MasterController {
        public pokemons;

        constructor() {
            this.pokemons = pokemons;
        }
    }

    export class DetailsController {
        public pokemon;

        constructor(private $stateParams: ng.ui.IStateParamsService) {
            this.pokemon = pokemons.filter((m) => { return m.id == $stateParams['id'] })[0];

        }
    }

    export class AboutController {
        public message: string = 'Hello';

    }

}