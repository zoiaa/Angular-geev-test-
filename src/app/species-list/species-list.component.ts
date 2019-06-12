import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class SpeciesListComponent implements OnInit {
  results = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idSpecies = +params.get('speciesId');
      const url = `https://swapi.co/api/species/${idSpecies}`;
      this.apiService.getPeople(url).subscribe((data)=>{
        const people = data['people'];
        for (let j = 0; j < people.length; j++) {
          const urlPeople = people[j];
          this.apiService.getPeople(urlPeople).subscribe((data)=>{
            this.results.push(data);
          });
        }
      });
    });
  }
}



