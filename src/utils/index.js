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