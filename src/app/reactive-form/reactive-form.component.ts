import { HttpClient }                         from '@angular/common/http';
import { Component }                          from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector            : 'app-reactive-form',
  templateUrl         : './reactive-form.component.html',
  styleUrl            : './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm            : FormGroup;
  userList            : any;
  userData            : any;
  isIdExists          : any;

  constructor(private fb: FormBuilder, private http: HttpClient){
    this.userForm = this.fb.group({
      username        : ['', Validators.required],
      password        : ['', Validators.required]
    })

    this.http.get('http://localhost:3000/users').subscribe (res => {
      this.userList   = res;

  })  
}
editUser(id:any){

  this.http.get('http://localhost:3000/users/'+ id).subscribe (res => {
      console.log(res);
      this.userData   = res;
      this.isIdExists = this.userData.id;
      this.userForm.patchValue({
        username      : this.userData.username,
        password      : this.userData.password
        
        
      })
      
    })  


}

deleteUser(id:any){
  this.http.delete('http://localhost:3000/users/'+ id).subscribe (res => {
    alert('User Deleted!!!');
      console.log(res);
      location.reload();
     
      
    })  




}

  submitData(){
    if(this.isIdExists){
      const data = {
        id            : this.isIdExists,
        username      : this.userForm.controls['username'].value,
        password      : this.userForm.controls['password'].value
      }
  
      
      this.http.put('http://localhost:3000/users/' +this.isIdExists, data).subscribe (res => {
        alert('User data changed!!!');
      location.reload();
      })

    }else{
    const data = {
      username        : this.userForm.controls['username'].value,
      password        : this.userForm.controls['password'].value
    }

    
    this.http.post('http://localhost:3000/users', data).subscribe (res => {
      alert('Data inserted Successfully !!!');
    location.reload();
    })
    console.log(this.userForm.value);
  }
}

}
