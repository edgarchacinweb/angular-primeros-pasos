import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public lastRemoved?: string;
  public heroNames: string[] = ['Spider-man', 'Hulk', 'Thor', 'Iron Man', 'Black Widow'];

  removeLastHero(): void {
    this.lastRemoved = this.heroNames.pop();
  }
}
