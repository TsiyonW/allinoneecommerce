import { getDataFromEbay } from "./search.ebay";
import { getDataFromAmazon } from "./search.amazon";

//search
const search = async (_: any, args: any, ctx: any) => {
    let searchResults: any = [];

    // timeout to be resolved after 20 seconds so error will be returned from the race if 
    // the sites took more than 20 seconds to resolve
    let timeOut = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ error: "Request time out." }]);
        }, 20000);
    });

    // wait for the data to be returned with in specified time otherwise timeout
    // let amazonData: any = await getDataFromAmazon(args.item);
    let ebayData: any = await getDataFromEbay(args.item);

    // push the results from each site to the results array

    loop(ebayData, searchResults);
    // loop(amazonData, searchResults);

    // console.log(searchResults)
    return searchResults;
};

function loop(data: any, target: any) {
    for(let i = 0;i<6; i++){
        target.push(data[i])
    }
}

export default {
    Query: {
        search,
    },
};
