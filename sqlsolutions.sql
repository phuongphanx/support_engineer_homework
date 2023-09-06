1. How many organizations do not have account plans?
SELECT COUNT(organizations.id)
FROM organizations
LEFT JOIN accounts ON organizations.id = accounts.organizationid
WHERE accounts.planname IS NULL;

2. How many organizations have more than one account plan?
SELECT organizations.id, COUNT(accounts.planname) AS plan_count
FROM organizations
JOIN accounts ON organizations.id = accounts.organizationid
GROUP BY organizations.id
HAVING COUNT(accounts.planname) > 1;

3. List all organizations that have only one account plan.
SELECT organizations.id, organizations.orgname
FROM organizations
LEFT JOIN accounts ON organizations.id = accounts.organizationid
GROUP BY organizations.id, organizations.orgname
HAVING COUNT(accounts.planname) = 1;

4. List all organizations that have the PASSWORDLESS feature set to true.
SELECT DISTINCT organizations.*
FROM organizations
JOIN accounts
ON organizations.id = accounts.organizationId
WHERE accounts.features LIKE '%"PASSWORDLESS":true%';