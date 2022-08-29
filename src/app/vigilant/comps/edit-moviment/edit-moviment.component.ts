import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moviments } from 'src/app/interfaces/visit';
import { VisitService } from 'src/app/services/visit.service';

@Component({
  selector: 'app-edit-moviment',
  templateUrl: './edit-moviment.component.html',
  styleUrls: ['./edit-moviment.component.scss']
})
export class EditMovimentComponent implements OnInit {
  @Input() data:any;
  public newMoviment!:Moviments;
  public type!:string;
  public message!:string;
  constructor(
    public _router:Router,
    private _visits:VisitService
  ) { }

  ngOnInit(): void {
    this.changeState()
  }
  
  async changeState(){
    // state == true <---- se encuentra adentro
    //sate == false <------ se encuentra a fuera
    try{
      const newState= this.data.status? false: true;
      this.type= this.data.status? "Se encuentra afuera": "Se encuentra dentro"
      this.newMoviment={
        date:Date.now(),
        type:this.type,
        actual_status:newState
      }
      this.data.Moviments.push(this.newMoviment)
      const updateElement={
        status:newState,
        Moviments:this.data.Moviments
      }
  
      this._visits.update(this.data.id,updateElement)
      this.message= this.data.status? "salida":"Entrada"
      alert(`La ${this.message} se registró correctamente`)
    }catch(err){
      console.log(err);
      alert('ALGO HA SUCEDIO MAL, INTENTALO DE NUEVO')
      
    }
  }
}
