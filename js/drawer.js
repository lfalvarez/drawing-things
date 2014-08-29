function PeopleMapper () {
	this.graph = new joint.dia.Graph;
	this.current_status = {
		'action' : 'nothing'
	};
	this.paper = new joint.dia.Paper({
	    el: $('#persons_graph'),
	    width: 600,
	    height: 200,
	    model: this.graph,
	    gridSize: 1,

	});
	this.paper.on('blank:pointerclick', function(evt, x, y){
		var person = new joint.shapes.basic.Circle({
			'position' : {
				'x':x,
				'y':y
			}
		});
		this.model.addCell(person)
	})
	
}