import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
form:FormGroup
disableSelect:any=true
submitted = false;
validPattern="^[a-zA-Z0-9]{6}$"; // alphanumeric exact 10 letters
file;
  constructor(private formBuilder: FormBuilder, private Aut:AuthService) {
    this.formGroup()
   }

   formGroup(){
    this.form = this.formBuilder.group({
      Reimbursement: ['', Validators.required],
      Month: ['', Validators.required],
      Year: ['', [Validators.required]],
      Invoice: ['', [Validators.required, Validators.pattern(this.validPattern)]],
      Invoice_Date: ['', Validators.required],
      Small_Description: ['', Validators.required,Validators.maxLength(500)],
      Total_Ammount: ['', [Validators.required]],
      IGST: ['', [Validators.required]],
      SGST_CGST: ['', [Validators.required]],
      Grand_Total: ['', Validators.required, ],
      file: ['', Validators.required],

    });    
   }

  
  
  get f(){
    return this.form.controls;
  }

  blurFields(){
    if(this.f.IGST.value && this.f.SGST_CGST.value){
      this.f.Grand_Total.setValue(Number(this.f.IGST.value)+Number(this.f.SGST_CGST.value))
    }else{
      console.log('')
    }
  }
  
  submit(){
    this.submitted = true;
    if (this.form.invalid) {
      
      return;
  }
  alert("Success")
  this.Aut.postUser(this.form.value).subscribe(res=>{
  })

  }
  onFileSelect(event) {
    let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
     'application/vnd.ms-excel', 'application/zip', "image/jpeg","application/msword"]
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      // console.log(file); 
      if (!_.includes(af, this.file.type)) {
        alert('Only EXCEL, word, zip, image Allowed!');
      }
      } else {
        // this.fileInputLabel = file.name;
        this.form.get('file').setValue(this.file);
      }
    }

  ngOnInit() {
    // this.f.Grand_Total.setValue("bcjvc")
  }

}
