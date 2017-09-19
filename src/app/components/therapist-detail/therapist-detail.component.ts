import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Therapist } from '../../interfaces/therapist';
import { Clinic } from '../../interfaces/clinic';
import { TherapistService } from '../../services/therapist.service';
import { ClinicService } from '../../services/clinic.service';
import { RELATIONS, RelationService } from '../../services/relation.service';

@Component({
  selector: 'app-therapist-detail',
  templateUrl: './therapist-detail.component.html',
  styleUrls: ['./therapist-detail.component.scss']
})
export class TherapistDetailComponent implements OnInit {

  public therapist: Therapist;
  public clinicList: Clinic[]; // clinic array
  public relClinicId: number; // related Clinic for the therapist

  private clinicStorageKey = RELATIONS.THERAPIST_CLINIC;

  constructor(private dataService: TherapistService,
              private clinicService: ClinicService,
              private relationService: RelationService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.dataService.getById(+params.get('id')))
    .subscribe(therapist => {
      this.therapist = therapist;
      // get a related clinic from storage
      this.relClinicId = this.relationService.get(this.clinicStorageKey, therapist.id);
    });

    this.clinicService.getAll()
    .then(items => this.clinicList = items);
  }

  public goBack(): void {
    this.location.back();
  }

  public save() {
    this.dataService.update(this.therapist)
    .then(() => {
      // save related clinic to storage
      this.relationService.set(this.clinicStorageKey, this.therapist.id, this.relClinicId);

      this.goBack();
    });
  }

}
