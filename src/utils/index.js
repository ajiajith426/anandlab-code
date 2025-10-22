import toast from 'react-hot-toast';

export {
  default as CheckBox
}
from './CheckBox'
export const slugify = (prefix, str) => {
  return prefix + str
    .toLowerCase() // Convert the string to lowercase
    .replace(/[^\w\s-]/g, '') // Remove non-word characters
    .trim() // Trim leading/trailing spaces
    .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and hyphens with a single hyphen
}
export const feedbacks = [
  "How would you rate your overall experience?",
  "Was your blood collection / phlebotomy service satisfactory?",
];
export const feedbackQuestionAnswers = [
{
  question: "How would you rate your overall experience?",
  answers:["Exceeded expectation","Met Expectation","Below Expectation"]
},
{
  question:  "Was your blood collection / phlebotomy service satisfactory?",
  answers:["Yes","No"]
},
{
  question:"Would Recommend us to a loved one?",
  answers:["Yes","No"]
}
];

export const questions = [
  "Are you happy with the Report Turn Around Time?",
  "Do you need additional Support for inventory / consumables?",
  "Do you require further assistance for the logistics of sample pickups?",
  "Are there any delays in response from the Help desk?",
  "Do you need any additional support from our lab technical/Medical experts?",
];

export const displayApiError = (error) => {
  let errorMessages = [];

  if (typeof error === 'string') {
      errorMessages.push(error);
      
  } else if (typeof error === 'object' && error !== null) {
      const nestedErrors = error.errors;

      if (typeof nestedErrors === 'object' && nestedErrors !== null) {
          for (const field in nestedErrors) {
              if (Array.isArray(nestedErrors[field])) {
                  nestedErrors[field].forEach(msg => {
                      errorMessages.push(msg);
                  });
              }
          }
      } else if (typeof error.errors === 'string') {
           errorMessages.push(error.errors);
      }
  }

  if (errorMessages.length === 0) {
      errorMessages.push("An unexpected error occurred.");
  }

  errorMessages.forEach(msg => {
      toast.error(msg, {
          duration: 4000,
      });
  });
};