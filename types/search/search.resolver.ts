import { getDataFromEbay } from './search.ebay';
import { getDataFromAmazon } from './search.amazon';

//search 
const search = async(_:any, args:any,ctx:any)=>{
    let searchResults: string[] = [];
    // we will wait for the data to be returned
    let amazonData = await getDataFromAmazon(args.item, ctx.user_id)
    let ebayData = await getDataFromEbay(args.item, ctx.user_id)

    if(amazonData){
        searchResults.push(...amazonData)
    }
    if(ebayData){
        searchResults.push(...ebayData)
    }
    return searchResults;
}

export default {
    Query: {
      search
    }
}