import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/services/recipes.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-recipe-form',
    templateUrl: './new-recipe-form.component.html',
    styleUrls: ['./new-recipe-form.component.scss'],
})
export class NewRecipeFormComponent implements OnInit {
    newRecipeName: string = '';
    newRecipeDescription: string = '';

    constructor(private recipesService: RecipesService) {}

    ngOnInit(): void {}

    createRecipe() {
        if (this.newRecipeName != '' && this.newRecipeDescription != '') {
            this.recipesService.addRecipe(
                this.newRecipeName,
                this.newRecipeDescription
            );
            this.newRecipeDescription = '';
            this.newRecipeName = '';
        } else {
            alert('need to fill name and description');
        }
    }
}
