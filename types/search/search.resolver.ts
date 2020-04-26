import { getDataFromEbay } from './search.ebay';
import { getDataFromAmazon } from './search.amazon';

//search 
const search = async(_:any, args:any,ctx:any)=>{
    let searchResults: any = [];

    // timeout to be resolved after 10 seconds
    let timeOut = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{error:'Request time out.'}]);
        }, 10000)
    })

    // wait for the data to be returned with in specified time otherwise timeout
    let amazonData = await Promise.race([timeOut,getDataFromAmazon(args.item, args.chatId) ])
    let ebayData = await Promise.race([timeOut,getDataFromEbay(args.item, args.chatId) ])

    // push the results from each site to the results array
    searchResults.push(amazonData)
    searchResults.push(ebayData)

    return searchResults;
}

export default {
    Query: {
      search
    }
}