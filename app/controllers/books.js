import Ember from 'ember';

export default Ember.Controller.extend({
  visibleBooks: Ember.computed('model.[]', function() {
    let regex = new RegExp("Awesome");
    return this.get('model').filter(book => {
      return regex.test(book.get('title'));
    });
  }),
  actions: {
    newBook() {
      this.store.createRecord('book', {
        title: "Awesome Book"
      });
    }
  }
});
