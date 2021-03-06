import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../interfaces/patient';
import { RELATIONS, RelationService } from '../../services/relation.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  public patients: Patient[ ];
  public selected: Patient = null;

  constructor(private dataService: PatientService,
              private relationService: RelationService,
              private router: Router) { }

  ngOnInit() {
    this.dataService.getAll()
    .then(items => {
      this.patients = items;
      console.log(this.patients);
    });
  }

  public onSelect(patient: Patient) {
    if (patient === this.selected) {
      this.selected = null;
    } else {
      this.selected = patient;
    }
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dataService.create(name)
    .then(item => {
      this.patients.push(item);
      this.selected = null;
    });
  }

  public delete() {
    const id = this.selected.id;
    this.dataService.delete(id).then(() => {
      this.patients = this.patients.filter((item) => item.id !== id);
      this.selected = null;
      // remove a clinic relation
      this.relationService.remove(RELATIONS.PATIENT_CLINIC, id);
      // remove a therapist relation
      this.relationService.remove(RELATIONS.PATIENT_THERAPIST, id);
    });
  }

  public gotoDetail() {
    this.router.navigate(['/patients', this.selected.id]);
  }

}
