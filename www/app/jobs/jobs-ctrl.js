(function() {
  'use strict';

  angular.module('paApplicant').controller('JobsCtrl', ['applicantApi', JobsCtrl]);

  function JobsCtrl(applicantApi) {
    var vm = this;
    vm.jobs = applicantApi.getJobs();
  }

})();