
import { buy_book } from "./BuyBook";

const purchase_book = ()=>{
    return {
      // type : "buyBook"
      type: buy_book,
    };
}

export {purchase_book}
