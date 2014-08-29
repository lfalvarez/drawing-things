var Graph = joint.dia.Graph;
Graph.prototype.current_status = {
	'action' : 'nothing'	
}
Graph.prototype.get_action = function(){
	return this.current_status.action;
}
Graph.prototype.set_action = function(action){
	this.current_status.action = action;
}
var Paper = joint.dia.Paper;

function PeopleMapper (el) {
	
	this.graph = new Graph;
	this.el = el;
	this.paper = new Paper({
	    el: el,
	    width: 600,
	    height: 200,
	    model: this.graph,
	    gridSize: 1,

	});

	this.get_action = function(){
		return this.graph.get_action()
	}
	this.set_status = function(status){
		this.graph.set_action(status)
	}
	this.paper.on('blank:pointerclick', function(evt, x, y){
		if (this.model.get_action()=="add_person"){
			var person = new joint.shapes.basic.Circle({
				'position' : {
					'x':x,
					'y':y
				}
			});
			this.model.addCell(person)
			this.model.set_action('nothing')
		}
	})
	
}