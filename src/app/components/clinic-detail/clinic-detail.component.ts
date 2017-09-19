import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Clinic } from '../../interfaces/clinic';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ClinicService } from '../../services/clinic.service';

@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.component.html',
  styleUrls: ['./clinic-detail.component.scss']
})
export class ClinicDetailComponent implements OnInit {

  public clinic: Clinic;

  constructor(private dataService: ClinicService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.dataService.getById(+params.get('id')))
    .subscribe(clinic => this.clinic = clinic);
  }

  public goBack(): void {
    this.location.back();
  }

  public save() {
    this.dataService.update(this.clinic)
      .then(() => this.goBack());
  }

}
