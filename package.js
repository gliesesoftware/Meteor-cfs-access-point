Package.describe({
  name: 'gliese:cfs-access-point',
  version: '0.1.44',
  summary: 'Gliese flavour of CollectionFS, add ddp and http accesspoints (INTERNAL USE ONLY)',
  git: 'https://github.com/gliesesoftware/cfs-access-point.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // This imply is needed for tests, and is technically probably correct anyway.
  api.imply([
    'gliese:cfs-base'
  ]);

  api.use([
    //CFS packages
    'gliese:cfs-base@0.0.28',
    'gliese:cfs-file@0.1.16',
    //Core packages
    'check',
    'ejson',
    //Other packages
    'cfs:http-methods@0.0.27',
    'cfs:http-publish@0.0.13'
  ]);

  api.addFiles([
    'access-point-common.js',
    'access-point-handlers.js',
    'access-point-server.js'
  ], 'server');

  api.addFiles([
    'access-point-common.js',
    'access-point-client.js'
  ], 'client');
});

Package.onTest(function (api) {
  api.versionsFrom('1.0');

  api.use([
    //CFS packages
    'gliese:cfs-access-point',
    'gliese:cfs-core@0.0.2',
    'gliese:cfs-gridfs@0.0.0',
    //Core packages
    'test-helpers',
    'http',
    'tinytest',
    'underscore',
    'ejson',
    'ordered-dict',
    'random',
    'deps'
  ]);

  api.addFiles('tests/client-tests.js', 'client');
  api.addFiles('tests/server-tests.js', 'server');
});
