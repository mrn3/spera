AutoForm.hooks({
  'Circles-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      Router.go('Circles.show', {_id: result});
    }
  }
});
