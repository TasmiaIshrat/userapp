import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';


/**
 * @title Table with pagination
 */
 @Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})



export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'firstName', 'gender','dateOfBirth','phone','email'];
  returndata = []
  dataSource = new MatTableDataSource<any>(this.returndata);
  apiURL = 'http://127.0.0.1:5000/getUsers';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private http: HttpClient,private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(){

    this.http.get<any>('http://127.0.0.1:5000/getUsers').subscribe(data => {
      this.returndata = data.data;
      console.log(this.returndata)
      this.dataSource = new MatTableDataSource<any>(this.returndata);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}




