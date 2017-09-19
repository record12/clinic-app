import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Therapist } from '../interfaces/therapist';

@Injectable()
export class TherapistService {

  private dataUrl = 'api/therapists';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  public getAll(): Promise<Therapist[]> {
    return this.http.get(this.dataUrl)
    .toPromise()
    .then(response => response.json().data as Therapist[])
    .catch(this.handleError);
  }

  public getById(id: number): Promise<Therapist> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Therapist)
    .catch(this.handleError);
  }

  public create(name: string): Promise<Therapist> {
    return this.http
    .post(this.dataUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Therapist)
    .catch(this.handleError);
  }

  public update(therapist: Therapist): Promise<Therapist> {
    const url = `${this.dataUrl}/${therapist.id}`;
    return this.http
    .put(url, JSON.stringify(therapist), {headers: this.headers})
    .toPromise()
    .then(() => therapist)
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
