import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../classes/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  get5MostPopolarAddress():Observable<Address[]>
  {
    return this.http.get<Address[]>('http://192.168.14.3:3000/5add')
   
  }

 // getHello():Observable<JSON>
 // {
 //   return this.http.get<JSON>('http://192.168.14.3:3000');
 // }
}
