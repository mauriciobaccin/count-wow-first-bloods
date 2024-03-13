# First blood count

The primary objective of this project is to tally all the first bloods of each boss and should work for any guild, provided you have exported the statistic bosses data from Method Raid Tools (MRT).

### How to Configure/Run:
1. Ensure GIT and Node are installed and properly configured.
1. Clone the repository.
1. Run npm install.
1. Create a file (the name doesn't matter, as it can be changed within index.ts). Let's call it first-blood.txt.
1. Copy and paste a segment or all of the logs from MRT -> statistic bosses -> export into this file.
1. To support more bosses, add their names (important to match exactly as in MRT) inside the file constants/bosses.ts.
1. You will see the result printed in the console.
