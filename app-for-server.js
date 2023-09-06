// Function to load JSON data from a file
async function loadJSON(fileName) {
    try {
        const response = await fetch(fileName);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}

// Load organization and account data
const organizationsPromise = loadJSON('organizations.json');
const accountsPromise = loadJSON('accounts.json');

// Use the data when both promises resolve
Promise.all([organizationsPromise, accountsPromise]).then(([organizations, accounts]) => {

    // Initialize data maps for quick access
    const shopDomainsMap = {};
    const organizationsByName = {};
    const accountMap = {};

    // Populate data maps
    organizations.forEach(org => {
        shopDomainsMap[org.myshopifydomain] = org;
        organizationsByName[org.orgname] = org;
        const associatedAccount = accounts.find(account => account.organizationid === org.id);
        accountMap[org.id] = associatedAccount;
    });

    // Function to get optimization settings by myShopifyDomain
    function getOptimizationSettings() {
        const myShopifyDomainInput = document.getElementById('myShopifyDomain');
        const myShopifyDomain = myShopifyDomainInput.value;
        const organization = shopDomainsMap[myShopifyDomain];

        if (organization) {
            const setup = JSON.parse(organization.setup);
            const optimizationSettings = setup.optimization;
            document.getElementById('optimizationSettingsResult').textContent = JSON.stringify(optimizationSettings, null, 2);
        } else {
            alert('This organization does not exist.');
        }

        // Scroll to the results container
        const resultsContainer = document.querySelector('#result-container1');
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // Function to format a date in DD/MM/YYYY format
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    // Function to get organizations sorted by oldest to newest
    function getOrganizationsSortedByDate() {
        const organizationList = document.getElementById('organizationList');
        organizationList.innerHTML = ''; // Clear previous content
    
        // Create a map to store associated accounts by organization ID
        const accountsByOrgId = new Map();
    
        // Populate the map with associated accounts
        accounts.forEach(account => {
            if (!accountsByOrgId.has(account.organizationid)) {
                accountsByOrgId.set(account.organizationid, []);
            }
            accountsByOrgId.get(account.organizationid).push(account);
        });
    
        // Sort organizations by date
        const sortedOrganizations = organizations.slice().sort((a, b) => new Date(a.createddate) - new Date(b.createddate));
    
        sortedOrganizations.forEach(org => {
            const formattedDate = formatDate(org.createddate);
            const orgName = org.orgname;
            const associatedAccounts = accountsByOrgId.get(org.id) || [];
    
            if (associatedAccounts.length > 0) {
                associatedAccounts.forEach(associatedAccount => {
                    const orgStatus = associatedAccount.status;
                    const planName = associatedAccount.planname;
                    const accountId = associatedAccount.organizationid;
                    const listItem = document.createElement('li');
                    listItem.textContent = `Organization Name: ${orgName}, Date Created: ${formattedDate}, Status: ${orgStatus}, Plan Name: ${planName}`;
                    organizationList.appendChild(listItem);
                });
            } else {
                const listItem = document.createElement('li');
                listItem.textContent = `Organization Name: ${orgName}, Date Created: ${formattedDate}, Status: Account not found, Plan Name: N/A`;
                organizationList.appendChild(listItem);
            }
        });

        // Scroll to the results container
        const resultsContainer = document.querySelector('#result-container2');
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Function to get organizations with status "Cancelled"
    function getCancelledOrganizations() {
        const cancelledOrganizationsList = document.getElementById('cancelledOrganizationsList');
        cancelledOrganizationsList.innerHTML = ''; // Clear previous content

        const cancelledOrganizations = organizations.filter(org => {
            const associatedAccount = accountMap[org.id];
            return associatedAccount && associatedAccount.status === 'CANCELLED';
        });

        cancelledOrganizations.forEach(org => {
            const listItem = document.createElement('li');
            listItem.textContent = `Organization Name: ${org.orgname}`;
            cancelledOrganizationsList.appendChild(listItem);
        });

        // Scroll to the results container
        const resultsContainer = document.querySelector('#result-container3'); 
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // Function to get organization record in JSON format by orgName
    function getOrganizationRecord() {
        const orgNameInput = document.getElementById('orgName');
        const orgName = orgNameInput.value;
        const organization = organizationsByName[orgName];

        if (organization) {
            //uncomment the 2 following lines to use data from the accounts.json
            //const associatedAccount = accountMap[organization.id];
            //document.getElementById('organizationRecordResult').textContent = JSON.stringify(associatedAccount, null, 2);
            document.getElementById('organizationRecordResult').textContent = JSON.stringify(organization, null, 2);
        } else {
            alert('This organization does not exist.');
        }
    
        // Scroll to the results container
        const resultsContainer = document.querySelector('#result-container4');
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // Attach event listeners
    document.getElementById('getOptimizationSettingsButton').addEventListener('click', getOptimizationSettings);
    document.getElementById('getOrganizationsSortedByDateButton').addEventListener('click', getOrganizationsSortedByDate);
    document.getElementById('getCancelledOrganizationsButton').addEventListener('click', getCancelledOrganizations);
    document.getElementById('getOrganizationRecordButton').addEventListener('click', getOrganizationRecord);
});