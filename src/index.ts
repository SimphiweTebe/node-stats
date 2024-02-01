import { MatchReader } from "./MatchReader"
import { Summary } from "./Summary"

//satisy data reader interface
const matchReader = MatchReader.fromCsvFormat('./football.csv')
matchReader.load()

// create Match Summary
const summary = Summary.winsHtmlReport('Liverpool')

summary.builAndPrintReport(matchReader.matches)

