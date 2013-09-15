require.config({
  baseUrl: '/js',
  paths: {
    'jQuery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
    'angular': '//code.angularjs.org/1.2.0-rc.2/angular'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'jQuery': {'exports' : 'jQuery'}
  }
});

require(['jQuery', 'angular', 'app'] , function ($, angular, app) {
  $(function () { // using jQuery because it will run this even if DOM load already happened
    angular.bootstrap(document , ['app']);
  });
});