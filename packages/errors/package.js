Package.describe({
    name: 'yohahn:errors',
    version: '1.0.0',
    summary: 'A pattern to display application errors to the user'
});

Package.onUse(function(api) {
    api.versionsFrom('0.9.0');
    api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
    api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
    if (api.export) {
        api.export('Errors');
    }
});

Package.onTest(function(api) {
    api.use('yohahn:errors', 'client');
    api.use(['tinytest', 'test-helpers'], 'client');
    api.addFiles('errors_tests.js', 'client');
})