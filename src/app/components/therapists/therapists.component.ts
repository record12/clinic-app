import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TherapistService } from '../../services/therapist.service';
import { Therapist } from '../../interfaces/therapist';
import { RELATIONS, RelationService } from '../../services/relation.service';

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrls: ['./therapists.component.scss']
})
export class TherapistsComponent implements OnInit {

  public therapists: Therapist[ ];
  public selected: Therapist = null;

  constructor(private dataService: TherapistService,
              private relationService: RelationService,
              private router: Router) { }

  ngOnInit() {
    this.dataService.getAll()
    .then(items => {
      this.therapists = items;
      console.log(this.therapists);
    });
  }

  public onSelect(therapist: Therapist) {
    if (therapist === this.selected) {
      this.selected = null;
    } else {
      this.selected = therapist;
    }
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dataService.create(name)
    .then(item => {
      this.therapists.push(item);
      this.selected = null;
    });
  }

  public delete() {
    const id = this.selected.id;
    this.dataService.delete(id).then(() => {
      this.therapists = this.therapists.filter((item) => item.id !== id);
      this.selected = null;
      // remove a clinic relation
      this.relationService.remove(RELATIONS.THERAPIST_CLINIC, id);
    });
  }

  public gotoDetail() {
    this.router.navigate(['/therapists', this.selected.id]);
  }

}
