import { validate } from 'validate.js';

export default function validator(field) {
   let constraint = {
      email: {
         email: true
      },
      password: {
         length: {
            minimum: 5,
            message: '^password length must be greater then 5'
         }
      }
   };
   return validate(field, constraint);
}



