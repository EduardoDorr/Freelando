import { Validators } from "@angular/forms";
import { FormConfig } from "../shared/models/form-config.interface";
import { cpfValidator } from "../shared/validators/cpf.validator";
import { emailExistenteValidator } from "../shared/validators/emailExistente.validator";
import { senhasIguaisValidator } from "../pages/dados-pessoais-form/dados-pessoais-form.component";

export function getDadosPesossaisFormConfig(emailService: any): FormConfig {
  return {
    title: 'Crie seu cadastro',
    description: 'Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers.',
    fields: [
      {
        label: 'Nome Completo',
        formControlName: 'nomeCompleto',
        type: 'text',
        required: true,
        errorMessages: {
          required: 'Nome completo é obrigatório'
        },
        validator: [Validators.required],
        width: 'full'
      },
      {
        label: 'CPF',
        formControlName: 'cpf',
        type: 'text',
        required: true,
        errorMessages: {
          required: 'CPF é obrigatório',
          cpfInvalido: 'CPF inválido'
        },
        validator: [Validators.required, cpfValidator],
        width: 'full'
      },
      {
        label: 'Estado',
        formControlName: 'estado',
        type: 'select',
        placeholder: 'Selecione',
        required: true,
        errorMessages: {
          required: 'Estado é obrigatório'
        },
        validator: [Validators.required],
        width: 'half'
      },
      
      {
        label: 'Cidade',
        formControlName: 'cidade',
        type: 'select',
        required: true,
        placeholder: 'Selecione',
        errorMessages: {
          required: 'Cidade é obrigatório'
        },
        validator: [Validators.required],
        width: 'half'
      },
      {
        label: 'Email',
        formControlName: 'email',
        type: 'email',
        required: true,
        errorMessages: {
          required: 'Email é obrigatório',
          email: 'Email inválido',
          emailExistente: 'Email já existente'
        },
        validator: [Validators.required, Validators.email],
        asyncValidators: [emailExistenteValidator(emailService)],
        width: 'full'
      },
      {
        label: 'Senha',
        formControlName: 'senha',
        type: 'password',
        required: true,
        errorMessages: {
          required: 'Senha é obrigatório',
          minLength: 'Senha deve ter ao menos 6 caracteres',
        },
        validator: [Validators.required, Validators.minLength(6)],
        width: 'half'
      },
      {
        label: 'Confirmar Senha',
        formControlName: 'confirmarSenha',
        type: 'password',
        required: true,
        errorMessages: {
          required: 'Confirmar Senha é obrigatório',
          senhasNaoIguais: 'Senhas não coincidem',
        },
        validator: [Validators.required, senhasIguaisValidator],
        width: 'half'
      }
    ]
  }
};