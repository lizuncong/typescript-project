
interface Print {
    (content: string): string;
    // name: string;
}
const print1: Print = (content) => {
    console.log('print content', content);
    return content
}

print1('my name is lzc')
