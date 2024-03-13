import allBosses from './constants/bosses';
import ILine from './types/ILine';

const regex = new RegExp(`^(\\d{2}\\.\\d{2}\\.\\d{4} \\d{2}:\\d{2}:\\d{2})\\s+(${allBosses.join('|')})\\s+(\\d{2}:\\d{2})(?!.*kill)\\s+([a-zA-Z]+)$`);

export default function parseFile(file: string): ILine[] {
  const allLines = file.split('\n');
  
  return allLines.reduce((acc: ILine[], cur: string) => {
    const match = cur.match(regex);
    if (match && match[4].trim() !== '') {
      const newLine: ILine = {
        boss: match[2],
        date: match[1],
        fightingTime: match[3],
        firstBlood: match[4],
      }
      acc.push(newLine);
    }
    return acc;
  }, []);
}