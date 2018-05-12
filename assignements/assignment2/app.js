(function() {

'use strict';
 angular.module('app' ,[])
.controller('ToBuyController' , ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ListService', ListService);
//
 ToBuyController.$inject = ['ListService'] ;
 AlreadyBoughtController.$inject = ['ListService'] ;
function ToBuyController(ListService)
{

 var ctr1 = this ;
 var itemsBought = [];
ctr1.items =  ListService.getItemsToBuy() ;

 ctr1.remove =  function ( index ) {
  ctr1.messageLeft
      ListService.addItem(index );
   ListService.removItem( index  ) ;
if ( !ctr1.items.length  ) {
    ctr1.message = "Everything is bought!";
 }

}
}
function AlreadyBoughtController( ListService)
{

var ctr2 = this ;
 ctr2.items =  ListService.getItemsBought() ;

   ctr2.message = "Nothing bought yet.";



}
//
function ListService ()
{
 var service = this ;
 var msgLeft ;
 var msgRight = "Nothing bought yet."
 var itemsToBuy = [  { name: "compot", quantity: 10 } ,{ name: "cookies", quantity: 10 },
{ name: "chocolat", quantity: 10 }];
 var itemsBought = [];
 service.addItem = function (index) {
  var item =  itemsToBuy[index];
  itemsBought.push(item) ;
 };
service.removItem  = function( itemIndex ) {
 itemsToBuy.splice(itemIndex , 1) ;
 };
 service.getItemsToBuy = function( )
 {
   return   itemsToBuy;
 };
 service.getItemsBought = function( )
 {
  return   itemsBought ;
 };
 service.setMassage = function functionName() {
   if (!itemsBought.length) {

   }
 }
}
})();
