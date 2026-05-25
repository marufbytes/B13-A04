const jobContainer = document.getElementById("job-container");

let activeTab = "All";

function setActiveTab(tabName) {
    activeTab = tabName;
    renderJobs();
}

function updateCounts() {
    document.querySelector(".all-job").innerText = jobs.length;
    document.querySelector(".interview-job").innerText = jobs.filter(job => job.status === "Interview").length;
    document.querySelector(".rejected-job").innerText = jobs.filter(job => job.status === "Rejected").length;
}


function renderJobs() {
    jobContainer.innerHTML = "";

    let filteredJobs = jobs;

    if (activeTab === "Interview") {
        filteredJobs = jobs.filter(job => job.status === "Interview");
    }
    else if (activeTab === "Rejected") {
        filteredJobs = jobs.filter(job => job.status === "Rejected");
    }
    if (filteredJobs.length === 0) {
        jobContainer.innerHTML = `
        <div class="text-center mt-10 flex flex-col items-center">
            <img src="jobs.png" alt="" class="w-20 h-20 object-contain mx-auto">
            <h2 class="text-2xl font-bold mt-3">No jobs Available</h2>
            <p class="text-gray-500">You have not selected any job for this section yet.</p>
        </div>
        `;
        updateCounts();
        return;
    }


    for (const job of filteredJobs) {
        const div = document.createElement("div");
        

        div.innerHTML = `
            <div class="card bg-base-100 shadow-xl w-[90%] max-w-4xl mx-auto my-6 border border-gray-200">
                <div class="card-body">
                    <h2 class="card-title text-xl font-bold text-primary">${job.companyName}</h2>
                    <p class="text-lg font-semibold">${job.position}</p>
                    <p class="text-sm text-gray-500">${job.location}, ${job.type}, ${job.salary}</p>
                    <p class="text-gray-600 mt-2">${job.description}</p>
                    <div class="card-actions justify-end mt-4">
                        <button onclick="markInterview(${job.id})" class="btn btn-soft btn-accent">Interview</button>
                        <button onclick="markRejected(${job.id})" class="btn btn-soft btn-error">Rejected</button>
                    </div>
                </div>
            </div>
        `;

        jobContainer.append(div);
    }

    updateCounts();
}

function markInterview(id) {
    const job = jobs.find(job => job.id === id);
    job.status = "Interview";
    renderJobs();
}

function markRejected(id) {
    const job = jobs.find(job => job.id === id);
    job.status = "Rejected";
    renderJobs();
}

renderJobs();