import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map, sample } from 'rxjs/operators';
import { variable } from '@angular/compiler/src/output/output_ast';



@Injectable({
  providedIn: 'root'
})
export class DialogflowApiKeyServices {
  private productUrl = 'https://localhost:44364/api/DialogflowApiKey';

  constructor(private http: HttpClient) { }

    getKey(): Observable<JSON>{
      
       var sample=this.http.get<JSON>(this.productUrl);
       console.log(sample);
        return sample;
    }
  
  }


