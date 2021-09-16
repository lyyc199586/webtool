// To find the bilibili ups you subscribed
// inspired by 冬灰条, https://www.bilibili.com/video/BV1Y7411y7BD?spm_id_from=333.999.0.0

// obtain info
let pages = $('.be-pager-item');
let names = [];

console.warn('obtaining info of ups')

// loop over pages
for (let i = 0; i < parseInt(pages[pages.length - 1].innerText); i++) {
    // obtain names on the current page
    for (let j = 0; j < $('.fans-name').length; j++){
        names.push($('.fans-name')[j].innerHTML);
    }
    setTimeout($('.be-pager-next').click(),2000);
}