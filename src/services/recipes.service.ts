import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICook } from 'src/app/interfaces/ICook';
import { mockCooks } from 'src/app/interfaces/mock-cooks';

@Injectable({
    providedIn: 'root',
})
export class RecipesService {
    recipesList: Array<ICook> = [];

    constructor() {
        this.recipesList = mockCooks;
    }

    getRecipes(): Observable<ICook[]> {
        return of(this.recipesList);
    }

    getOneRecipeById(id: number): ICook {
        for (let item of this.recipesList) {
            if (item.id == id) {
                return item;
            }
        }
        throw '404 not found';
    }

    addRecipe(name: string, description: string) {
        this.recipesList.push({
            name: name,
            description: description,
            imageURL:
                'https://picsum.photos/2' +
                Math.round(Math.random() * 99) +
                '/200',
            rating: Math.random() * 5,
        });
        this.getRecipes();
    }
}
