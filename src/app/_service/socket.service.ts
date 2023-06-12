import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: Socket;

  constructor() {
    this.socket = io(`${environment.HOST}`)
  }

  get() : Observable<any> {
    return new Observable<any>(observer =>{
      this.socket.on('newData', (data:  any) => {
        observer.next(data)
      });
    })
  }


}

