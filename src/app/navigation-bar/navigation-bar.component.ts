import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  links ?: string[];
  displayAddRecipe = false;

  constructor() { }

  ngOnInit(): void {
    this.links = ['Recipes', 'Seasonal Ingredients', 'another menu item', 'About Us'];
  }

  closeAddRecipe() {
      this.displayAddRecipe = false;
  }
}
