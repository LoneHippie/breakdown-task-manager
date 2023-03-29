export const model = 'text-davinci-003';

export const tokenLength = 200;

export const apiUrl = 'https://api.openai.com/v1/completions';

export const promptBases = {
   breakdownTask: `Given the following task in quotation marks, break the task down into a numbered list of steps on how to complete this task effectively with simple explanations. Start each step with the name of the step with bullet points underneath describing how to accomplish this step. Leave out any response that isn't part of this format:`
};
