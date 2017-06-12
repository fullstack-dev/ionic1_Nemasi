angular.module('app.controllers', [])

.controller('ListDetailCtrl', function ($state, $scope, $stateParams) {

    $scope.index = $stateParams.itemId;

})

.controller('ListCtrl', function ($state, $scope, $rootScope, $ionicLoading, $ionicViewService) {
	console.log("list");
    
    $scope.dataList=[];
    $scope.vote = 0;

    $scope.on("$ionicView.beforeEnter", function(event, data){
        console.log("beforeEnter");
    });

    $scope.recent_button = function() {
    	$scope.dataList=[];
    	$rootScope.show();

    	var StoriesObject = Parse.Object.extend("stories");
    	var query = new Parse.Query(StoriesObject);
    	query.equalTo("active", 1);
    	query.descending('createdAt');
    	query.find({
    		success: function(results) {
    			$rootScope.hide();
    			console.log("recent length: ", results.length);
    			for(var i = 0; i < results.length; i ++){
    				var object = results[i];
    				$scope.dataList.push({title:object.get("title"), desc:object.get("desc"), image:object.get("img"), link:object.get("link")});
    			}
    		},
    		error: function(error){
    			$rootScope.hide();
    			alert("error: " + error.code + " " + error.message);
    		}
    	});
    };

    $scope.popular_button = function(){
    	$scope.dataList=[];
    	$rootScope.show();

    	var StoriesObject = Parse.Object.extend("stories");
    	var VotesObject = Parse.Object.extend("votes");
    	
    	var query1 = new Parse.Query(StoriesObject);
    	var query2 = new Parse.Query(VotesObject);
    	query2.descending('views');
    	query2.descending('love');
    	query2.descending('hate');

    	// query1.equalTo('article', query1.id);
    	query1.equalTo(query2.article, query1.id);

    	query1.find({
    		success: function(results) {
    			$rootScope.hide();
    			console.log("popular length: ", results.length);
    			for(var i = 0; i < results.length; i ++){
    				var object = results[i];
    				$scope.dataList.push({title:object.get("title"), desc:object.get("desc"), image:object.get("img"), link:object.get("link")});
    			}
    		},
    		error: function(error){
    			$rootScope.hide();
    			alert("error: " + error.code + " " + error.message);
    		}
    	});
    };

    // $scope.alltime_button = function(){
    // 	$scope.dataList=[];
    // 	$rootScope.show();

    // 	var StoriesObject = Parse.Object.extend("stories");
    // 	var query = new Parse.Query(StoriesObject);
    // 	query.equalTo("active", 1);
    // 	query.descending('createdAt');
    // 	query.find({
    // 		success: function(results) {
    // 			$rootScope.hide();
    // 			console.log("all time length: ", results.length);
    // 			for(var i = 0; i < results.length; i ++){
    // 				var object = results[i];
    // 				$scope.dataList.push({title:object.get("title"), desc:object.get("desc"), image:object.get("img"), link:object.get("link")});
    // 			}
    // 		},
    // 		error: function(error){
    // 			$rootScope.hide();
    // 			alert("error: " + error.code + " " + error.message);
    // 		}
    // 	});
    // };

    $scope.clicker = function(data){
    	// alert('clicked: '+data.link);
    	// window.open(data.link, '_self');
        window.open(data.link, '_blank', 'location=no, toolbar=no');
        // cordova.InAppBrowser.open(data.link, '_self');
    };

    $scope.vote_upImage = function(data){
    	// alert('vote up clicked:');
    	$scope.vote += 1;
    };

    $scope.vote_downImage = function(data){
    	// alert('vote down clicked:');
    	$scope.vote -= 1;
    };

    // $scope.recent_button();
});