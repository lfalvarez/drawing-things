QUnit.module( "Basics", {
	setup : function() {
		var element_to_which_the_graph_will_be_added = $('#persons_graph_test');
		this.people_mapper = new PeopleMapper(element_to_which_the_graph_will_be_added);

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
	assert.deepEqual(this.people_mapper.get_action(), "nothing");
});
QUnit.test('If I change the status to "add_person" and click in the graph then it adds a circle', function(assert){
	this.people_mapper.set_status('add_person');

	this.people_mapper.paper.trigger('blank:pointerclick', {}, 1, 100);
	assert.equal(this.people_mapper.graph.getElements().length, 1)
	var element = this.people_mapper.graph.getElements()[0];
	var circle = element.attr('circle');
	var position = element.get('position');
	assert.equal(position.x, 1)
	assert.equal(position.y, 100)
	assert.equal(this.people_mapper.get_action(), 'nothing');
});
QUnit.test('if status isnt set to add_person then it doesnt add anything', function(assert){
	this.people_mapper.graph.clear()
	this.people_mapper.paper.trigger('blank:pointerclick', {}, 1, 100);
	assert.equal(this.people_mapper.graph.getElements().length, 0)

})
QUnit.module("Graph with controls", {
	setup : function() {
		var element_to_which_the_graph_will_be_added = $('#persons_graph_test');
		var people_mapper = new PeopleMapper(element_to_which_the_graph_will_be_added);
		this.graph = people_mapper.graph;

	},
	teardown: function(){
	}
})
QUnit.test('graph has a current status', function(assert){
	assert.equal(this.graph.get_action(), "nothing")
})
QUnit.test('set current status', function(assert){
	this.graph.set_action('something');
	assert.equal(this.graph.get_action(),'something')
})