import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdpater } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('É válido (CLASS)');
  } else {
    console.log('É inválido (CLASS)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('É válido (Função)');
  } else {
    console.log('É inválido (Função)');
  }
}

const email = 'nabaisnelson@gmail.com';
validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(emailValidatorFnAdpater, email);
