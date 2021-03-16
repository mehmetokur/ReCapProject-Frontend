import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/carDto.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {

  cardtos:CarDto[]=[];

  constructor(private cardtoService:CarDtoService) { }

  ngOnInit(): void {
  }

  getCarsDto(){
    this.cardtoService.getCarsDto().subscribe(response=>{
      this.cardtos=response.data;
    })
  }

}
