// src/app/interface/user.interface.ts

/**
 * UserRequest: lo que ENVIAMOS al backend al crear un usuario.
 * Debe coincidir con el record UserRequestDto.java del backend.
 *
 * Backend espera:
 * {
 *   "username": "nicolas",
 *   "email": "nicolas@ejemplo.com",
 *   "password": "123456",
 *   "roles": ["ROLE_USER"]   ← opcional
 * }
 */
export interface UserRequest {
    username: string;
    email: string;
    password: string;
    roles?: string[]; // opcional: el backend lo acepta como null
}

/**
 * UserResponse: lo que RECIBIMOS del backend tras crear o consultar un usuario.
 * Debe coincidir con el record UserResponseDto.java del backend.
 */
export interface UserResponse {
    id: number;
    username: string;
    email: string;
    roles: string[];
}
