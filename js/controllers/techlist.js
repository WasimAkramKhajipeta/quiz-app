(function(){
	angular.module("mainModule")
		.controller("techlistcon",techlistfn);
		function techlistfn(){
			var vm=this;
			this.tech_full=null;
			this.techlist_full=function(tech){
			this.tech_full=tech;
		  }
		
			vm.techlist=[
			{
				name:"HTML5",
				desc:"HTML5 is a markup language used for structuring and presenting content on the World Wide Web.It is the fifth and current version of the HTML standard. ",
				img:"images/html5-512-2.png"
			},
			{
				name:"CSS3",
				desc:"CSS3 is an abbreviation for Cascading Style Sheets, level 3, a declarative stylesheet language for structured documents. CSS3 may also mean: CSS3, the ICAO",
				img:"images/css3-512-2.png"},
			{
				name:"JAVASCRIPT",
				desc:"JavaScript is a scripting language for computers. It is often run in web browser applications to create dynamic content like a popup message or a live clock.",
				img:"images/js-512-2.png"
			},
			{
				name:"JQUERY",
				desc:"jQuery is a JavaScript library. It was created to make it easier and simpler to write JavaScript and HTML. JQuery works on most web browsers. It was invented by ",
				img:"images/jQuery-512.png"
			},
			{
				name:"BOOTSTRAP",
				desc:"Bootstrap is a free and open-source front-end web framework for designing websites and web applications.It contains HTML- and CSS-based design templates ",
				img:"images/bootstrap-512-2.png"
			},
			{
				name:"PSD",
				desc:"Photoshop is a popular image changing software package.It is widely used by photographers for photo editing (fixing colors, reducing noise, adding effects",
				img:"images/adobe-ps.png"
			},
			{
				name:"Angular JS",
				desc:"AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and",
				img:"images/AngularJS.png"
			},
			{
				name:"PHP",
				desc:"PHP is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language. Originally created ",
				img:"images/php_512.png"
			}
			];
		}
		
		vm.controller("questionlistcon",function($scope){
			var index = 0;
			$scope.questions=[
			{
				question:'What does HTML stand for?',
				o1:'Hyper Text Markup Language',
				o2:'Home Tool Markup Language',
				o3:'Hyperlinks and Text Markup Language',
				o4:'none'
			},
			{
				question:'Who is making the Web standards?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'How can you make a numbered list?',
					o1:'<dl>',
					o2:'<ol>',
					o3:' <ul>',
					o4:'none'
			},
			{
				question:'How can you make a bulleted list?',
					o1:'<dl>',
					o2:'<ol>',
					o3:' <ul>',
					o4:'none'
			},
			{
				question:'Which CSS property controls the text size?',
					o1:'text-size',
					o2:'text-style',
					o3:'font-size',
					o4:'font-style'
			},
			{
				question:'Which HTML tag is used to define an internal style sheet?',
					o1:'<script>',
					o2:'<css>',
					o3:'<style>',
					o4:'none'
			},
			{
				question:'Which HTML attribute is used to define inline styles?',
					o1:'font',
					o2:'class',
					o3:'style',
					o4:'styles'
			},
			{
				question:'What is the correct HTML for making a text area?',
					o1:'<input type="textbox">',
					o2:'<input type="textarea">',
					o3:'<textarea>',o4:'none'
			},
			{
				question:'What is the correct HTML for making a drop-down list?',
					o1:'<list>',
					o2:'<select>',
					o3:'<input type="list">',
					o4:'none'
			},
			{
				question:'What is the correct HTML for making a checkbox?',
				o1:'<checkbox>',
				o2:'<check>',
				o3:' <input type="check">',
				o4:'<input type="checkbox">'
			},
			{
				question:'Inline elements are normally displayed without starting a new line.',
				o1:'False',
				o2:'True',
				o3:'database',
				o4:'none'
			},
			{
				question:'Which of these elements are all <table> elements?',
					o1:'<table><head><tfoot>',
					o2:'<table><tr><tt>',
					o3:'<table><tr><td>',
					o4:'none'
			},
			{
				question:'Choose the correct HTML element to define emphasized text',
				o1:'italic',
				o2:'em',
				o3:'i',
				o4:'none'
			},
			{
				question:'What is the correct HTML for creating a hyperlink?',
					o1:'italic',
					o2:'em',
					o3:'i',
					o4:'none'
			
			},
			{
				question:'Choose the correct HTML element to define important text',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'What is the correct HTML for adding a background color?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'Choose the correct HTML element for the largest heading:',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'What is the correct HTML element for inserting a line break?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'What does CSS stand for?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'Inside which HTML element do we put the JavaScript?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'Bootstrap 3 is mobile-first',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'Which of the following is correct?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'What does PHP stand for?',
				 o1:'client side',
				 o2:'serverside',
				 o3:'database',
				 o4:'none'
			},
			{
				question:'AngularJS extends HTML with new attributes.',
				 o1:'client side',
				 o2:'serverside',
				 o3:'database',
				 o4:'none'
			},
			{
				question:'What Is Java?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			}
			];
			$scope.currentque=$scope.questions[index];
			
			$scope.next=function(){
				if(index<$scope.questions.length-1){
						index++;
						$scope.currentIndex = index;
					$scope.currentque=$scope.questions[index];
					}
			}
			
			$scope.prev=function(){
				if(index>0){
					index--;
				$scope.currentque=$scope.questions[index];
				}
			}
			
			$scope.currentq=function(index){
			
				$scope.currentIndex = index;
			$scope.currentque=$scope.questions[index];
			
			}
			 

			});
	
})();