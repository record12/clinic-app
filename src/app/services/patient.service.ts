import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Patient } from '../interfaces/patient';

@Injectable()
export class PatientService {

  private dataUrl = 'api/patients';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  public getAll(): Promise<Patient[]> {
    return this.http.get(this.dataUrl)
    .toPromise()
    .then(response => response.json().data as Patient[])
    .catch(this.handleError);
  }

  public getById(id: number): Promise<Patient> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Patient)
    .catch(this.handleError);
  }

  public create(name: string): Promise<Patient> {
    return this.http
    .post(this.dataUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Patient)
    .catch(this.handleError);
  }

  public update(patient: Patient): Promise<Patient> {
    const url = `${this.dataUrl}/${patient.id}`;
    return this.http
    .put(url, JSON.stringify(patient), {headers: this.headers})
    .toPromise()
    .then(() => patient)
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
