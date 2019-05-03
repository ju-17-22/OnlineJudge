import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as $ from 'jquery';
@Component({
  selector: 'app-onlineide',
  templateUrl: './onlineide.component.html',
  styleUrls: ['./onlineide.component.css']
})
export class OnlineideComponent implements OnInit {


  new =null;
  codeCollectorForm;
  constructor(private httpclient: HttpClient) {
    
   }

  ngOnInit() {
	  this.codeCollectorForm = new FormGroup({
	     value: new FormControl(""),
	     input: new FormControl("")
	  });
  }
  code= {
    value: "",
    input:""
  };
   

	onSubmit() {
	   this.code=this.codeCollectorForm.value;
		let formData: FormData = new FormData();	
		formData.append('value', this.code.value);
		formData.append('input', this.code.input);
	   this.httpclient.post("http://localhost:8000/onlineide/runcode",formData).subscribe(
	   (data) => {
	      let  output = JSON.parse(JSON.stringify(data));
	      $('#output').val(output.object);
	    
	   }, error => {
	       let errorMsg = JSON.parse(JSON.stringify(error));
	       $('#output').val(errorMsg.object);
	    
	    }
	   );
	}
}
