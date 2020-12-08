angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var review=[
        {title:'Mobile', type:'Review', location:'Bangalore', pricell:3000, priceul:6000, description:'Good'},
        {title:'Laptop', type:'Review', location:'Delhi', pricell:3000, priceul:6000, description:'Great'},
        {title:'Speaker', type:'Review', location:'Mumbai', pricell:3000, priceul:6000, description:'Best'}
        ];
    console.log(review);
    $scope.review=review;
    $scope.rowlimit=3;
});