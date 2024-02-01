import { WinsAnalysis } from './analayzers/WinAnalysis';
import { MatchData } from "./MatchData";
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analayzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsHtmlReport(team: string) {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    )
  }

  constructor(public analayzer: Analayzer, public outputTarget: OutputTarget) {}

  builAndPrintReport(matches: MatchData[]): void{
    const output = this.analayzer.run(matches)
    this.outputTarget.print(output)
  }
}