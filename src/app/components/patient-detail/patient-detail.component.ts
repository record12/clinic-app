import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Patient } from '../../interfaces/patient';
import { Clinic } from '../../interfaces/clinic';
import { PatientService } from '../../services/patient.service';
import { ClinicService } from '../../services/clinic.service';
import { RELATIONS, RelationService } from '../../services/relation.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  public patient: Patient;
  public clinicList: Clinic[]; // clinic array
  public relClinicId: number; // related Clinic for the patient

  private clinicStorageKey = RELATIONS.PATIENT_CLINIC;

  constructor(private dataService: PatientService,
              private clinicService: ClinicService,
              private relationService: RelationService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getById(+params.get('id')))
      .subscribe(patient => {
        this.patient = patient;
        // get a related clinic from storage
        this.relClinicId = this.relationService.get(this.clinicStorageKey, patient.id);
      });

    this.clinicService.getAll()
      .then(items => this.clinicList = items);
  }

  public goBack(): void {
    this.location.back();
  }

  public save() {
    this.dataService.update(this.patient)
    .then(() => {
      // save related clinic to storage
      this.relationService.set(this.clinicStorageKey, this.patient.id, this.relClinicId);

      this.goBack();
    });
  }

}
