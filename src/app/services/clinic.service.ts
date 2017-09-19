import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Clinic } from '../interfaces/clinic';

@Injectable()
export class ClinicService {

  private dataUrl = 'api/clinics';
  private headers = new Headers({'Content-Type': 'application/json'});

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

  public update(clinic: Clinic): Promise<Clinic> {
    const url = `${this.dataUrl}/${clinic.id}`;
    return this.http
      .put(url, JSON.stringify(clinic), {headers: this.headers})
      .toPromise()
      .then(() => clinic)
      .catch(this.handleError);
  }

  public delete(id: number): Promise<void> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
