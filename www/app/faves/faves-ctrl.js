(function() {
  'use strict';

  angular.module('paApplicant').controller('FavesCtrl', ['applicantApi', FavesCtrl]);

  function FavesCtrl(applicantApi) {
    var vm = this;
    vm.jobs = applicantApi.getFaves();
  }

})();