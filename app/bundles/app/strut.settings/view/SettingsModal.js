define(['libs/backbone'],
function(Backbone) {
	return Backbone.View.extend({
		tagName: 'div',
		className: 'modal fade settings-modal',
		events: {
			'click #saveSettings': '_save',
			'change #useImgur':'_toggleImgur'
		},

		initialize: function() {
 			this._template = JST['strut.settings/Modal'];
		},

		_save: function() {

		},

		_toggleImgur: function(event) {
			if($("#useImgur").is(':checked')) {
				this.model.trigger('imgur:enable');
			} else {
				this.model.trigger('imgur:disable');
			}
		},
		render: function() {
			this.$el.html(this._template({useImgUr: this.model.loadedSettings.useImgUr}));
			return this;
		}
	});
});