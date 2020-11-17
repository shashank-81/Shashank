import { Injectable } from '@angular/core'

import { HttpClient , HttpHeaders } from '@angular/common/http'


@Injectable({
    providedIn : "root"
})
export class DataService {
    baseUrl = 'http://127.0.0.1:5000';

    constructor (private httpClient : HttpClient) {}


    getHeader() : HttpHeaders{
        let headers : HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept','application/json');
        return headers;
    };

    registration(FirstName, LastName, RollNo, EmialId, MobileNo, Password){
        console.log('===============')
        const body = {
            FirstName,
            LastName,
            RollNo,
            EmialId,
            MobileNo,
            Password
        }
        console.log('===============')
        return this.httpClient.post(`http://127.0.0.1:5000/signup` , body)
    };

    login(Username, Password){

        const body = {
          'EmialId' : Username,
          'Password' : Password
        }
        return this.httpClient.post(`http://127.0.0.1:5000/login`,body)

    }
























}