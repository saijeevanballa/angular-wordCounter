import { Component, OnInit } from "@angular/core";
import { UsersService } from '../users.service';
import { stringify } from 'querystring';

@Component({
    selector: '[custom]',
    template: `
    <h1>Users data from server</h1>
    <button (click)= incrementPage()> + </button>
    <button (click)= decrementPage()> - </button>
    <button (click)= resetPagePage()> reset </button>
    <br/><br/>
    <ol>
        <div *ngFor="let user of users">
            <li>{{user.first_name}} {{user.last_name}}</li>
        </div>
    </ol>`,
    styles: [`h1 {
        color: red
    }`]
})
export class CustomComponent implements OnInit {
    public page: number = 1
    public users: any[] = []
    public sub
    constructor(private _userDate: UsersService) {

    }

    ngOnInit() {
        this.userData()
    }

    incrementPage() {
        this.page += this.page <= 2 ? 1 : 0
        this.userData()
    }
    decrementPage() {
        this.page -= 1
        this.userData()
    }
    resetPagePage() {
        this.page = 1
        this.users = []
        this.userData()
    }
    userData() {
        this.sub = this._userDate.getUsersList(this.page).subscribe((data: any) => {
            this.users = [...new Set(this.users.concat(data.data))]
        })
    }
}