import fs from 'fs'

const matches = fs.readFileSync('soccerData.csv', {
  encoding: 'utf-8'
})
.split('\n')
.map((row: string): string[] => {
  return row.split(',')
})

console.log(matches);
