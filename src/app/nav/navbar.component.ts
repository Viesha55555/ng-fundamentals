import { Component } from "@angular/core";
import { EventService, ISession } from "../events";
import { AuthService } from "../user/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px}
        @media (max-width: 1200px) {#searchForm {display: none}}
        li > a.active {color: #F97924}
    `]
})

export class NavBarComponent{
    searchTerm: string = "";
    foundSessions!: ISession[];

    constructor(public auth:AuthService, private eventService:EventService){
        
    }

    searchSessions(searchTerm: any){
        console.log('in nav bar searchSessions method')
        this.eventService.searchSessions(searchTerm).subscribe(
            (sessions: any) => {
                this.foundSessions =sessions;
            }
        );
        console.log(this.foundSessions)
    }

    ngOnInit(){
        this.auth.IsAuthenticated;
        console.log('value is:' + this.auth.IsAuthenticated())
    }
}

