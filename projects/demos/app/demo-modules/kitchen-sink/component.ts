import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef ,
  TemplateRef,
  ContentChild
} from '@angular/core';

import { Router } from '@angular/router';

import {
  startOfDay,
  endOfDay, 
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal, NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

declare const make_capture: any;
declare const html2canvas: any;
declare const fireb_app: any;
declare const fireb_storage: any;
declare const fireb_auth: any;
declare const fireb_data: any;
declare const sweet_alert: any;
declare const alert_field: any;








const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['styles.css'],
  templateUrl: 'template.html'
})
export class DemoComponent {
  
  isloged :Boolean = false;
  
  

  constructor(private modal: NgbModal,private router: Router) {

    let status = localStorage.getItem('isloged')
    
    if(status==="true"){
      this.isloged = true
    }else{
      this.isloged = false
    }



  }
  
  
  calendar(){
    this.router.navigate(['/kitchen-sink']); 
}
inscrire(){
  this.router.navigate(['/inscrire']);
}

resultat(){
  this.router.navigate(['/resultat']);
}
login(){
  this.router.navigate(['/login']);
}
afficheResu(){
  this.router.navigate(['/afficheResultat'])
}

afficheFormation(){
  this.router.navigate(['formation'])
}


  logout(){
    this.isloged=false
    localStorage.setItem('isloged',"false")
    
  }
  
  
  
      

  
  
  
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
   
  ];

  activeDayIsOpen: boolean = true;
  field : string;
  s : string;

  setfield(x:string){this.field=x; 
    this.nActivate(Event);   }       
  setS(y:string){this.s=y; 
    this.nActivate(Event);   }  
  
  
  nActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
    
}

   save() {
    if(this.field==null||this.s==null){
      sweet_alert();
      alert_field();}
      
    else{html2canvas();
        fireb_app();
        fireb_auth();
        fireb_storage(); 
        fireb_data();
        sweet_alert();
        make_capture(this.field,this.s);
      } 
     }
    

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }
  
 
 





  
  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }


 
}
