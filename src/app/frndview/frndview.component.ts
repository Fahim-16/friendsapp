import { Component, OnInit } from '@angular/core';
import { FrndService } from '../frnd.service';

@Component({
  selector: 'app-frndview',
  templateUrl: './frndview.component.html',
  styleUrls: ['./frndview.component.css']
})
export class FrndviewComponent implements OnInit {

  constructor(private api:FrndService) {
    api.frndview().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
   }

  ngOnInit(): void {
  }
  data:any=[

  ]

}
