// 模块代码的类型描述文件，即amd，umd或者es6 module等模块代码如何描述类型
import jq from 'jquery';

jq(function(){
    jq('body').html('<div>888</div>')
    new jq.fn.init();
})
