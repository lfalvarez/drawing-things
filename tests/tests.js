QUnit.module( "Basics" );
QUnit.test( "there is a graph element", function( assert ) {
	assert.ok(graph);
	assert.ok(paper)
	assert.deepEqual(paper.model, graph)
});
QUnit.test("There is a current status object", function(assert){
	assert.ok(current_status);
	assert.deepEqual(current_status.action, "nothing");
});
QUnit.test('If I change the status to "add_person" and click in the graph then it adds a circle', function(assert){
	current_status = 'add_person';
	paper.trigger('blank:pointerclick', {}, 1, 100);
	assert.equal(graph.getElements().length, 1)
	var element = graph.getElements()[0];
	var circle = element.attr('circle');
	var position = element.get('position');
	assert.equal(position.x, 1)
	assert.equal(position.y, 100)

});