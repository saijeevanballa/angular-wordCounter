import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsersList( page: number = 1 ){
    console.log(page)
    return this.http.get<any>(`https://reqres.in/api/users?page=${page}`)
  }
}
