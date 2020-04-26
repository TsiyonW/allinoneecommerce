const Ebay = require('ebay-node-api');

 export const getDataFromEbay = async(searchField:string, limit: number = 5)=>{
  let data: string[] = [];
  try{
      //set client credentials
      const eBay = new Ebay({
      clientID: process.env.EBAY_CLIENT_ID || 'TsiyonWu-allinone-PRD-faa9faa19-a3438077',
      clientSecret: process.env.EBAY_CLIENT_SECRET || 'PRD-aa9faa190ccc-e39c-40d6-bc97-ff31',
      body: {
          grant_type: 'client_credentials',
          scope: 'https://api.ebay.com/oauth/api_scope'
      }
      });
      await eBay.getAccessToken() //generate credential token
      
      //wait till search results asre returned
      let searchResult = await eBay.searchItems({
          keyword: searchField,
          limit: limit
      })
      // Data is now in format of JSON
      let obj = JSON.parse(searchResult);
      
      let itemSummaries = obj.itemSummaries;
      
      for(let item of itemSummaries){
          let itemDetails = {} as any;
        //   itemDetails.user_id = userId;
          itemDetails.uri = item.itemHref;
          itemDetails.site = "eBay"
          itemDetails.description = item.title;
          itemDetails.unitPrice = `${item.price.value} ${item.price.currency}`;
          itemDetails.image = item.image.imageUrl;
          itemDetails.item = searchField;
          data.push(itemDetails);

      }
      //console.log(data)
      return data;

  }catch(error){
      console.log('error ', error);
      return;
  }
  
    }
