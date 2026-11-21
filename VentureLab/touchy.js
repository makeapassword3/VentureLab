// ============================================
// 1. FOUNDER INFORMATION
// ============================================

let founder = "Damilola";
let business = "VentureLab";
let age = 16;


// ============================================
// 2. WELCOME FUNCTION
// ============================================

function welcome() {
    alert(
        "Welcome to " + business +
        "\nFounder: " + founder +
        "\nAge: " + age
    );
}


// ============================================
// 3. BUSINESS IDEAS ARRAY
// ============================================

let businessIdeas = [
    "Clothing Business",
    "Website Design",
    "Social Media Marketing",
    "Tutoring",
    "Financial Consulting"
];

businessIdeas.push("Photography");

console.log(businessIdeas);


// ============================================
// 4. LOOP THROUGH BUSINESS IDEAS
// ============================================

for (let i = 0; i < businessIdeas.length; i++) {
    console.log("Business Idea " + (i + 1) + ": " + businessIdeas[i]);
}


// ============================================
// 5. CONDITIONAL STATEMENTS
// ============================================

let interest = "Finance";

if (interest === "Finance") {
    console.log("You could start a financial consulting business!");
} else if (interest === "Technology") {
    console.log("You could start a technology business!");
} else {
    console.log("Let's explore more business opportunities!");
}


// ============================================
// 6. CATEGORY SELECTION
// ============================================

let categories = document.querySelectorAll(".business-card input");

categories.forEach(function(category) {
    category.addEventListener("change", function() {
        console.log(category.value);
    });
});


// ============================================
// 7. BUSINESS INFORMATION DATABASE
// ============================================

let businessDetails = {

    "Website Development Business": {
        description: "Create professional websites for individuals and businesses.",
        customers: "Small businesses and entrepreneurs",
        income: "Website design fees"
    },

    "Student Budgeting Platform": {
        description: "Help students manage their money and savings.",
        customers: "Students and young adults",
        income: "Premium features and subscriptions"
    },

    "Clothing Brand": {
        description: "Create and sell your own clothing designs.",
        customers: "Fashion-conscious customers",
        income: "Product sales"
    },

    "Tutoring Service": {
        description: "Help students improve their academic performance.",
        customers: "Students and parents",
        income: "Tutoring fees"
    },

    "Mobile App Development": {
        description: "Create mobile applications that solve everyday problems.",
        customers: "Businesses and individual users",
        income: "Development fees and subscriptions"
    },

    "Software Solutions": {
        description: "Develop software to help businesses work more efficiently.",
        customers: "Small businesses and organizations",
        income: "Software licences and service fees"
    },

    "Financial Education Website": {
        description: "Teach young people about budgeting, saving and financial literacy.",
        customers: "Students and young adults",
        income: "Educational resources and subscriptions"
    },

    "Savings Calculator": {
        description: "Help users calculate savings goals and track progress.",
        customers: "Students and people saving money",
        income: "Premium features"
    },

    "Online Marketing Agency": {
        description: "Help businesses improve their online presence.",
        customers: "Small businesses",
        income: "Marketing service fees"
    },

    "E-commerce Store": {
        description: "Sell products through an online shop.",
        customers: "Online shoppers",
        income: "Product sales"
    },

    "Custom Accessories Business": {
        description: "Create and sell personalized accessories.",
        customers: "Fashion-conscious customers",
        income: "Product sales"
    },

    "Pet Care Business": {
        description: "Offer pet walking and basic pet care services.",
        customers: "Pet owners",
        income: "Service fees"
    },

    "Create a Digital Product": {
        description: "Develop digital resources such as templates and planners.",
        customers: "Students and entrepreneurs",
        income: "Digital product sales"
    },

    "Start a Tutoring Business": {
        description: "Provide educational support to students.",
        customers: "Students and parents",
        income: "Tutoring fees"
    },

    "Create a Small Online Store": {
        description: "Sell products through an online storefront.",
        customers: "Online shoppers",
        income: "Product sales"
    },

    "Offer Social Media Services": {
        description: "Help businesses manage their social media presence.",
        customers: "Small businesses",
        income: "Monthly service fees"
    }

};


// ============================================
// 8. BUSINESS IDEA GENERATOR
// ============================================

let generateButton = document.querySelector("#generateButton");

generateButton.addEventListener("click", function() {

    let selectedCategories = [];

    categories.forEach(function(category) {
        if (category.checked) {
            selectedCategories.push(category.value);
        }
    });

    let suggestions = [];

    if (selectedCategories.includes("technology")) {
        suggestions.push("Website Development Business");
        suggestions.push("Mobile App Development");
        suggestions.push("Software Solutions");
    }

    if (selectedCategories.includes("finance")) {
        suggestions.push("Student Budgeting Platform");
        suggestions.push("Financial Education Website");
        suggestions.push("Savings Calculator");
    }

    if (selectedCategories.includes("online")) {
        suggestions.push("Online Marketing Agency");
        suggestions.push("E-commerce Store");
    }

    if (selectedCategories.includes("products")) {
        suggestions.push("Clothing Brand");
        suggestions.push("Custom Accessories Business");
    }

    if (selectedCategories.includes("services")) {
        suggestions.push("Tutoring Service");
        suggestions.push("Pet Care Business");
    }

    if (selectedCategories.includes("unsure")) {
        suggestions.push("Start a Tutoring Business");
        suggestions.push("Create a Small Online Store");
        suggestions.push("Offer Social Media Services");
        suggestions.push("Start a Pet Care Business");
        suggestions.push("Create a Digital Product");
    }

    let results = document.querySelector("#results");

    let detailsView = document.querySelector("#businessDetailsView");

    detailsView.style.display = "none";
    results.style.display = "grid";

    if (suggestions.length === 0) {

        results.style.display = "block";
        results.textContent = "Please select at least one category.";

    } else {

        results.innerHTML = "<h2>Your Business Ideas</h2>";

        suggestions.forEach(function(idea) {

            let card = document.createElement("div");
            card.className = "idea-card";

            let heading = document.createElement("h3");
            heading.textContent = idea;

            let description = document.createElement("p");
            description.textContent =
                "Explore this business opportunity and develop your idea.";

            let button = document.createElement("button");
            button.className = "learn-button";
            button.textContent = "Learn More";

            button.addEventListener("click", function() {
                learnMore(idea);
            });

            card.appendChild(heading);
            card.appendChild(description);
            card.appendChild(button);

            results.appendChild(card);

        });

    }

});


// ============================================
// 9. LEARN MORE FUNCTION
// ============================================

function learnMore(idea) {

    let details = businessDetails[idea];

    if (!details) {
        alert("More information coming soon!");
        return;
    }

    document.querySelector("#results").style.display = "none";

    document.querySelector("#businessDetailsView").style.display = "block";

    document.querySelector("#detailTitle").textContent = idea;

    document.querySelector("#detailDescription").textContent =
        details.description;

    document.querySelector("#detailCustomers").textContent =
        details.customers;

    document.querySelector("#detailIncome").textContent =
        details.income;

}


// ============================================
// 10. BACK BUTTON
// ============================================

let backButton = document.querySelector("#backButton");

backButton.addEventListener("click", function() {

    document.querySelector("#businessDetailsView").style.display = "none";

    document.querySelector("#results").style.display = "grid";

});


// ============================================
// 11. WEBSITE NAVIGATION
// ============================================

let tabButtons = document.querySelectorAll(".tab-button");

let tabContents = document.querySelectorAll(".tab-content");

function openTab(tabName) {

    let selectedButton = document.querySelector(
        '.tab-button[data-tab="' + tabName + '"]'
    );

    let selectedSection = document.getElementById(tabName);

    if (!selectedButton || !selectedSection) {
        console.error("Navigation tab not found:", tabName);
        return;
    }

    tabButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    tabContents.forEach(function(section) {
        section.classList.remove("active");
    });

    selectedButton.classList.add("active");
    selectedSection.classList.add("active");

    if (tabName === "dashboard") {
        updateDashboard();
    }

}

tabButtons.forEach(function(button) {

    button.addEventListener("click", function() {
        openTab(button.dataset.tab);
    });

});


// ============================================
// 12. HOMEPAGE FEATURE CARDS
// ============================================

let featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach(function(card) {

    card.addEventListener("click", function() {
        openTab(card.dataset.tab);
    });

});


// ============================================
// 13. GET STARTED BUTTON
// ============================================

let startButton = document.querySelector("#startButton");

startButton.addEventListener("click", function() {
    openTab("ideas");
});


// ============================================
// 14. FINANCIAL CALCULATOR
// ============================================

let calculateButton = document.querySelector("#calculateButton");

calculateButton.addEventListener("click", function() {

    let fields = [
        "equipment",
        "marketing",
        "expenses",
        "price",
        "cost",
        "sales"
    ];

    let values = {};

    for (let id of fields) {

        let input = document.querySelector("#" + id);
        let rawValue = input.value.trim();

        if (rawValue === "") {
            document.querySelector("#financialResults").textContent =
                "Please complete all financial fields.";
            return;
        }

        let number = Number(rawValue);

        if (!Number.isFinite(number) || number < 0) {
            document.querySelector("#financialResults").textContent =
                "Please enter valid non-negative numbers.";
            return;
        }

        values[id] = number;

    }

    let financialResults = document.querySelector("#financialResults");

    if (values.cost > values.price) {
        financialResults.textContent =
            "Cost per sale cannot exceed the selling price.";
        return;
    }

    let startupCosts =
        values.equipment + values.marketing + values.expenses;

    let revenue = values.price * values.sales;

    let totalSalesCosts = values.cost * values.sales;

    let grossProfit = revenue - totalSalesCosts;

    let estimatedProfitAfterStartup = grossProfit - startupCosts;

    financialResults.innerHTML = `
        <h3>Your Financial Results</h3>
        <p>Startup Costs: $${startupCosts.toFixed(2)}</p>
        <p>Expected Revenue: $${revenue.toFixed(2)}</p>
        <p>Sales Costs: $${totalSalesCosts.toFixed(2)}</p>
        <p>Estimated Gross Profit: $${grossProfit.toFixed(2)}</p>
        <p>Estimated Amount After Startup Costs: $${estimatedProfitAfterStartup.toFixed(2)}</p>
        <p><small>Estimates only. Excludes taxes and other unlisted expenses.</small></p>
    `;

});


// ============================================
// 15. BUSINESS PLAN EDITING STATE
// ============================================

let editingPlanId = null;


// ============================================
// 16. BUSINESS PLAN STORAGE
// ============================================

function saveBusinessPlans(plans) {

    try {

        localStorage.setItem(
            "ventureLabPlans",
            JSON.stringify(plans)
        );

        return true;

    } catch (error) {

        console.error("Unable to save business plans:", error);

        alert("Your plans could not be saved. Browser storage may be full.");

        return false;

    }

}


function getBusinessPlans() {

    try {

        let plans = JSON.parse(
            localStorage.getItem("ventureLabPlans") || "[]"
        );

        if (!Array.isArray(plans)) {
            return [];
        }

        let changed = false;

        plans = plans.map(function(plan) {

            if (!plan.id) {
                plan.id = Date.now() + Math.random();
                changed = true;
            }

            if (!plan.status) {
                plan.status = "In Progress";
                changed = true;
            }

            if (!Array.isArray(plan.milestones)) {
                plan.milestones = [false, false, false, false, false];
                changed = true;
            }

            return plan;

        });

        if (changed) {
            saveBusinessPlans(plans);
        }

        return plans;

    } catch (error) {

        console.error("Unable to load saved plans:", error);

        return [];

    }

}


// ============================================
// 17. MIGRATE OLD SAVED PLAN
// ============================================

function migrateOldPlan() {

    let oldPlan = localStorage.getItem("ventureLabPlan");

    if (!oldPlan) return;

    try {

        let previousPlan = JSON.parse(oldPlan);

        let existingPlans = getBusinessPlans();

        if (
            previousPlan &&
            previousPlan.businessName &&
            !existingPlans.some(function(plan) {
                return plan.businessName === previousPlan.businessName;
            })
        ) {

            previousPlan.id = Date.now();
            previousPlan.status = "In Progress";
            previousPlan.milestones = [false, false, false, false, false];

            existingPlans.push(previousPlan);

            if (!saveBusinessPlans(existingPlans)) {
                return;
            }

        }

        localStorage.removeItem("ventureLabPlan");

    } catch (error) {

        console.error("Could not migrate previous plan:", error);

    }

}

migrateOldPlan();


// ============================================
// 18. BUSINESS PLAN FORM DATA
// ============================================

function getPlanFormData() {

    return {

        businessName: document.querySelector("#businessName").value.trim(),

        businessIdea: document.querySelector("#businessIdea").value.trim(),

        targetAudience: document.querySelector("#targetAudience").value.trim(),

        products: document.querySelector("#products").value.trim(),

        marketingStrategy: document.querySelector("#marketingStrategy").value.trim(),

        businessGoals: document.querySelector("#businessGoals").value.trim()

    };

}


// ============================================
// 19. BUSINESS PLAN TEMPLATES
// ============================================

let planTemplates = {

    online: {
        businessIdea: "An online business that sells products or services.",
        targetAudience: "Online customers and digital shoppers.",
        products: "Digital products, online services or physical products.",
        marketingStrategy: "Social media, search engines and online advertising.",
        businessGoals: "Build an online presence and attract regular customers."
    },

    products: {
        businessIdea: "A business that creates and sells physical products.",
        targetAudience: "Customers interested in the products being offered.",
        products: "Physical products and customized items.",
        marketingStrategy: "Social media, product photography and promotions.",
        businessGoals: "Develop a recognizable product brand."
    },

    services: {
        businessIdea: "A business that provides services to customers.",
        targetAudience: "Individuals and businesses requiring professional services.",
        products: "Professional services and customized packages.",
        marketingStrategy: "Referrals, local advertising and social media.",
        businessGoals: "Build a reliable customer base."
    },

    technology: {
        businessIdea: "A technology business that develops digital solutions.",
        targetAudience: "Businesses and individuals who need technology solutions.",
        products: "Software, websites or mobile applications.",
        marketingStrategy: "Online demonstrations, partnerships and digital marketing.",
        businessGoals: "Develop a useful technology product and attract users."
    }

};


// ============================================
// 20. APPLY BUSINESS PLAN TEMPLATE
// ============================================

let applyTemplateButton = document.querySelector("#applyTemplateButton");

applyTemplateButton.addEventListener("click", function() {

    let selectedTemplate = document.querySelector("#planTemplate").value;

    if (!selectedTemplate) {
        alert("Please choose a business template.");
        return;
    }

    let template = planTemplates[selectedTemplate];

    document.querySelector("#businessIdea").value = template.businessIdea;

    document.querySelector("#targetAudience").value = template.targetAudience;

    document.querySelector("#products").value = template.products;

    document.querySelector("#marketingStrategy").value = template.marketingStrategy;

    document.querySelector("#businessGoals").value = template.businessGoals;

    saveDraftAutomatically();

    alert("Your business template has been applied!");

});


// ============================================
// 21. AUTOMATIC DRAFT SAVING
// ============================================

let plannerFields = [
    "businessName",
    "businessIdea",
    "targetAudience",
    "products",
    "marketingStrategy",
    "businessGoals"
];


function saveDraftAutomatically() {

    let draft = getPlanFormData();

    try {

        localStorage.setItem(
            "ventureLabDraft",
            JSON.stringify(draft)
        );

        document.querySelector("#draftStatus").textContent =
            "Draft saved automatically.";

    } catch (error) {

        console.error("Draft could not be saved:", error);

        document.querySelector("#draftStatus").textContent =
            "Unable to save draft.";

    }

}


// SAVE WHEN USERS TYPE

plannerFields.forEach(function(id) {

    document.querySelector("#" + id).addEventListener("input", function() {

        saveDraftAutomatically();

    });

});


// RESTORE DRAFT

function restoreDraft() {

    try {

        let savedDraft = localStorage.getItem("ventureLabDraft");

        if (!savedDraft) return;

        let draft = JSON.parse(savedDraft);

        plannerFields.forEach(function(id) {

            if (draft[id] !== undefined) {
                document.querySelector("#" + id).value = draft[id];
            }

        });

        document.querySelector("#draftStatus").textContent =
            "Your previous draft has been restored.";

    } catch (error) {

        console.error("Unable to restore draft:", error);

    }

}

restoreDraft();


// ============================================
// 22. CREATE BUSINESS PLAN PREVIEW
// ============================================

let savePlanButton = document.querySelector("#savePlanButton");

savePlanButton.addEventListener("click", function() {

    let plan = getPlanFormData();

    if (Object.values(plan).some(value => !value)) {

        alert("Please complete every section before creating your plan.");

        return;

    }

    document.querySelector("#previewName").textContent = plan.businessName;

    document.querySelector("#previewIdea").textContent = plan.businessIdea;

    document.querySelector("#previewAudience").textContent = plan.targetAudience;

    document.querySelector("#previewProducts").textContent = plan.products;

    document.querySelector("#previewMarketing").textContent = plan.marketingStrategy;

    document.querySelector("#previewGoals").textContent = plan.businessGoals;

    document.querySelector("#planPreview").style.display = "block";

    document.querySelector("#planPreview").scrollIntoView({
        behavior: "smooth"
    });

});


// ============================================
// 23. EDIT BUSINESS PLAN PREVIEW
// ============================================

let editPreviewButton = document.querySelector("#editPreviewButton");

editPreviewButton.addEventListener("click", function() {

    document.querySelector("#planPreview").style.display = "none";

    document.querySelector(".planner-container").scrollIntoView({
        behavior: "smooth"
    });

});


// ============================================
// 24. SAVE OR UPDATE BUSINESS PLAN
// ============================================

let saveDraftButton = document.querySelector("#saveDraftButton");

saveDraftButton.addEventListener("click", function() {

    let businessPlans = getBusinessPlans();

    let plan = getPlanFormData();

    if (Object.values(plan).some(value => !value)) {

        alert("Please complete all sections before saving.");

        return;

    }

    if (editingPlanId !== null) {

        let index = businessPlans.findIndex(function(item) {
            return item.id === editingPlanId;
        });

        if (index === -1) {

            alert("The project could not be found.");

            editingPlanId = null;

            return;

        }

        plan.id = editingPlanId;

        plan.status = businessPlans[index].status;

        plan.milestones = businessPlans[index].milestones;

        businessPlans[index] = plan;

        alert("Business plan updated successfully!");

    } else {

        plan.id = Date.now();

        plan.status = "In Progress";

        plan.milestones = [false, false, false, false, false];

        businessPlans.push(plan);

        alert("New business plan saved successfully!");

    }

    if (!saveBusinessPlans(businessPlans)) return;

    editingPlanId = null;

    saveDraftAutomatically();

    document.querySelector("#planResults").textContent =
        "Your business plan has been saved.";

    updateDashboard();

});


// ============================================
// 25. LOAD SAVED BUSINESS PLAN
// ============================================

let loadDraftButton = document.querySelector("#loadDraftButton");

loadDraftButton.addEventListener("click", function() {

    let businessPlans = getBusinessPlans();

    if (businessPlans.length === 0) {

        alert("No saved business plans found.");

        return;

    }

    let plan = businessPlans[businessPlans.length - 1];

    fillPlanForm(plan);

    editingPlanId = plan.id;

    alert("Your latest saved plan has been loaded.");

});


// ============================================
// 26. FILL BUSINESS PLAN FORM
// ============================================

function fillPlanForm(plan) {

    document.querySelector("#businessName").value = plan.businessName;

    document.querySelector("#businessIdea").value = plan.businessIdea;

    document.querySelector("#targetAudience").value = plan.targetAudience;

    document.querySelector("#products").value = plan.products;

    document.querySelector("#marketingStrategy").value = plan.marketingStrategy;

    document.querySelector("#businessGoals").value = plan.businessGoals;

}


// ============================================
// 27. DOWNLOAD BUSINESS PLAN
// ============================================

let downloadPlanButton = document.querySelector("#downloadPlanButton");

downloadPlanButton.addEventListener("click", function() {

    let plan = getPlanFormData();

    if (!plan.businessName.trim()) {

        alert("Please enter a business name before downloading.");

        return;

    }

    let content = `
VENTURELAB
BUSINESS PLAN

================================

BUSINESS NAME
${plan.businessName}

BUSINESS IDEA
${plan.businessIdea}

TARGET AUDIENCE
${plan.targetAudience}

PRODUCTS AND SERVICES
${plan.products}

MARKETING STRATEGY
${plan.marketingStrategy}

BUSINESS GOALS
${plan.businessGoals}

================================

Created with VentureLab.
Your Idea. Your Business. Your Future.
`;

    let file = new Blob([content], { type: "text/plain" });

    let link = document.createElement("a");

    link.href = URL.createObjectURL(file);

    link.download = "VentureLab-Business-Plan.txt";

    link.click();

    URL.revokeObjectURL(link.href);

});


// ============================================
// 28. BUSINESS PLAN STORAGE
// ============================================

function getBusinessPlans() {

    try {

        let plans = JSON.parse(
            localStorage.getItem("ventureLabPlans") || "[]"
        );

        if (!Array.isArray(plans)) return [];

        let changed = false;

        plans = plans.map(function(plan) {

            if (!plan.id) {
                plan.id = Date.now() + Math.random();
                changed = true;
            }

            if (!plan.status) {
                plan.status = "In Progress";
                changed = true;
            }

            if (!Array.isArray(plan.milestones)) {
                plan.milestones = [false, false, false, false, false];
                changed = true;
            }

            return plan;

        });

        if (changed) saveBusinessPlans(plans);

        return plans;

    } catch (error) {

        console.error("Unable to load saved plans:", error);

        return [];

    }

}


function saveBusinessPlans(plans) {

    try {

        localStorage.setItem(
            "ventureLabPlans",
            JSON.stringify(plans)
        );

        return true;

    } catch (error) {

        console.error("Unable to save plans:", error);

        alert("Your plans could not be saved.");

        return false;

    }

}


// ============================================
// 29. UPDATE DASHBOARD
// ============================================

function updateDashboard() {

    let businessPlans = getBusinessPlans();

    let planCount = document.querySelector("#planCount");

    let completedCountElement = document.querySelector("#completedCount");

    let inProgressCountElement = document.querySelector("#inProgressCount");

    let averageProgressElement = document.querySelector("#averageProgress");

    let savedPlans = document.querySelector("#savedPlans");

    let search = document.querySelector("#searchPlans").value.toLowerCase().trim();

    let filter = document.querySelector("#filterPlans").value;


    // TOTAL PROJECTS

    planCount.textContent = businessPlans.length;


    // COMPLETED PROJECTS

    let completedProjects = businessPlans.filter(function(plan) {
        return plan.status === "Completed";
    });

    completedCountElement.textContent = completedProjects.length;


    // IN PROGRESS PROJECTS

    let inProgressProjects = businessPlans.filter(function(plan) {
        return plan.status === "In Progress";
    });

    inProgressCountElement.textContent = inProgressProjects.length;


    // AVERAGE PROGRESS

    let totalProgress = businessPlans.reduce(function(total, plan) {

        let completedMilestones = plan.milestones.filter(Boolean).length;

        return total + (completedMilestones / 5) * 100;

    }, 0);

    let averageProgress = businessPlans.length > 0
        ? Math.round(totalProgress / businessPlans.length)
        : 0;

    averageProgressElement.textContent = averageProgress + "%";


    // CLEAR PREVIOUS PROJECTS

    savedPlans.innerHTML = "";


    // SEARCH AND FILTER

    let filteredPlans = businessPlans.filter(function(plan) {

        let matchesSearch =
            plan.businessName.toLowerCase().includes(search);

        let matchesFilter =
            filter === "all" || plan.status === filter;

        return matchesSearch && matchesFilter;

    });

    if (filteredPlans.length === 0) {

        savedPlans.textContent = "No matching business projects found.";

        return;

    }


    // DISPLAY PROJECTS

    filteredPlans.forEach(function(plan) {

        let card = document.createElement("div");

        card.className = "saved-plan-card";

        let heading = document.createElement("h3");

        heading.textContent = plan.businessName;

        let description = document.createElement("p");

        description.textContent = plan.businessIdea;


        // MILESTONES

        let milestones = [
            "Business idea developed",
            "Target audience identified",
            "Products and services planned",
            "Marketing strategy created",
            "Financial goals established"
        ];

        let completedMilestones = plan.milestones.filter(Boolean).length;

        let progress = Math.round(
            (completedMilestones / 5) * 100
        );


        // PROGRESS BAR

        let progressText = document.createElement("p");

        progressText.className = "progress-text";

        progressText.textContent = "Project Progress: " + progress + "%";

        let progressContainer = document.createElement("div");

        progressContainer.className = "progress-container";

        let progressBar = document.createElement("div");

        progressBar.className = "progress-bar";

        progressBar.style.width = progress + "%";

        progressContainer.appendChild(progressBar);


        // MILESTONE CHECKBOXES

        let milestoneSection = document.createElement("div");

        milestoneSection.className = "milestone-section";

        let milestoneHeading = document.createElement("h4");

        milestoneHeading.textContent = "Business Milestones";

        milestoneSection.appendChild(milestoneHeading);

        milestones.forEach(function(milestone, index) {

            let label = document.createElement("label");

            let checkbox = document.createElement("input");

            checkbox.type = "checkbox";

            checkbox.checked = Boolean(plan.milestones[index]);

            checkbox.addEventListener("change", function() {

                let allPlans = getBusinessPlans();

                let currentPlan = allPlans.find(function(item) {
                    return item.id === plan.id;
                });

                if (!currentPlan) return;

                currentPlan.milestones[index] = checkbox.checked;

                if (!saveBusinessPlans(allPlans)) return;

                updateDashboard();

            });

            label.appendChild(checkbox);

            label.appendChild(document.createTextNode(milestone));

            milestoneSection.appendChild(label);

        });


        // STATUS

        let status = document.createElement("span");

        status.className = "project-status";

        status.textContent = plan.status;


        // EDIT BUTTON

        let editButton = document.createElement("button");

        editButton.className = "project-button";

        editButton.textContent = "Edit";

        editButton.addEventListener("click", function() {
            editPlan(plan.id);
        });


        // STATUS BUTTON

        let statusButton = document.createElement("button");

        statusButton.className = "project-button";

        statusButton.textContent =
            plan.status === "Completed"
                ? "Mark In Progress"
                : "Mark Completed";

        statusButton.addEventListener("click", function() {
            togglePlanStatus(plan.id);
        });


        // DELETE BUTTON

        let deleteButton = document.createElement("button");

        deleteButton.className = "project-button";

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            deletePlan(plan.id);
        });


        card.appendChild(heading);

        card.appendChild(description);

        card.appendChild(progressText);

        card.appendChild(progressContainer);

        card.appendChild(milestoneSection);

        card.appendChild(status);

        card.appendChild(editButton);

        card.appendChild(statusButton);

        card.appendChild(deleteButton);

        savedPlans.appendChild(card);

    });

}


// ============================================
// 30. EDIT BUSINESS PLAN
// ============================================

function editPlan(id) {

    let businessPlans = getBusinessPlans();

    let plan = businessPlans.find(function(item) {
        return item.id === id;
    });

    if (!plan) return;

    editingPlanId = id;

    fillPlanForm(plan);

    openTab("planner");

}


// ============================================
// 31. DELETE BUSINESS PLAN
// ============================================

function deletePlan(id) {

    if (!confirm("Are you sure you want to delete this business plan?")) {
        return;
    }

    let businessPlans = getBusinessPlans();

    businessPlans = businessPlans.filter(function(plan) {
        return plan.id !== id;
    });

    if (editingPlanId === id) {
        editingPlanId = null;
    }

    if (!saveBusinessPlans(businessPlans)) return;

    updateDashboard();

}


// ============================================
// 32. CHANGE BUSINESS STATUS
// ============================================

function togglePlanStatus(id) {

    let businessPlans = getBusinessPlans();

    let plan = businessPlans.find(function(item) {
        return item.id === id;
    });

    if (!plan) return;

    plan.status =
        plan.status === "Completed"
            ? "In Progress"
            : "Completed";

    if (!saveBusinessPlans(businessPlans)) return;

    updateDashboard();

}


// ============================================
// 33. DASHBOARD SEARCH
// ============================================

document.querySelector("#searchPlans").addEventListener("input", function() {
    updateDashboard();
});


// ============================================
// 34. DASHBOARD FILTER
// ============================================

document.querySelector("#filterPlans").addEventListener("change", function() {
    updateDashboard();
});


// ============================================
// 35. INITIAL DASHBOARD UPDATE
// ============================================

updateDashboard();


// ============================================
// 36. END OF VENTURELAB
// ============================================
// ============================================
// LESSON 25: BREAK-EVEN CALCULATOR
// ============================================

let breakEvenButton = document.querySelector("#breakEvenButton");

breakEvenButton.addEventListener("click", function() {

    let fixedCosts = document.querySelector("#fixedCosts").value;

    let sellingPrice = document.querySelector("#sellingPrice").value;

    let variableCost = document.querySelector("#variableCost").value;

    let results = document.querySelector("#breakEvenResults");


    // VALIDATE INPUTS

    if (
        fixedCosts.trim() === "" ||
        sellingPrice.trim() === "" ||
        variableCost.trim() === ""
    ) {

        results.textContent = "Please complete all fields.";

        return;

    }


    fixedCosts = Number(fixedCosts);

    sellingPrice = Number(sellingPrice);

    variableCost = Number(variableCost);


    if (
        !Number.isFinite(fixedCosts) ||
        !Number.isFinite(sellingPrice) ||
        !Number.isFinite(variableCost) ||
        fixedCosts < 0 ||
        sellingPrice < 0 ||
        variableCost < 0
    ) {

        results.textContent = "Please enter valid non-negative numbers.";

        return;

    }


    // CALCULATE CONTRIBUTION PER SALE

    let contribution = sellingPrice - variableCost;


    if (contribution <= 0) {

        results.textContent =
            "Your selling price must be greater than your variable cost.";

        return;

    }


    // CALCULATE BREAK-EVEN POINT

    let breakEvenUnits = Math.ceil(fixedCosts / contribution);

    let breakEvenRevenue = breakEvenUnits * sellingPrice;

// DISPLAY BREAK-EVEN RESULTS

results.innerHTML = "";

let heading = document.createElement("h3");

heading.textContent = "Your Break-Even Results";

results.appendChild(heading);


let fixedCostText = document.createElement("p");

fixedCostText.textContent =
    "Fixed Costs: $" + fixedCosts.toFixed(2);

results.appendChild(fixedCostText);


let contributionText = document.createElement("p");

contributionText.textContent =
    "Contribution Per Sale: $" + contribution.toFixed(2);

results.appendChild(contributionText);


let unitsText = document.createElement("p");

unitsText.textContent =
    "Break-Even Sales: " + breakEvenUnits + " units";

results.appendChild(unitsText);


let revenueText = document.createElement("p");

revenueText.textContent =
    "Break-Even Revenue: $" + breakEvenRevenue.toFixed(2);

results.appendChild(revenueText);


let explanation = document.createElement("p");

explanation.textContent =
    "Your business needs approximately " +
    breakEvenUnits +
    " sales to cover its fixed costs.";

results.appendChild(explanation);

});
   
// ============================================
// LESSON 26: VENTUREBOT ASSISTANT
// ============================================

let sendMessageButton = document.querySelector("#sendMessageButton");

let chatInput = document.querySelector("#chatInput");

let chatMessages = document.querySelector("#chatMessages");


// SEND MESSAGE

sendMessageButton.addEventListener("click", function() {

    let message = chatInput.value.trim();

    if (message === "") {
        return;
    }

    // DISPLAY USER MESSAGE

    let userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.textContent = message;

    chatMessages.appendChild(userMessage);

    chatInput.value = "";


    // GENERATE RESPONSE

    let response = getBotResponse(message);


    // DISPLAY BOT RESPONSE

    let botMessage = document.createElement("div");

    botMessage.className = "bot-message";

    botMessage.textContent = response;

    chatMessages.appendChild(botMessage);


    // SCROLL TO LATEST MESSAGE

    chatMessages.scrollTop = chatMessages.scrollHeight;

});


// PRESS ENTER TO SEND

chatInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        sendMessageButton.click();

    }

});


// ============================================
// VENTUREBOT RESPONSE SYSTEM
// ============================================

function getBotResponse(message) {

    let question = message.toLowerCase();


    if (
        question.includes("business idea") ||
        question.includes("what business")
    ) {

        return "Start by identifying a problem people experience. Consider tutoring, website design, digital products or local services. Which interests you most?";

    }


    if (
        question.includes("money") ||
        question.includes("budget") ||
        question.includes("cost")
    ) {

        return "Start by listing your equipment, marketing and other startup expenses. Then estimate your selling price and cost per sale. VentureLab's Financial Tools can help you calculate these numbers.";

    }


    if (
        question.includes("customer") ||
        question.includes("marketing")
    ) {

        return "Start by identifying your ideal customers. Find out where they spend time, what problems they have and how your business could help. You can begin by interviewing potential customers.";

    }


    if (
        question.includes("profit") ||
        question.includes("revenue")
    ) {

        return "Revenue is the money your business receives from sales. Profit is what remains after deducting costs. Try VentureLab's Financial Calculator to explore different scenarios.";

    }


    if (
        question.includes("business plan") ||
        question.includes("plan")
    ) {

        return "A good business plan explains your business idea, target audience, products or services, marketing strategy and financial goals. Try VentureLab's Business Planner.";

    }


    if (
        question.includes("hello") ||
        question.includes("hi")
    ) {

        return "Hello! Welcome to VentureBot. What business idea are you exploring today?";

    }


    return "That's an interesting question! Try asking me about business ideas, startup costs, marketing, customers or business planning.";

}
// ============================================
// LESSON 27: USER PROFILE
// ============================================

let saveProfileButton = document.querySelector("#saveProfileButton");

let profileName = document.querySelector("#profileName");

let profileEmail = document.querySelector("#profileEmail");

let profileResults = document.querySelector("#profileResults");


// SAVE PROFILE

saveProfileButton.addEventListener("click", function() {

    let name = profileName.value.trim();

    let email = profileEmail.value.trim();

    if (!name || !email) {

        profileResults.textContent =
            "Please complete both fields.";

        return;

    }

    let profile = {

        name: name,

        email: email

    };

    localStorage.setItem(
        "ventureLabProfile",
        JSON.stringify(profile)
    );

    profileResults.textContent =
        "Your profile has been saved successfully!";

});


// LOAD PROFILE

function loadProfile() {

    let savedProfile = localStorage.getItem("ventureLabProfile");

    if (!savedProfile) return;

    let profile = JSON.parse(savedProfile);

    profileName.value = profile.name;

    profileEmail.value = profile.email;

    profileResults.textContent =
        "Welcome back, " + profile.name + "!";

}

loadProfile();