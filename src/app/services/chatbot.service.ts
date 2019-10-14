import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, tap, map, sample } from 'rxjs/operators';
import { variable } from '@angular/compiler/src/output/output_ast';
import {DialogflowApiKeyServices} from './dialogflow.service'
import { JsonPipe } from '@angular/common';
import {Format,Text,QueryInput} from 'src/app/components/chatbot/format'



@Injectable({
  providedIn: 'root'
})

export class ChatReply {
  
  private productUrl = 'https://dialogflow.googleapis.com/v2/projects/newagent-rwepne/agent/sessions/1235:detectIntent';
    headers: HttpHeaders;
    
     
    //queryFormat.queryInput.text.text="";  
    text: Text
    queryInput:QueryInput
    format: Format
    
    constructor(private http: HttpClient) { }

    getKey(): Observable<JSON>{
        
        this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ya29.c.Kl6bB-2gAdj2cS3QEKZS7h40SeBjbm5G2XDs5QBmGjtPfww8wiTPT1EWa743l5GPI5hOf0H6NHczEqJBqOXrNbhb-hNRtcCg3BrXXtCFmK_HdmKdxfQTC7OdFN3PQhqB' });
        //Body for dialogflow
        this.text=new Text();
        this.text.text='Book a table';
        this.text.languageCode='en';
        this.queryInput=new QueryInput();
        this.queryInput.text=this.text;
        this.format=new Format();
        this.format.queryInput=this.queryInput;
        //end of body of dialogflow
       var sample=this.http.post<JSON>(this.productUrl,JSON.stringify(this.format),{headers: this.headers , responseType:'json'});
       console.log("Inside service");
       //console.log(JSON.stringify(sample));
       console.log(sample); 
       return sample;
    }
  
  }


