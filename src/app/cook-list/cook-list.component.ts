import { Component, Input, OnInit } from '@angular/core';
import { ICook } from '../interfaces/ICook';

@Component({
    selector: 'app-cook-list',
    templateUrl: './cook-list.component.html',
    styleUrls: ['./cook-list.component.scss'],
})
export class CookListComponent implements OnInit {
    @Input() cook?: ICook;
    stars: number[] = [];

    constructor() {}

    ngOnInit(): void {
        this.normalizeRating();
    }

    normalizeRating() {
        if (this.cook?.rating) {
            let rating = Math.round(this.cook.rating);
            console.log(this.cook.rating + '-->' + rating);
            for (var i = 1; i <= rating; i++) {
                this.stars.push(1);
            }
            for (var i = rating; i <= 4; i++) {
                this.stars.push(0);
            }
            console.log(this.stars);
        }
    }
}
