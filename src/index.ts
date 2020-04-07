import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { Summary } from './Summary'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { WinsAnalysis } from './analyzers/WinAnalysis'

const csvFileReader = new CsvFileReader('soccerData.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(new  WinsAnalysis('Man United'), new ConsoleReport())

summary.buildAndPrintReport(matchReader.matches)