App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexController=Ember.ObjectController.extend({
	inputVisible:false,
	hideInput: function(){
		this.set('inputVisible',false);
		
	},
	showInput: function(){
		this.set('inputVisible',true);
	}
});
