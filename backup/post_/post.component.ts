import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-post',
    template: '<div>POST {{this.postId}}</div>'
})
export class PostComponent {
    postId: string = ''
    constructor(
        private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.postId = params['id']
        })
    }
}
