import cheerio from "cheerio";
import fs from "fs";
import { Analyzer } from './crawler';

interface Course {
    level: string;
    count: number;
}
interface CourseResult {
    time: number;
    data: Course[];
}

interface FileContent {
    [propName: number]: Course[];
}
export default class CourseAnalyzer implements Analyzer{
    private static instance: CourseAnalyzer;

    private constructor(){}

    static getInstance(){
        if(!CourseAnalyzer.instance){
            CourseAnalyzer.instance = new CourseAnalyzer()
        }
        return CourseAnalyzer.instance;
    }

    private getCourseInfo(html: string){
        const $ = cheerio.load(html);
        const courseCards = $('.course-card');
        const courseInfos: Course[] = [];
        courseCards.map((index, element) => {
            const desc = $(element).find('.one span');
            const [level, count] = desc.text().split('·');
            courseInfos.push({
                level,
                count: parseInt(count),
            })
        })
        return {
            time: new Date().getTime(),
            data: courseInfos,
        }
    }

    private generateJsonContent(courseResult: CourseResult, filePath: string) {
        let fileContent: FileContent = {};
        if(fs.existsSync(filePath)){
            fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
        fileContent[courseResult.time] = courseResult.data;
        return fileContent;
    }


    analyze(html: string, filePath: string){
        const courseResult = this.getCourseInfo(html);
        const fileContent = this.generateJsonContent(courseResult, filePath);
        return JSON.stringify(fileContent);
    }
}
