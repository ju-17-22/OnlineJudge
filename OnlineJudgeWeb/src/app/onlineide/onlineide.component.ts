import { Component,ViewChild, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-github';

import * as $ from 'jquery';

const THEME = 'ace/theme/github'; 
const LANG = 'ace/mode/c_cpp';

@Component({
  selector: 'app-onlineide',
  templateUrl: './onlineide.component.html',
  styleUrls: ['./onlineide.component.css']
})
export class OnlineideComponent implements OnInit {
    new =null;
    codeCollectorForm;

    @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
    private codeEditor: ace.Ace.Editor;

    constructor(private httpclient: HttpClient){
    }

	ngOnInit() {
		const element = this.codeEditorElmRef.nativeElement;
        const editorOptions: Partial<ace.Ace.EditorOptions> = {
            highlightActiveLine: true,
            minLines: 23,
            maxLines: 23,
        };
        this.codeEditor = ace.edit(element, editorOptions);
        this.codeEditor.setTheme(THEME);
        this.codeEditor.getSession().setMode(LANG);
        this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
	
		this.codeCollectorForm = new FormGroup({
		    value: new FormControl(""),
		    input: new FormControl("")
		});
	}
	code = {
	    value: "",
	    input:""
	};
   
	onSubmit() {
	    this.code=this.codeCollectorForm.value;
		let formData: FormData = new FormData();	
		formData.append('value', this.codeEditor.getValue());
		if(this.code.input=="") this.code.input ="input";
		formData.append('input', this.code.input);	    
		this.httpclient.post("http://localhost:8000/onlineide/runcode",formData).subscribe(
	        (data) => {
	        let  output = JSON.parse(JSON.stringify(data));
	        $('#output').val(output.object);
	    }, error => {
	       let errorMsg = JSON.parse(JSON.stringify(error));
	       $('#output').val(errorMsg.object);
	    });
	}
}
