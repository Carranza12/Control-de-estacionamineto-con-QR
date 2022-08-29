import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Space } from 'src/app/interfaces/space';
import { Moviments, Visit } from 'src/app/interfaces/visit';
import { SpacesService } from 'src/app/services/spaces.service';
import { VisitService } from 'src/app/services/visit.service';
import * as uuid from "uuid";

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {
  public showForm:boolean=true;
  public showDownloadQR=false;
  public listOfSpaces:Space[]=[];
  public selectedSpace!:Space;
  public previewIndex:number=0;
  visitForm = this._formBuilder.group({
    driver_name: new FormControl('', [Validators.required]),
    trailer_model: new FormControl('', [Validators.required]),
    serie_number: new FormControl('', [Validators.required]),
    type_trailer: new FormControl('', [Validators.required]),
    plan: new FormControl('', [Validators.required]),
  })
  constructor(
    private _formBuilder: FormBuilder, 
    private _visit:VisitService,
    private _spaces:SpacesService
    ) { }

  public newVisitData:any;
  ngOnInit(): void {
  this.loadSpaces();
  }

  async loadSpaces(){
    this.listOfSpaces= await this._spaces.getSpaces();
    console.log(this.listOfSpaces);
    
  }

  changeTypeTrailer(e: any) {
    if (e.target.value) {
      this.visitForm.get('type_trailer')?.setValue(e.target.value, {
        onlySelf: true,
      });
      console.log(this.visitForm.get('type_trailer')?.value);
    }
  }

  changePlan(e: any) {
    if (e.target.value) {
      this.visitForm.get('plan')?.setValue(e.target.value, {
        onlySelf: true,
      });
      console.log(this.visitForm.get('plan')?.value);
    }
  }

  public save() {
    if (this.visitForm.invalid) return;
    try {
      const Moviments: Moviments[] = []
      const date = Date.now()
      const myKey = uuid.v4();
      if (this.visitForm.value) {
        const newVisit: any = {
          ...this.visitForm.value,
          initDate: date,
          endDate: 0,
          Moviments,
          status: true,  //true = adentro && false =afuera
          amount_sale: 0,
          unique_key: `${this.visitForm.get('serie_number')?.value}/${myKey}`,
          expiration: false,
          space:this.selectedSpace
        }

        //firebase upload
        this._visit.add(newVisit)

        const updateSpace:any={
          name:this.selectedSpace.name,
          isDisponible:false,
          unique_key:`${this.visitForm.get('serie_number')?.value}/${myKey}`
       }
       this._spaces.update(this.selectedSpace.id,updateSpace)
        alert('agregado con exito')
        this.newVisitData=newVisit;
        this.showForm=false;
        this.showDownloadQR=true;
      }
    }
    catch (e) {
      console.log(e);
      alert('hubo un error')
    }
  }

  public selectSpace(space:Space, index:number){
    if(this.selectedSpace){
      this.listOfSpaces.push(this.selectedSpace);
    }

    this.selectedSpace= this.listOfSpaces[index]
    this.listOfSpaces.splice(index,1);
    this.previewIndex=index;
    console.log(this.selectedSpace);
    
  }


}
