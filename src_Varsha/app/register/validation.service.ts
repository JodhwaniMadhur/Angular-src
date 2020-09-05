export class ValidationService 
{
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) 
    {
      let config = {
        'required': 'Required',
        'invalidEmailAddress': 'Invalid email address',
        'invalidPhoneNumber':'Invalid Mobile Number',
        'invalidWhatsAppNumber':'Invalid WhatsApp Number',
        //'minlength': 'Minimum length should be 10 digits',
        'maxlength': 'Maximum length ${validatorValue.requiredLength}',
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

    static cValidator(control) 
    {
      if (control.value.match(/[7-9][0-9]{9}/))
      {
        return null;
      } 
      
      else 
      {
        return { 'invalidWhatsAppNumber': true };
      }
    }

    static minlengthValidator(control) 
    {
      if ((control.value.length)==10)
      {
        return null;
      } 
      
      else 
      {
        return { 'minlength': true };
      }
    }
    static maxlengthValidator(control) 
    {
      if ((control.value.length)==10)
      {
        return null;
      } 
      
      else 
      {
        return { 'maxlength': true };
      }
    }
}