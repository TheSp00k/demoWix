/**
 * Created by Kestas on 1/18/2016.
 */
Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'root',
    controller: 'MainPageController'
});