'use strict';

/**
 * @ngdoc overview
 * @name T6SLiveVideoClientApp
 * @description
 * # T6SLiveVideoClientApp
 *
 * Translations module of the application.
 */
angular
    .module('T6SLiveVideoClientApp')
    .config(['$translateProvider', function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: '/locales/locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('fr');
        $translateProvider.fallbackLanguage(['fr', 'en']);
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.useMissingTranslationHandlerLog();
    }]);

