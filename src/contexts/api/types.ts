interface Choice {
   finish_reason: string;
   index: number;
   logprops?: string;
   text: string;
}

interface Usage {
   completion_tokens: number;
   prompt_tokens: number;
   total_tokens: number;
}

export interface OpenAIResponse {
   choices: Choice[];
   created: number;
   id: string;
   model: string;
   object: string;
   usage: Usage;
}
