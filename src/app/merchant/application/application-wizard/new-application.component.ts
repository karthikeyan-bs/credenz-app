import { Component, OnInit } from '@angular/core';
export class User {
    public name!: string;
    public email!: string;
    public password!: string;
    public hobbies!: string;
}
@Component({
    selector: 'new-application',
    templateUrl: './new-application.component.html',
    //styleUrls: ['./app.component.scss'],
})
export class NewApplicationComponent implements OnInit {
    ngOnInit(): void {
    }
}