import { Injectable } from '@angular/core';
import { Visit } from '../interfaces/visit';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  public visits: any[] = [];

  constructor(private _firebase:FirebaseService) { }
  public async add(visit: Visit): Promise<Visit> {
    let res = await this._firebase.addDocument('visits', visit);
    return {
      ...visit,
      id: res.id,
    };
  }

  public async update(id: string, visit: Visit | any): Promise<Visit> {
    let res = await this._firebase.updateDocument('visits', visit, id);
    return {
      ...visit,
    };
  }

  public async delete(id: string) {
    let res = await this._firebase.deleteDocument('visits', id);
    return {
      message: 'Eliminado correctamente.',
    };
  }

  public async getVisits(): Promise<Visit[]> {
    if (this.visits.length > 0) {
      return this.visits;
    }
    this.visits = [];
    try {
      const ref = this._firebase.getCollectionRef('visits');
      ref.orderBy('date', 'desc');
      return await this._firebase.generateData(ref, this.visits);
    } catch (error) {
      return [];
    }
  }

  public async getById(id: string) {
    try {
      return this._firebase.getDocument('visits', id);
    } catch (error) {
      return null;
    }
  }

  

 

  
}
