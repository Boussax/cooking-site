import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/services/recipes.service';
import { ICook } from '../interfaces/ICook';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cookList ?: Array<ICook>;
  searchKey : string = "";

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
      this.recipesService.getRecipes().subscribe((data) => {
          this.cookList=data;
      });
  }

  resetInput() {
    this.searchKey = '';
  }

}
