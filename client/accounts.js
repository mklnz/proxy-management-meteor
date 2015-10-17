AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/sign-in',
  template: 'sign_in',
  redirect: '/profile'
});

var logout = function(){
  Router.go('/');
};

AccountsTemplates.configure({
  onLogoutHook: logout
});

AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    displayName: "Username",
    required: true,
    trim: true,
    errStr: 'No special characters allowed in username',
});
