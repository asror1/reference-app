import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Character {
  name: string;
  realName: string;
  abilities: string[];
  affiliation: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  default: Character = {
    name: 'Default Name',
    realName: 'Default Real Name',
    abilities: ['Default Ability 1', 'Default Ability 2'],
    affiliation: 'Default',
  };
  batman: Character = this.default;
  wonderWoman: Character = this.default;
  joker: Character = this.default;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const getApiEndpoint = (character: string) =>
      new URL(`http://localhost:3000/data/${character}`).toString();

    this.http
      .get<Character>(getApiEndpoint('Batman'))
      .subscribe((data: Character) => {
        this.batman = data;
      });
    this.http
      .get<Character>(getApiEndpoint('Wonder Woman'))
      .subscribe((data: Character) => {
        this.wonderWoman = data;
      });
    this.http
      .get<Character>(getApiEndpoint('The Joker'))
      .subscribe((data: Character) => {
        this.joker = data;
      });
  }
}
