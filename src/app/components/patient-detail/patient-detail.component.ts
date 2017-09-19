import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Patient } from '../../interfaces/patient';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  public patient: Patient;

  constructor(private dataService: PatientService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.dataService.getById(+params.get('id')))
    .subscribe(patient => this.patient = patient);
  }

  public goBack(): void {
    this.location.back();
  }

  public save() {
    this.dataService.update(this.patient)
    .then(() => this.goBack());
  }

}
