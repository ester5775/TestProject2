import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordinationsService } from '../../services/coordinations.service'
import { Coordinations } from '../../classes/coordinations'
import { Subscriber } from 'rxjs';
import { Address } from 'src/app/classes/address';
import { AddressService } from 'src/app/services/address.service';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private router:ActivatedRoute , private coordinationService:CoordinationsService ,private addressService:AddressService) { }

addressName:string | undefined ='';
coordination:Coordinations = new Coordinations(1,2) ;
//moustPopolarAddress:Address[];
address:Address[]=new Array();
num1:string ='s';
num:number=0;
largeestRequestNumber:number=0;


  ngOnInit(): void 
{   
  this.router.queryParams.subscribe(params=>this.addressName=params.addressName)
 if(this.addressName != undefined)
  {
   this.coordinationService.getCoordinationByAddressName(this.addressName).
   subscribe((aa:any)=>this.coordination=aa 
    );

  this.addressService.get5MostPopolarAddress()
   .subscribe((data:Address[])=>this.address=data
   );



//this.addressService.getHello().subscribe((data:any)=>{this.str=data.hello});  
//  }
  }
}


}
