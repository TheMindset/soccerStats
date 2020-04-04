import fs from 'fs'
import { CsvFileReader } from './CsvFileReader'

const reader = new CsvFileReader('soccerData.csv')
reader.read()

/**
 * Enum type - enumeration
 * Use it when you a fixed values that are all closely related
 */
enum matchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`);
