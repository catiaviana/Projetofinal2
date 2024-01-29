import { Component, Inject } from '@angular/core'
import { AuthServiceService } from '../auth-service.service' // Importe o serviço de autenticação

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  username: string = ''
  password: string = ''

  constructor (@Inject(AuthServiceService) private readonly authService: AuthServiceService) {} // Injete o serviço de autenticação

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  onSubmit () {
    // Chame o método de autenticação do serviço
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Lida com o sucesso do login
        console.log('Successful login', response)
      },
      (error: any) => {
        // Lida com falhas no login
        console.error('Login error', error)
      }
    )
  }
}
