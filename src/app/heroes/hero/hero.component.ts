import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.split(' ').reduce((prev: string, curr: string) =>
      prev + ' ' + curr[0].toUpperCase() + curr.substring(1).toLocaleLowerCase()
    , '');
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age} años`;
  }

  changeName(): void {
    this.name = 'spider man';
  }

  changeAge(): void {
    this.age = 17;
  }

  resetForm(): void {
    this.name = 'iron man'
    this.age = 45;
  }
}
