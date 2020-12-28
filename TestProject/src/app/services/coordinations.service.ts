import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coordinations } from '../classes/coordinations';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CoordinationsService {

  constructor(private http : HttpClient) { }

  getCoordinationByAddressName(addressName:string)
 {
  return this.http.get('http://192.168.14.3:3000/coor/addressName',{params:{addressName}});
 }
}
