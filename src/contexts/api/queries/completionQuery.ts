import { apiUrl, model, tokenLength } from '../constants';
import { OPENAI_API_KEY } from '@env';
import { OpenAIResponse } from '../types';

interface QueryProps {
   prompt: string;
}

type CompletionQuery = ({ prompt }: QueryProps) => Promise<OpenAIResponse>;

const completionQuery: CompletionQuery = async ({ prompt }) => {
   const requestBody = {
      prompt: prompt,
      model: model,
      max_tokens: tokenLength,
      temperature: 0,
      stream: false
   };

   const response: OpenAIResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify(requestBody)
   }).then((res) => res.json());

   return response;
};

export default completionQuery;
