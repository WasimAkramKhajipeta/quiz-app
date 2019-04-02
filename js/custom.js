var vm=angular.module("quizApp",[]);
vm.controller("technologies",function($scope){
	$scope.technologyar=["HTML5","PHP"];
});
vm.controller("questions",function($scope){
	var index=0;
	$scope.questionar=[
	{
		question:'What does HTML stand for?',
			o1:'client side',
			o2:'serverside',
			o3:'database',
			o4:'none'
	},
	{
		question:'PHP is?',
			o1:'client side',
			o2:'serverside',
			o3:'database',
			o4:'none'
	},
	{
		question:'Java is?',
			o1:'client side',
			o2:'serverside',
			o3:'database',
			o4:'none'
	},
	{
		question:'css is?',
		o1:'client side',
		o2:'serverside',
		o3:'database',
		o4:'none'
	}
	];

	$scope.currentque=$scope.questionar[index];
		$scope.next=function(){
			if(index<$scope.questionar.length-1){
					index++;
		$scope.currentque=$scope.questionar[index];
		}
	}
		$scope.prev=function(){
				if(index>0){
				index--;
		$scope.currentque=$scope.questionar[index];
		}
	}
		$scope.currentq=function(code){
			index=code;
		$scope.currentque=$scope.questionar[index];

		}
	});