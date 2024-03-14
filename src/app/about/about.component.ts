import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
@Input() isVisible : boolean = true;


  title = 'SecondAngular';
  name = 'Akshay';
  surName = 'Patil';
  email = 'akshaypatil2004@gmail.com';
  Location='GravityClasses';
  backgroundColor = '#759116';

  changeDetail(){
    this.name="Hell";
    this.surName="Spark";
    this.backgroundColor = '#bf1029';
    this.email = "pff";
    this.Location="Inferno"
    this.backgroundColor = '#bf1029';
  }

}
