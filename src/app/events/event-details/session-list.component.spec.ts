import { SessionListComponent } from ".";
import { ISession } from "..";

describe('SessionListComponent', ()=>{
    let component: SessionListComponent;
    let mockAuthService: any, mockVoterService: any;

    beforeEach(()=>{
        component = new SessionListComponent(mockAuthService, mockVoterService); { 

        }
    })

    describe('ngOnChanges', ()=>{
        it('should filter sessions correctly', ()=>{
            component.sessions = <ISession[]>[
                {name: 'sessions 1', level: 'intermediate'},
                {name: 'sessions 2', level: 'beginner'},
                {name: 'sessions 3', level: 'intermediate'},
        ];
        component.filterBy = 'intermediate';
        component.sortBy = 'name';
        component.eventId = 3;

        component.ngOnChanges();

        expect(component.visibleSessions.length).toBe(2);
        })
    })
})