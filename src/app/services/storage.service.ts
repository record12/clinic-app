import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  private storage: any;

  constructor () {
    this.storage = localStorage;
  }

  public getObj(key: string): any {
    return JSON.parse(this.storage.getItem(key)) || {};
  }

  public setObj(key: string, data: any): void {
    this.storage.setItem(key, JSON.stringify(data));
  }

}
