import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44310/api/';

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath =this.apiUrl + "cars/getall"
     return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbrandid?brandid=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
 }
 getCarsByColor(colorId:number):Observable<ListResponseModel<Car>> {
  let newPath = this.apiUrl + "cars/getcolorid?colorid=" + colorId
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
 }



 


}
