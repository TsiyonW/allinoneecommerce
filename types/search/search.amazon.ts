const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })
const cheerio = require('cheerio')
 
 export const getDataFromAmazon = async(searchField:string, chatId:string)=>{
    let data: string[] = [];
    let amazonURL = "https://www.amazon.com"
    //get to amazon url and have the elements inside
    let searchResult = await nightmare
          .goto(amazonURL)
          .type('#twotabsearchtextbox', searchField)
          .click('input.nav-input')
          .wait('.s-desktop-content')
          .evaluate(() => {          
            let element:HTMLElement = document.querySelector('.s-desktop-content') as HTMLElement
            return element.innerHTML}
          )
          .end()
    //scrap         
    let $ = cheerio.load(searchResult);
    $('div[data-component-type = "s-search-result"]').each(async (i:any, elem:any)=>{
        let items = $.html(elem)
        let item = cheerio.load(items)

        let itemD = {} as any;
        itemD.chatId = chatId;
        itemD.uri = amazonURL+item('h2 a.a-text-normal').get(0).attribs.href;
        itemD.site = "Amazon"
        itemD.description = item('a.a-text-normal span.a-text-normal').text().trim();
        itemD.unitPrice = item('.a-offscreen').text().trim();
        itemD.rating = item('i span.a-icon-alt').text().trim();
        itemD.image = item('img').get(0).attribs.src;
        itemD.item = searchField;
        
        
        data.push(itemD)    
      })
      // console.log(data)
      return data
    }
  