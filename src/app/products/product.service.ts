import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  private _selectedMenu: number;
  public menuSelected = new EventEmitter<number>();

  public getSelectedMenu(): number {
    return this._selectedMenu;
  }
  public setSelectedMenu(value: number) {
    this._selectedMenu = value;
    this.menuSelected.emit(value);
  }

  constructor() { }


  getAll(){
    return [{
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
}
