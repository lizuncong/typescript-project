import superagent from 'superagent';
import cheerio from 'cheerio';

interface Course {
    level: string;
    count: number;
}

class Crawler {
    // 要爬取的网页URL
    private url = 'https://coding.imooc.com/?c=fe';

    constructor(){
        this.getRawHtml();
    }

    async getRawHtml(){
        const { text } = await superagent.get(this.url);
        this.getCourseInfo(text);
    }

    getCourseInfo(html: string){
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

        console.log(courseInfos);
    }
}


const crawler = new Crawler();
