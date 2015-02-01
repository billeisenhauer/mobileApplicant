(function() {
  'use strict';

  angular.module('paApplicant').controller('JobDetailCtrl', ['$stateParams', 'applicantApi', JobDetailCtrl]);

  function JobDetailCtrl($stateParams, applicantApi) {
    var vm = this;
    var jobId = Number($stateParams.jobId);
    vm.jobDetail = applicantApi.getJobDetail(jobId);
  }

})();