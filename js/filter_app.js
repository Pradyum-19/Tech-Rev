angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var review=[
        {title:'Mobile', type:'Review', rname:'Pradyum', pricell:5000, priceul:60000, description:'Good'},
        {title:'Laptop', type:'Review', rname:'Pradyum', pricell:30000, priceul:600000, description:'Great'},
        {title:'Speaker', type:'Review',rname:'Pradyum', pricell:3000, priceul:6000, description:'Best'}
        ];
    console.log(review);
    $scope.review=review;
    $scope.rowlimit=3;
});
