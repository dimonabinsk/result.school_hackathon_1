import { Module } from '../core/module';
import { random } from '../utils/utils';

export class PokemonModule extends Module {
  #POKEMON_URL;

  constructor(type, text) {
    super(type, text);

    this.#POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';
  }

  async getPokemonInfo(id) {
    const loadingHTML = document.createElement('p');
    loadingHTML.textContent = 'Загрузка...';
    document.body.append(loadingHTML);

    try {
      const response = await fetch(`${this.#POKEMON_URL}/${id}`);
  
      if (!response.ok) {
        throw new Error('При получении данных произошла ошибка!');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('error', error);
    } finally {
      loadingHTML.remove();
    }
  }

  createPokemonCard(pokemonInfo) {
    const pokemonCardHTML = document.createElement('div');
    pokemonCardHTML.classList.add('pokemon-card');

    const pokemonNameHTML = document.createElement('p');
    pokemonNameHTML.classList.add('pokemon-card__name');
    pokemonNameHTML.textContent = pokemonInfo.name;
    pokemonCardHTML.append(pokemonNameHTML);

    const pokemonImgHTML = document.createElement('img');
    pokemonImgHTML.classList.add('pokemon-card__img');
    pokemonImgHTML.src = pokemonInfo.imgSrc;
    pokemonCardHTML.append(pokemonImgHTML);

    const pokemonStatsHTML = document.createElement('div');
    pokemonStatsHTML.classList.add('pokemon-card__stats');
    
    const pokemonHpHTML = document.createElement('p');
    pokemonHpHTML.textContent = `HP: ${pokemonInfo.hp}`;
    pokemonStatsHTML.append(pokemonHpHTML);

    const pokemonAttackHTML = document.createElement('p');
    pokemonAttackHTML.textContent = `Attack: ${pokemonInfo.attack}`;
    pokemonStatsHTML.append(pokemonAttackHTML);

    const pokemonDefenseHTML = document.createElement('p');
    pokemonDefenseHTML.textContent = `Defense: ${pokemonInfo.defense}`;
    pokemonStatsHTML.append(pokemonDefenseHTML);

    pokemonCardHTML.append(pokemonStatsHTML);

    document.body.append(pokemonCardHTML);
  }

	async trigger() {
		this.clearBody();
    
    const pokemonInfo = await this.getPokemonInfo(random(1, 20));
    if (pokemonInfo) {
      this.createPokemonCard({
        name: pokemonInfo.name,
        imgSrc: pokemonInfo.sprites.front_default,
        hp: pokemonInfo.stats[0].base_stat,
        attack: pokemonInfo.stats[1].base_stat,
        defense: pokemonInfo.stats[2].base_stat,
      });
    } else {
      this.createPokemonCard({
        name: 'Неизвестный Покемон',
        imgSrc: '',
        hp: '??',
        attack: '??',
        defense: '??',
      });
    }
	}
}