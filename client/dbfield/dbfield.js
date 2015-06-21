Template.dbfield.events({
	'click .point': function(e, t) {
		e.preventDefault();
		e.stopPropagation();
		Session.set('editing_field', this._id);
	},
	'keyup .efield': function(e, t) {
		e.preventDefault();
		e.stopPropagation();
		var fieldname = t.find('.efield').value;
		if(fieldname && e.which === 13){
			DBfields.update(this._id, {$set:{name:fieldname}});
			Session.set('editing_field', null);
		}
	}
});

Template.dbfield.helpers({
	editing_field : function() {
		return Session.equals('editing_field', this._id);
	}
});

