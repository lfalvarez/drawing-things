var graph;
var paper;
var current_status;
$(function(){
	graph = new joint.dia.Graph;
	current_status = {
		'action' : 'nothing'
	};
	paper = new joint.dia.Paper({
	    el: $('#persons_graph'),
	    width: 600,
	    height: 200,
	    model: graph,
	    gridSize: 1,

	});
	paper.on('blank:pointerclick', function(evt, x, y){
		var person = new joint.shapes.basic.Circle({
			'position' : {
				'x':x,
				'y':y
			}
		});
		graph.addCell(person)
	})
})
