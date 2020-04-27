import { getDataFromEbay } from './search.ebay';
import { getDataFromAmazon } from './search.amazon';

//search 
const search = async(_:any, args:any,ctx:any)=>{
    let searchResults: any = [];

    // timeout to be resolved after 10 seconds
    let timeOut = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{error:'Request time out.'}]);
        }, 20000)
    })

    // wait for the data to be returned with in specified time otherwise timeout
    let amazonData: any = await getDataFromAmazon(args.item)
    let ebayData : any = await getDataFromEbay(args.item) 

    // push the results from each site to the results array
    

    loop(ebayData, searchResults);
    loop(amazonData, searchResults);
    

    // console.log(searchResults)
    return searchResults;
}

function loop(data: any, target:any){
    for(let i of data){
        if(target.length == 5){
            return;
        }
        target.push(i);
    }

}

export default {
    Query: {
      search
    }
}