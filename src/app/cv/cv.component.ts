import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';
import { CvService } from '../services/cv.service'


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  Personnes  : Personne []
  PersonToShow : Personne
  constructor(
    private cvService : CvService
  ) { }

  ngOnInit(): void {
    this.Personnes = this.cvService.personnes
  }
  treatDataPerson(dataPerson){
    this.PersonToShow = dataPerson
  }

}
