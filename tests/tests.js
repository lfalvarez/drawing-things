QUnit.module( "Basics", {
	setup : function() {
		
		this.people_mapper = new PeopleMapper();

	},
	teardown: function(){
	}
});
QUnit.test( "there is a graph element", function( assert ) {
	assert.ok(this.people_mapper.graph);
	assert.ok(this.people_mapper.paper)
	assert.deepEqual(this.people_mapper.paper.model, this.people_mapper.graph)
});
QUnit.test("There is a current status object", function(assert){
	assert.ok(this.people_mapper.current_status);
	assert.deepEqual(this.people_mapper.current_status.action, "nothing");
});
QUnit.test('If I change the status to "add_person" and click in the graph then it adds a circle', function(assert){
	this.people_mapper.current_status = 'add_person';
	this.people_mapper.paper.trigger('blank:pointerclick', {}, 1, 100);
	assert.equal(this.people_mapper.graph.getElements().length, 1)
	var element = this.people_mapper.graph.getElements()[0];
	var circle = element.attr('circle');
	var position = element.get('position');
	assert.equal(position.x, 1)
	assert.equal(position.y, 100)

});