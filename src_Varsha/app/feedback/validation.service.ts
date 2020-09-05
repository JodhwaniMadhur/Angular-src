export class ValidationService 
{
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) 
    {
      let config = {
        'required': 'Required',
        'invalidEmailAddress': 'Invalid email address',
        'invalidPhoneNumber':'Invalid Mobile Number',
        'minlength': 'Minimum length ${validatorValue.requiredLength}'
      };
  
      return config[validatorName];
    }
  
    static emailValidator(control) 
    {
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) 
      {
        return null;
      } 
      else 
      {
        return { 'invalidEmailAddress': true };
      }
    }

    static pValidator(control) 
    {
      if (control.value.match(/[0-9\+\-\ ]/))
      {
        return null;
      } 
      else 
      {
        return { 'invalidPhoneNumber': true };
      }
    }
}