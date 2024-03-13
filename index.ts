import IFirstBlood from './src/types/IFirstBlood';
import ILine from './src/types/ILine';
import printResult from './src/printResult';
import readFile from './src/readFile';
import countFirstBloods from './src/countFirstBloods';

const PATH = './file/first-blood.txt';

(async function init() {
  try {
    const allLines: ILine[] | undefined = await readFile(PATH);
    if (allLines) {
      const firstBloods: IFirstBlood[] = countFirstBloods(allLines);
      printResult(firstBloods);
    }
  } catch(err) {
    console.error('UwuOops', err);
  }
})()