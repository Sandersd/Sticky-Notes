Template.position.onRendered(function () {
	$('.modal').draggable({
		handle: '.modal-header',
		stop: function(e, t){
			var left = t.position.left;
			var top = t.position.top;
			Positions.update($(this).attr('id'),{$set:{left:left + 'px', top:top+ 'px'}});
		}
	})
});

Template.position.events ({
	'click .tablename': function (e, t) {
		e.preventDefault();
		e.stopPropagation();
		Session.set('editing_tablename', this._id);
	},

	'keyup .tablename': function(e, t){
		e.preventDefault();
		e.stopPropagation();
		if(e.which === 13){
			Positions.update(this._id, {$set: {name: t.find('.tablename').value}});
			Session.set('editing_tablename', null);
		}
	},

	'click .addfield': function(e, t) {
		e.preventDefault();
		e.stopPropagation();
		DBfields.insert({name: "New Point", tableid: this._id});
		Session.set('editing_field', this._id);
	},
	'click .close': function(e, t) {
		e.preventDefault();
		e.stopPropagation();
		Positions.remove({_id: this._id});
		
	}
});

Template.position.helpers({
	editing_tablename: function() {
		return Session.equals('editing_tablename',this._id);
	},
	dbfields: function() {
		return DBfields.find({tableid: this._id});
	}
});