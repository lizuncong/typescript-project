import superagent from 'superagent';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import CourseAnalyzer from './courseAnalyzer';

export interface Analyzer {
    analyze: (html: string, filePath: string) => string;
}

class Crawler {
    private filePath = path.resolve(__dirname, './course.json');

    constructor(private analyzer: Analyzer, private url: string){
        this.initSpiderProcess();
    }

    private async initSpiderProcess() {
        const html = await this.getRawHtml();
        const fileContent = this.analyzer.analyze(html, this.filePath);
        this.writeFile(fileContent)
    }

    private async getRawHtml(){
        const { text } = await superagent.get(this.url);
        return text;
    }

    private writeFile(content: string){
        fs.writeFileSync(this.filePath, content)
    }
}


export default Crawler;
