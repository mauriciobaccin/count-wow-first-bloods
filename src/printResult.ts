import IFirstBlood from './types/IFirstBlood';

const log = console.log;
export default function printResult(firstBloods: IFirstBlood[]): void {
  firstBloods.forEach((fBlood: IFirstBlood) => {
    log('\n --------------------------- \n');
    log(`Boss: ${fBlood.boss} \n`);
    if (Object.keys(fBlood.firstBloods).length === 0 ) log('NONE');

    const sortedNames = Object.keys(fBlood.firstBloods).sort((a, b) => fBlood.firstBloods[b] - fBlood.firstBloods[a]);
    sortedNames.forEach(key => log(`${key}: ${fBlood.firstBloods[key]}`));
    
    const totalFB = sortedNames.reduce(((acc:number, cur) => {
      acc += fBlood.firstBloods[cur];
      return acc;
    }), 0);
    log(`\nTotal First Bloods ${totalFB}`);
  });
}