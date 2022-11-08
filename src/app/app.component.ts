import { Component, ElementRef} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  
  constructor(private elementRef: ElementRef, private router: Router) {}
  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = '#263d42';
  }


  gotoSpots(){
    this.router.navigate(['/spots'])
  }
  gotoMap(){
    this.router.navigate(['/spots-map'])
  }

  gotoNewSpot(){
    this.router.navigate(['/spot/add'])
  }

}