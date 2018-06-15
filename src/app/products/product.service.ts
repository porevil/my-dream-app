import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { BASE_URL } from '../setting';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products:Product[];

  private _selectedMenu: number;
  public menuSelected = new EventEmitter<number>();
  private _serviceURL = BASE_URL+"products_group1";

  public getSelectedMenu(): number {
    return this._selectedMenu;
  }
  public setSelectedMenu(value: number) {
    this._selectedMenu = value;
    this.menuSelected.emit(value);
  }

  constructor(private httpClient:HttpClient) { }


  getAll(){
    console.log('*****************************************')
    console.log(this.httpClient.get<Product[]>(this._serviceURL));
    
    return this.httpClient.get<Product[]>(this._serviceURL)
    .pipe(
      tap((p)=>{console.log('SNAPSHOT >>>>>>>> '+p.forEach+'')}),
      map((p)=> p)
    );

    
    /*
    [{
      "id": 1,
      "name": "PS5",
      "price": 85.50,
      "tags": ["home", "green"]
  },
  {
    "id": 2,
    "name": "XBox10",
    "price": 99.50,
    "tags": ["home", "green"]
  },
  {
    "id": 3,
    "name": "God of War4",
    "price": 20.50,
    "tags": ["home", "green"]
  },
  {
    "id": 4,
    "name": "XXX",
    "price": 20.50,
    "tags": ["home", "green"]
  },
  {
    "id": 4,
    "name": "PSP",
    "price": 69.50,
    "tags": ["home", "green"]
  }]
  }
    */
  }

}
