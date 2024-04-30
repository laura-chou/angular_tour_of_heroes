import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports:[NgFor, RouterLink]
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}