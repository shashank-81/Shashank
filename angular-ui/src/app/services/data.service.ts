import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';


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

    registration(FirstName, LastName, RollNo, EmailId, MobileNo, Password){
        console.log('===============')
        const body = {
            FirstName,
            LastName,
            RollNo,
            EmailId,
            MobileNo,
            Password
        }
        console.log('===============')

        return this.httpClient.post(`http://127.0.0.1:5000/signup` , body)
    }

    login(Username, Password){

        const body = {
          'EmailId' : Username,
          'Password' : Password
        }
        return this.httpClient.post(`http://127.0.0.1:5000/login`,body)

    }

    changepass(Username,Password,newpass,c_newpass){

        const body= {
            'EmailId' : Username,
            'Password' : Password,
            'New Password' : newpass,
            'Confirm New Password' : c_newpass
        }
        return this.httpClient.post(`http://127.0.0.1:5000/changepass`,body)
    }

    acc_det(EmailId){
        console.log('===============')
        const body = {
            EmailId
        }
        console.log('===============')
        return this.httpClient.post(`http://127.0.0.1:5000/acc_det` , body)
    }

    doubt(Subject, Topic, checked){
        const body = {
            'Subject' : Subject,
            'Topic': Topic,
            'checked': checked
        }
        return this.httpClient.post(`http://127.0.0.1:5000/doubt` , body)
    }

    verification(OTP){
        const body = {
            'OTP': OTP
        }
        return this.httpClient.post(`http://127.0.0.1:5000/verification` , body)
    }

}