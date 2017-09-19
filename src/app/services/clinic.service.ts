import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Clinic } from '../interfaces/clinic';

@Injectable()
export class ClinicService {

  private dataUrl = 'api/clinics';

  constructor(private http: Http) { }

  public getAll(): Promise<Clinic[]> {
    return this.http.get(this.dataUrl)
      .toPromise()
      .then(response => response.json().data as Clinic[])
      .catch(this.handleError);
  }

  public getById(id: number): Promise<Clinic> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Clinic)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
