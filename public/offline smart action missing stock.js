function runAction(s){s.data.message="The Order Item Quantities have been reduced";let _=s.data.record,i=new Map,t=new Map;return s.data.related.PricebookEntry.forEach(c=>{i.set(c.Product2Id,c)}),s.data.related.OrderItem.forEach(c=>{t.set(c.Product2Id,c)}),_.Missing_Product_1__c&&_.Missing_Quantity_1__c&&t.has(_.Missing_Product_1__c)&&i.has(_.Missing_Product_1__c)&&t.get(_.Missing_Product_1__c).Quantity-_.Missing_Quantity_1__c>=0&&!t.get(_.Missing_Product_1__c).Quantity_Adjusted__c&&(t.get(_.Missing_Product_1__c).Quantity-=_.Missing_Quantity_1__c,s.data.message+=`
`+i.get(_.Missing_Product_1__c).Name+": "+_.Missing_Quantity_1__c+t.get(_.Missing_Product_1__c).Quantity_Adjusted__c,t.get(_.Missing_Product_1__c).Quantity_Adjusted__c=!0),_.Missing_Product_2__c&&_.Missing_Quantity_2__c&&t.has(_.Missing_Product_2__c)&&i.has(_.Missing_Product_2__c)&&t.get(_.Missing_Product_2__c).Quantity-_.Missing_Quantity_2__c>=0&&t.get(_.Missing_Product_2__c).Quantity_Adjusted__c==!1&&(t.get(_.Missing_Product_2__c).Quantity-=_.Missing_Quantity_2__c,t.get(_.Missing_Product_2__c).Quantity_Adjusted__c=!0,s.data.message+=`
`+i.get(_.Missing_Product_2__c).Name+": "+_.Missing_Quantity_2__c),_.Missing_Product_3__c&&_.Missing_Quantity_3__c&&t.has(_.Missing_Product_3__c)&&i.has(_.Missing_Product_3__c)&&t.get(_.Missing_Product_3__c).Quantity-_.Missing_Quantity_3__c>=0&&!t.get(_.Missing_Product_3__c).Quantity_Adjusted__c&&(t.get(_.Missing_Product_3__c).Quantity-=_.Missing_Quantity_3__c,t.get(_.Missing_Product_3__c).Quantity_Adjusted__c=!0,s.data.message+=`
`+i.get(_.Missing_Product_3__c).Name+": "+_.Missing_Quantity_3__c),_.Missing_Product_4__c&&_.Missing_Quantity_4__c&&t.has(_.Missing_Product_4__c)&&i.has(_.Missing_Product_4__c)&&t.get(_.Missing_Product_4__c).Quantity-_.Missing_Quantity_4__c>=0&&!t.get(_.Missing_Product_4__c).Quantity_Adjusted__c&&(t.get(_.Missing_Product_4__c).Quantity-=_.Missing_Quantity_4__c,t.get(_.Missing_Product_4__c).Quantity_Adjusted__c=!0,s.data.message+=`
`+i.get(_.Missing_Product_4__c).Name+": "+_.Missing_Quantity_4__c),_.Missing_Product_5__c&&_.Missing_Quantity_5__c&&t.has(_.Missing_Product_5__c)&&i.has(_.Missing_Product_5__c)&&t.get(_.Missing_Product_5__c).Quantity-_.Missing_Quantity_5__c>=0&&(t.get(_.Missing_Product_5__c).Quantity-=_.Missing_Quantity_5__c,s.data.message+=`
`+i.get(_.Missing_Product_5__c).Name+": "+_.Missing_Quantity_5__c),_.Missing_Product_6__c&&_.Missing_Quantity_6__c&&t.has(_.Missing_Product_6__c)&&i.has(_.Missing_Product_6__c)&&t.get(_.Missing_Product_6__c).Quantity-_.Missing_Quantity_6__c>=0&&!t.get(_.Missing_Product_6__c).Quantity_Adjusted__c&&(t.get(_.Missing_Product_6__c).Quantity-=_.Missing_Quantity_6__c,t.get(_.Missing_Product_6__c).Quantity_Adjusted__c=!0,s.data.message+=`
`+i.get(_.Missing_Product_6__c).Name+": "+_.Missing_Quantity_6__c),_.Missing_Product_7__c&&_.Missing_Quantity_7__c&&t.has(_.Missing_Product_7__c)&&i.has(_.Missing_Product_7__c)&&t.get(_.Missing_Product_7__c).Quantity-_.Missing_Quantity_7__c>=0&&!t.get(_.Missing_Product_7__c).Quantity_Adjusted__c&&(t.get(_.Missing_Product_7__c).Quantity-=_.Missing_Quantity_7__c,t.get(_.Missing_Product_7__c).Quantity_Adjusted__c=!0,s.data.message+=`
`+i.get(_.Missing_Product_7__c).Name+": "+_.Missing_Quantity_7__c),_.Missing_Product_8__c&&_.Missing_Quantity_8__c&&t.has(_.Missing_Product_8__c)&&i.has(_.Missing_Product_8__c)&&t.get(_.Missing_Product_8__c).Quantity-_.Missing_Quantity_8__c>=0&&!t.get(_.Missing_Product_8__c).Quantity_Adjusted__c&&(t.get(_.Missing_Product_8__c).Quantity-=_.Missing_Quantity_8__c,t.get(_.Missing_Product_8__c).Quantity_Adjusted__c=!0,s.data.message+=`
`+i.get(_.Missing_Product_8__c).Name+": "+_.Missing_Quantity_8__c),_.Missing_Product_9__c&&_.Missing_Quantity_9__c&&t.has(_.Missing_Product_9__c)&&i.has(_.Missing_Product_9__c)&&t.get(_.Missing_Product_9__c).Quantity-_.Missing_Quantity_9__c>=0&&!t.get(_.Missing_Product_9__c).Quantity_Adjusted__c&&(t.get(_.Missing_Product_9__c).Quantity-=_.Missing_Quantity_9__c,t.get(_.Missing_Product_9__c).Quantity_Adjusted__c=!0,s.data.message+=`
`+i.get(_.Missing_Product_9__c).Name+": "+_.Missing_Quantity_9__c),_.Missing_Product_10__c&&_.Missing_Quantity_10__c&&t.has(_.Missing_Product_10__c)&&i.has(_.Missing_Product_10__c)&&t.get(_.Missing_Product_10__c).Quantity-_.Missing_Quantity_10__c>=0&&!t.get(_.Missing_Product_10__c).Quantity_Adjusted__c&&(t.get(_.Missing_Product_10__c).Quantity-=_.Missing_Quantity_10__c,t.get(_.Missing_Product_10__c).Quantity_Adjusted__c=!0,s.data.message+=`
`+i.get(_.Missing_Product_10__c).Name+": "+_.Missing_Quantity_10__c),s.data.updateDeviceData=!0,s.data.updateDeviceData.Order=!0,s.data.updateDeviceData.OrderIem=!0,s.data.reprice=!0,s}
