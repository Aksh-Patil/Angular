import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
@Input() isVisible : boolean = true;

<<<<<<< HEAD

=======
>>>>>>> 08ccba97b174f35c645d5a139e73d6226f9da3d0
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
