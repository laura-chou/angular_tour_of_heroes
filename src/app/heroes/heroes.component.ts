import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports:[NgFor, HeroDetailComponent]
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero!: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}