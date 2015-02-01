(function() {
  'use strict';

  angular.module('paApplicant').factory('applicantApi', [applicantApi]);

  function applicantApi() {

    var jobs = [
      { title : 'Temporary, Part-time BAAS/BGS Program Assistant', id: 1 },
      { title : 'Library Security Officer Unarmed, Non-Commissioned', id: 2 },
      { title : 'Team Administrator - Men\'s & Women\'s Tennis', id: 3 },
      { title : 'Senior Marine Instrumentation Specialist', id: 4 },
      { title : 'Postdoctoral Research Associate - Physics and Astronomy', id: 5 },
      { title : 'Financial Specialist I - University', id: 6 }
    ];

    var faves = [
      { title : 'Team Administrator - Men\'s & Women\'s Tennis', id: 3 },
      { title : 'Senior Marine Instrumentation Specialist', id: 4 }
    ];

    function getJobs() {
      return jobs;
    }

    function getJobDetail(jobId) {
      var job = getJobForId(jobId);
      return {
        id : jobId,
        title : job.title,
        description : 'This is the job description.'
      }
    }

    function getJobForId(id) {
      var foundJob;
      jobs.forEach(function(job) {
        if (job.id == id) {
          foundJob = job;
        }
      });
      if (foundJob) {
        return foundJob
      } else {
        return {
          title : 'Job not found.'
        }
      }
    }

    function getFaves() {
      return faves;
    }

    return {
      getJobs: getJobs,
      getJobDetail: getJobDetail,
      getFaves: getFaves
    };
  }

})();