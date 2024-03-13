import IFirstBlood from './types/IFirstBlood';
import ILine from './types/ILine';
import allBosses from './constants/bosses';

export default function countFirstBloods(allLines: ILine[]): IFirstBlood[] {
  const supportedBosses = allBosses.reduce((acc: IFirstBlood[], boss) => {
    acc.push({
      boss,
      firstBloods: {}
    });
    return acc;
    }, []);

  allLines.forEach((line) => {
    const bossIndex = supportedBosses.findIndex(i => i.boss === line.boss);

    if (!bossIndex) return;
    if (supportedBosses[bossIndex].firstBloods[line.firstBlood]) {
      supportedBosses[bossIndex].firstBloods[line.firstBlood]+=1;
    } else {
      supportedBosses[bossIndex].firstBloods[line.firstBlood] = 1;
    }
  })

  return supportedBosses;
}