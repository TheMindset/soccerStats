import fs from 'fs'
import { dateStringToDate } from './utils'

export abstract class CsvFileReader<T> {
  data: T[] = []

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
    .map(this.mapRow)

    /**
     * Au lieu d'appliquer directement la logique.
     * On exporte la logique dans une méthode qui sera appeler ensuite
     */
    // .map((row: string[]): MatchData => {
    //   return [
    //     dateStringToDate(row[0]),
    //     row[1],
    //     row[2],
    //     +row[3],
    //     +row[4],
    //     row[5] as MatchResult, // Type assertion ==> Nous disons que cette valeur est soit 'H', 'A', ou 'D'
    //     row[6]
    //   ]
    // })
  }
}