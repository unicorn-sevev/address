$(function () {
    let arr = [
        {name:'张晋铭',tell:18406585202,py:'zhangjinming'},
        {name:'高姣姣',tell:18406586002,py:'gaojiaojiao'},
        {name:'任洁芳',tell:18406584872,py:'renjiefang'},
        {name:'高鑫',tell:18406589246,py:'gaoxin'},
        {name:'张熙烨',tell:18406583215,py:'zhangxiye'},
        {name:'高志梅',tell:18406581942,py:'gaozhimei'},
        {name:'耿昊',tell:18406154872,py:'genghao'},
        {name:'李振龙',tell:18401648872,py:'lizhenlong'},
        {name:'咹',tell:18406587846,py:'an'},
        {name:'咘',tell:18414595202,py:'bu'},
        {name:'呲',tell:18414595202,py:'ci'},
        {name:'嗒',tell:18414595202,py:'da'},
        {name:'呃',tell:18406154902,py:'e'},
        {name:'啡',tell:18406585200,py:'fei'},
        {name:'咯',tell:18406154902,py:'ge'},
        {name:'哈',tell:18406154902,py:'ha'},
        {name:'哩',tell:18406154902,py:'li'},
        {name:'叽',tell:18406154902,py:'ji'},
        {name:'咔',tell:18406154902,py:'ka'},
        {name:'啦',tell:18406154902,py:'la'},
        {name:'咩',tell:18406154902,py:'mie'},
        {name:'哪',tell:18406154902,py:'na'},
        {name:'噢',tell:18406154902,py:'o'},
        {name:'呸',tell:18406157642,py:'pei'},
        {name:'呛',tell:18406154902,py:'qiang'},
        {name:'呥',tell:18406154902,py:'ran'},
        {name:'啥',tell:18406154902,py:'sha'},

    ];
    let main = $('main');
    let aside = $('.aside');
    let input = $('input');

    input.on('input',function () {
        let val = $(this).val();
        let newarr = arr.filter(ele=>ele.name.includes(val) || ele.py.includes(val));
        render(newarr)
    });

    render(arr);
    function render(arr) {
        main.empty();
        aside.empty();
        let person = {
        };
        arr.forEach(ele => {
            let firstChar = ele.py.charAt(0).toUpperCase();
            if (!person[firstChar]) {
                person[firstChar] = [];
            }
            person[firstChar].push(ele);
        })
        // console.log(Object.keys(person));
        let keysarr = Object.keys(person).sort();

        let html = '';
        let html1 =``;
        for (let i = 0; i < keysarr.length; i++) {
            let ele = keysarr[i];
            html1 +=`<li>${ele}</li>`;
            html += `<section><h2>${ele}</h2>`;
            for (let j = 0; j < person[ele].length; j++) {
                let info = person[ele][j];
                html += `<div><a href="tel:${info.tell}">${info.name}</a></div>`
            }
            html += `</section>`;
        }
        aside.html(html1);
        main.html(html);
    }
});

