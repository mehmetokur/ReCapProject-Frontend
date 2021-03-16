import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {

  apiUrl = 'https://localhost:44310/api/cars/getdetail';
  constructor(private httpClient: HttpClient) { }

  getCarsDto():Observable<ListResponseModel<CarDto>> {
     return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl);
  }


}
