function runAction(t){t.data.message="The Following Order Item Quantities have been reduced:";let _=t.data.record,s=new Map,i=new Map;return t.data.related.Product2.forEach(n=>{i.set(n.Id,n)}),t.data.related.OrderItem.forEach(n=>{i.set(n.Product2Id,n)}),_.Missing_Product_1__c&&_.Missing_Quantity_1__c&&i.has(_.Missing_Product_1__c)&&(i.get(_.Missing_Product_1__c).Quantity-=_.Missing_Quantity_1__c>=0)&&(i.get(_.Missing_Product_1__c).Quantity-=_.Missing_Quantity_1__c,t.data.message+=`
`+s.get(_.Missing_Product_1__c).Name+": "+_.Missing_Quantity_1__c),_.Missing_Product_2__c&&_.Missing_Quantity_2__c&&i.has(_.Missing_Product_2__c)&&(i.get(_.Missing_Product_2__c).Quantity-=_.Missing_Quantity_2__c>=0)&&(i.get(_.Missing_Product_2__c).Quantity-=_.Missing_Quantity_2__c,t.data.message+=`
`+s.get(_.Missing_Product_2__c).Name+": "+_.Missing_Quantity_2__c),_.Missing_Product_3__c&&_.Missing_Quantity_3__c&&i.has(_.Missing_Product_3__c)&&(i.get(_.Missing_Product_3__c).Quantity-=_.Missing_Quantity_3__c>=0)&&(i.get(_.Missing_Product_3__c).Quantity-=_.Missing_Quantity_3__c,t.data.message+=`
`+s.get(_.Missing_Product_3__c).Name+": "+_.Missing_Quantity_3__c),_.Missing_Product_4__c&&_.Missing_Quantity_4__c&&i.has(_.Missing_Product_4__c)&&(i.get(_.Missing_Product_4__c).Quantity-=_.Missing_Quantity_4__c>=0)&&(i.get(_.Missing_Product_4__c).Quantity-=_.Missing_Quantity_4__c,t.data.message+=`
`+s.get(_.Missing_Product_4__c).Name+": "+_.Missing_Quantity_4__c),_.Missing_Product_5__c&&_.Missing_Quantity_5__c&&i.has(_.Missing_Product_5__c)&&(i.get(_.Missing_Product_5__c).Quantity-=_.Missing_Quantity_5__c>=0)&&(i.get(_.Missing_Product_5__c).Quantity-=_.Missing_Quantity_5__c,t.data.message+=`
`+s.get(_.Missing_Product_5__c).Name+": "+_.Missing_Quantity_5__c),_.Missing_Product_6__c&&_.Missing_Quantity_6__c&&i.has(_.Missing_Product_6__c)&&(i.get(_.Missing_Product_6__c).Quantity-=_.Missing_Quantity_6__c>=0)&&(i.get(_.Missing_Product_6__c).Quantity-=_.Missing_Quantity_6__c,t.data.message+=`
`+s.get(_.Missing_Product_6__c).Name+": "+_.Missing_Quantity_6__c),_.Missing_Product_7__c&&_.Missing_Quantity_7__c&&i.has(_.Missing_Product_7__c)&&(i.get(_.Missing_Product_7__c).Quantity-=_.Missing_Quantity_7__c>=0)&&(i.get(_.Missing_Product_7__c).Quantity-=_.Missing_Quantity_7__c,t.data.message+=`
`+s.get(_.Missing_Product_7__c).Name+": "+_.Missing_Quantity_7__c),_.Missing_Product_8__c&&_.Missing_Quantity_8__c&&i.has(_.Missing_Product_8__c)&&(i.get(_.Missing_Product_8__c).Quantity-=_.Missing_Quantity_8__c>=0)&&(i.get(_.Missing_Product_8__c).Quantity-=_.Missing_Quantity_8__c,t.data.message+=`
`+s.get(_.Missing_Product_8__c).Name+": "+_.Missing_Quantity_8__c),_.Missing_Product_9__c&&_.Missing_Quantity_9__c&&i.has(_.Missing_Product_9__c)&&(i.get(_.Missing_Product_9__c).Quantity-=_.Missing_Quantity_9__c>=0)&&(i.get(_.Missing_Product_9__c).Quantity-=_.Missing_Quantity_9__c,t.data.message+=`
`+s.get(_.Missing_Product_9__c).Name+": "+_.Missing_Quantity_9__c),_.Missing_Product_10__c&&_.Missing_Quantity_10__c&&i.has(_.Missing_Product_10__c)&&(i.get(_.Missing_Product_10__c).Quantity-=_.Missing_Quantity_10__c>=0)&&(i.get(_.Missing_Product_10__c).Quantity-=_.Missing_Quantity_10__c,t.data.message+=`
`+s.get(_.Missing_Product_10__c).Name+": "+_.Missing_Quantity_10__c),t.data.updateDeviceData=!0,t.data.updateDeviceData.Order=!0,t.data.updateDeviceData.OrderIem=!0,t.data.reprice=!0,t}
