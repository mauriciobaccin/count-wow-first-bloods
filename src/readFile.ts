import parseFile from './parseFile';
import ILine from './types/ILine';

const fs = require('fs').promises;

export default async function readFile(path: string): Promise<ILine[]> {
  const data: string = await fs.readFile(path, { encoding: 'utf8' });
  const parsedFile: ILine[] = parseFile(data);
  return parsedFile;
}