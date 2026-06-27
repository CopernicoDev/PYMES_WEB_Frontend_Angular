// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserRequest, UserResponse } from '../interface/user.interface';

@Injectable({
  // 'root' significa que este servicio es singleton:
  // Angular crea UNA sola instancia y la comparte en toda la app.
  providedIn: 'root'
})
export class UserService {

  // La URL base del backend, tomada del entorno.
  // Resultado: 'http://localhost:8080/api/users'
  private apiUrl = `${environment.apiUrl}/api/users`;

  // HttpClient se inyecta en el constructor (no necesitamos @Autowired como en Java).
  constructor(private http: HttpClient) { }

  /**
   * Registra un nuevo usuario en el backend.
   * Hace un POST a http://localhost:8080/api/users
   * y devuelve un Observable con la respuesta del servidor.
   *
   * ¿Qué es un Observable?
   * Es como una "promesa" (Promise) pero más potente.
   * No hace nada hasta que alguien se "suscribe" (subscribe) a él.
   */
  register(userData: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.apiUrl, userData);
  }
}
