import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

export const RELATIONS = {
  PATIENT_CLINIC: 'patient_clinic',
  THERAPIST_CLINIC: 'therapist_clinic',
  PATIENT_THERAPIST: 'patient_therapist'
};

@Injectable()
export class RelationService {

  constructor(private storageService: StorageService) { }

  public set(storageKey: string, key: number, value: number) {
    const values = this.storageService.getObj(storageKey);
    values[key] = value;
    this.storageService.setObj(storageKey, values);
  }

  public get(storageKey: string, key: number) {
    const values = this.storageService.getObj(storageKey);
    return key in values ? values[key] : null;
  }

  public remove(storageKey: string, key: number) {
    const values = this.storageService.getObj(storageKey);
    delete values[key];
    this.storageService.setObj(storageKey, values);
  }

}
