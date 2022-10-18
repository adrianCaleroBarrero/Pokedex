import { iOnePokemon } from '../interfaces/interfaces';

export class LocalStorage {
  setItem(pokemon: iOnePokemon) {
    localStorage.setItem('favorite', JSON.stringify(pokemon));
  }

  getItem() {
    const item = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite') as string)
      : [];
    return item;
  }

  removeItem() {
    localStorage.removeItem('favorite');
  }
}
