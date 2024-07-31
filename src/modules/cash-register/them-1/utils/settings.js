import { headerSum } from "./data";
import kassaStore from '@/src/stores/kassa'

export const kassaSum = (totalAmountsObj, selectedProducts) => {
    

    let totalCost = 0;

    for (const key in totalAmountsObj) {
       totalCost += totalAmountsObj[key]
    }

    const newHeaderSum = headerSum.map(element => {

        let count = 0;

        if(element.title == 'К оплате'){
            count = totalCost;
        }
        else if(element.title == 'Наименование'){
            count = selectedProducts.length
        }
         
        return {
            id: element.id,
            title: element.title,
            amount: count
        }
        
    });

    return newHeaderSum

}
