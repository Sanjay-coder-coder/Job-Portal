let jobs = []; // In-memory storage for jobs

class Job {
    constructor(id, jobCategory, jobDesignation, jobLocation, companyName, salary, applyBy, skillsRequired, numberOfOpenings) {
        this.id = id;
        this.jobCategory = jobCategory;
        this.jobDesignation = jobDesignation;
        this.jobLocation = jobLocation;
        this.companyName = companyName;
        this.salary = salary;
        this.applyBy = applyBy;
        this.skillsRequired = skillsRequired;
        this.numberOfOpenings = numberOfOpenings;
        this.applicants = [];
    }

    static addJob(jobData) {
        const id = jobs.length + 1;
        const newJob = new Job(id, ...Object.values(jobData));
        jobs.push(newJob);
        return newJob;
    }

    static findJobById(id) {
        return jobs.find(job => job.id === id);
    }

    static getAllJobs() {
        return jobs;
    }

    static deleteJob(id) {
    jobs = jobs.filter(job => job.id !== id); // Use the correct filtering logic
}
}

module.exports = Job;