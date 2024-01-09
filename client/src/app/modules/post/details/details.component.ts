import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { SnackBarComponent } from '../../shared/misce/snack-bar/snack-bar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  baseUrl = environment.baseUrl;
  post: any = null;
  id: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private globalService: GlobalService

  ) { }

  ngOnInit(): void {
    // obtaining ID from URL
    this.route.params.subscribe( data => {
      this.id = data.id;
    });

    // if ID is not empty, initialize post 
    if (this.id === null) {
      this.router.navigate(['/post']);
      let msg = 'Cannot find post';
      this.globalService.snackBarText = msg;

      this.snackBar.openFromComponent(SnackBarComponent, {
        duration: 5000
      });
    } else {
      this.apiService.getPostByID(this.id).subscribe(data => {
        this.post = data;
      });
    }
    console.log(`%c ✅ details.component.ts: DetailsComponent instantiated`, 'color: blue; background-color: antiquewhite');
  }

  get url() {
    if (this.post.url) {
      return `${this.baseUrl}/${this.post.url}`;
    } else {
      return ''
    }
  }

  onEdit() {
    // navigate to edit component, passing in ID 
    this.router.navigate([`/post/edit/${this.post._id}`]);
  }

  onDelete() {
    // After deletion, navigate to post homepage 
    if (confirm('Are you sure you want to delete this post? This action cannot be undone.')){
      this.apiService.deletePost(this.post._id).subscribe(data => {
        let msg = this.post.title + 'has been deleted.';
        console.log(msg);

        this.globalService.snackBarText = msg;
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 5000
        });

        this.router.navigate(['/post/list']);
      })
    }
  }

}
