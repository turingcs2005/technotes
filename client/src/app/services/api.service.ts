import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpUrlEncodingCodec  } from '@angular/common/http';
import { catchError, tap } from 'rxjs';
import { Post } from '../app-data/app-models';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const baseUrl = environment.baseUrl + '/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  codec = new HttpUrlEncodingCodec();
  
  constructor(
    private http: HttpClient
  ) {
    console.log(`%c ✅ api.service.ts: ApiService instantiated with apiUrl ${baseUrl}`, 'color: blue; background-color: antiquewhite');
  }

  // 🌍 geo-validataors -----------------
  getStateList = (): Observable<any> => this.http.get(`${baseUrl}/geo-validators/stateArray`);
  
  getCityList = (stateAbbr: string): Observable<any> => this.http.get(`${baseUrl}/geo-validators/cityArray/${stateAbbr}`);

  // We need to encode URL because some city names have space or other special characters (e.g. Fall River)
  getZipCodeList = (stateAbbr: string, city: string): Observable<any> => {
    const url = this.codec.encodeValue(`${baseUrl}/geo-validators/zipCodeArray/${stateAbbr}/${city}`);
    // console.log(url);
    return this.http.get(url);
  }
  // 🌍 ----------------------------------

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  // 📖 post CRUD operations --------------
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${baseUrl}/allPosts`)
      .pipe(
        tap(data => console.log('%c ✅ api.service.ts: fetched a list of posts', 'color: green; background-color: antiquewhite')),
        catchError(this.handleError('getPosts', []))
      );
  }

  getPostByID(id: string): Observable<Post> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap( _ => console.log(`%c ✅ api.service.ts: fetched a post: id=${id}`, 'color: green; background-color: antiquewhite')),
      catchError(this.handleError<Post>(`getPostByID, id=${id}`))
    );
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(baseUrl, post, httpOptions).pipe(
      tap((data: Post) => console.log(`%c ✅ api.service.ts: added a post: id=${data._id}`, 'color: green; background-color: antiquewhite')),
      catchError(this.handleError<Post>('addPost'))
    );
  }

  updatePost(id: string, post: Post): Observable<any> {
    const url = `${baseUrl}/${id}`;
    return this.http.put(url, post, httpOptions).pipe(
      tap(_ => console.log(`%c ✅ api.service.ts: updated a post, id=${id}`, 'color: green; background-color: antiquewhite')),
      catchError(this.handleError<any>('updatePost'))
    );
  }

  deletePost(id: string): Observable<Post> {
    const url = `${baseUrl}/${id}`;
    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted a post, id=${id}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }
  // 📖 -----------------------------------

}
