(function(){
	angular.module("mainModule")
		.controller("quizController",quizfn);
		function quizfn(){
			var vm=this;
			vm.name=["HTML5","CSS3","JAVASCRIPT","JQUERY","BOOTSTRAP","PSD","ANGULAR JS","PHP"];
		}
	
})();