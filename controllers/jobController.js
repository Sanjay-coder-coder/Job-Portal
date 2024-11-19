const Job = require('../models/Job');

exports.getAllJobs = (req, res) => {
    const jobs = Job.getAllJobs();
    res.render('jobs', { jobs });
};

exports.getJobDetails = (req, res) => {
    const jobId = parseInt(req.params.id);
    const job = Job.findJobById(jobId);
    
    if (job) {
        res.render('jobDetails', { job });
    } else {
        res.status(404).send('Job not found');
    }
};

exports.createJob = (req, res) => {
    const jobData = req.body; // Assume jobData is validated
    Job.addJob(jobData);
    res.redirect('/jobs');
};

exports.updateJob = (req, res) => {
    const jobId = parseInt(req.params.id);
    const job = Job.findJobById(jobId);
    
    if (job) {
        // Update job details
        Object.assign(job, req.body);
        res.redirect('/jobs');
    } else {
        res.status(404).send('Job not found');
    }
};

exports.deleteJob = (req, res) => {
    const jobId = parseInt(req.params.id);
    Job.deleteJob(jobId);
    res.redirect('/jobs');
};