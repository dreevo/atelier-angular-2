import { article } from './../models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  titre: string = 'Les articles du jour';
  listeArticles: article[] = [
    {
      titre: 'Le championnat du monde',
      contenu: 'Le champion du monde de cette année est ....',
      auteur: 'Med Taher',
      date: '12/12/2005',
    },
    {
      titre: 'Les nouveaux parents',
      contenu: 'Les nouveaux parents....',
      auteur: 'AhmedSaid',
      date: '11/11/2018',
    },
    {
      titre: 'Comment écrire votre CV',
      contenu: 'Pour réussir à décraucher un emploi...',
      auteur: 'Marie Elsa',
      date: '02/04/2017',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
