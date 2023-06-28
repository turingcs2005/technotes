import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  post: any = null;
  id: any = '';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.apiService.getPostByID(this.id).subscribe({
        next: data => {
          this.post = data;
        },
        error: err => { console.log(err) }
      });
    }

    console.log('%c ✅ edit.component.ts: EditComponent instantiated. EditComponent pulls a single post from database and inject the data into \
    AddComponent, and then renders AddComponent as a child component', 'color: blue; background-color: antiquewhite');
  }

}
