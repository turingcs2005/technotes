import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from 'src/app/services/global.service';
import { SnackBarComponent } from '../../shared/misce/snack-bar/snack-bar.component';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  baseUrl = environment.baseUrl;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['title', 'authors', 'keywords', 'description', 'MoreOptions'];
  dataSource = new MatTableDataSource([]);

  constructor(
    private apiService: ApiService,
    private globalService: GlobalService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    console.log(`%c ✅ list.component.ts: ListComponent instantiated`, 'color: blue; background-color: antiquewhite');
  }

  onDelete(_id: string, postTitle: string) {
    if(confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      this.apiService.deletePost(_id).subscribe( data => {
        let msg = postTitle + ' deleted.';
        this.globalService.snackBarText = msg;
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 5000
        });
      });
      location.reload();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
