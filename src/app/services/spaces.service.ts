import { Injectable } from '@angular/core';
import { Space } from '../interfaces/space';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class SpacesService {
  public spaces: any[] = [];

  constructor(private _firebase:FirebaseService) { }
  public async add(space: Space): Promise<Space> {
    let res = await this._firebase.addDocument('spaces', space);
    return {
      ...space,
      id: res.id,
    };
  }

  public async update(id: string, space: Space | any): Promise<Space> {
    let res = await this._firebase.updateDocument('spaces', space, id);
    return {
      ...space,
    };
  }

  public async delete(id: string) {
    let res = await this._firebase.deleteDocument('spaces', id);
    return {
      message: 'Eliminado correctamente.',
    };
  }

  public async getSpaces(): Promise<Space[]> {
    if (this.spaces.length > 0) {
      return this.spaces;
    }
    this.spaces = [];
    try {
      const ref = this._firebase.getCollectionRef('spaces');
      ref.orderBy('date', 'desc');
      return await this._firebase.generateData(ref, this.spaces);
    } catch (error) {
      return [];
    }
  }

  public async getById(id: string) {
    try {
      return this._firebase.getDocument('spaces', id);
    } catch (error) {
      return null;
    }
  }

  

 

}
