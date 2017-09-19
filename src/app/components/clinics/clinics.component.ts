import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicService } from '../../services/clinic.service';
import { Clinic } from '../../interfaces/clinic';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {

  public clinics: Clinic[ ];
  public selected: Clinic = null;

  constructor(private dataService: ClinicService,
              private router: Router) { }

  ngOnInit() {
    this.dataService.getAll()
      .then(items => {
        this.clinics = items;
        console.log(this.clinics);
      });
  }

  public onSelect(clinic: Clinic) {
    if (clinic === this.selected) {
      this.selected = null;
    } else {
      this.selected = clinic;
    }
  }

  public gotoDetail() {
    this.router.navigate(['/clinics', this.selected.id]);
  }

}
