import { promptBases } from './constants';
import { completionQuery } from './queries';

interface GetTaskBreakdownProps {
   task: string;
}

type GetTaskBreakdown = ({ task }: GetTaskBreakdownProps) => Promise<string>;

export const getTaskBreakdown: GetTaskBreakdown = async ({ task }) => {
   const response = await completionQuery({ prompt: `${promptBases.breakdownTask} "${task}"` });

   return response.choices[0].text;
};
