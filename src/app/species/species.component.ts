import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})

export class SpeciesComponent implements OnInit {
  results;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNews().subscribe((data)=>{
      const species = data['results'];
      this.results = species.map(s => {
        const urlSplit = s.url.split("/");
        const id = urlSplit[urlSplit.length - 2];
        return {
          id: id,
          name: s.name,
        }
      });
    });
  }
}


