Template.home.helpers({
	positions: function () {
		return Positions.find();
	}
});

Template.home.events ({
	'dblclick .schema': function(e, t) {
		e.preventDefault();
		e.stopPropagation();
		if(e.target.className === 'container-fluid schema') {
			var id = Positions.insert({name: 'New Sticky', left: (e.pageX + 280) + 'px', top: (e.pageY) + 'px'});
			Session.set('editing_tablename', id);
		}
	}
})