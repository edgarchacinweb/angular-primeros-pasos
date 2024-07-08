import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuidv4(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuidv4(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuidv4(),
    name: 'Vegeta',
    power: 18000
  }];

  addCharacter(character: Character): void {
    this.characters.push({ ...character, id: uuidv4() });
    this.characters = this.characters.sort((a: Character, b: Character) => b.power - a.power);
  }

  deleteCharacterById(id: string): void {
    this.characters.splice(
      this.characters.findIndex((charactedId) => charactedId.id === id), 1
    );
  }

}
