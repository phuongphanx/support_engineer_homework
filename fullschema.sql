-- Create the 'organizations' table
CREATE TABLE organizations (
    createdDate TIMESTAMP,
    updatedDate TIMESTAMP,
    deletedAt TIMESTAMP,
    id VARCHAR(36) PRIMARY KEY,
    orgName VARCHAR(255),
    __shopifyStoreId__ VARCHAR(255),
    myShopifyDomain VARCHAR(255),
    numBillingRetries INT,
    numFailedCyclesBeforeCancel INT,
    delayBetweenRetries INT,
    logo VARCHAR(255),
    billingTime TIME,
    billingTimezone VARCHAR(255),
    initialSubscriptionImportComplete BOOLEAN,
    monthly_fee DECIMAL(10, 2),
    per_transaction_fee DECIMAL(10, 2),
    per_transaction_percentage_fee DECIMAL(5, 2),
    billing_start_date DATE,
    account TEXT,
    alloyUserId VARCHAR(36),
    activeWorkflows TEXT,
    setup TEXT,
    outOfStockBehavior TEXT,
    cancellationMessage TEXT,
    hasVisitedRetention BOOLEAN,
    rewardsPointMeaningId VARCHAR(36),
    hasOTPEnabled BOOLEAN,
    instagramUserData TEXT,
    lookerDashboardPrefix VARCHAR(255)
);

-- Insert data into the 'organizations' table
INSERT INTO organizations (
    createdDate,
    updatedDate,
    deletedAt,
    id,
    orgName,
    __shopifyStoreId__,
    myShopifyDomain,
    numBillingRetries,
    numFailedCyclesBeforeCancel,
    delayBetweenRetries,
    logo,
    billingTime,
    billingTimezone,
    initialSubscriptionImportComplete,
    monthly_fee,
    per_transaction_fee,
    per_transaction_percentage_fee,
    billing_start_date,
    account,
    alloyUserId,
    activeWorkflows,
    setup,
    outOfStockBehavior,
    cancellationMessage,
    hasVisitedRetention,
    rewardsPointMeaningId,
    hasOTPEnabled,
    instagramUserData,
    lookerDashboardPrefix
) VALUES
    ('2023-01-20 4:07:20', '2023-01-20 5:14:51', NULL, 'cce0223a-fcac-4953-9137-3c5c10c158c3', 'Test Account 1', '25571033181', 'test-account-1.myshopify.com', 3, 101, 86400, NULL, '9:00:00', 'America/Los_Angeles', FALSE, NULL, NULL, NULL, NULL, '{}', NULL, '{}', '{"selectedSellingPlanId":"gid://shopify/SellingPlanGroup/366280870","hasProductSelected":true,"snippetsThemeId":"","renderingThemeId":"","isSetupFinished":false,"optimization":{"shipping":false,"theming":false,"transaction":false,"integrations":false}}', 'CREATE_ALWAYS', NULL, TRUE, NULL, FALSE, '{}', '/embed/dashboards-next/28?embed_domain='),
    ('2023-01-20 0:17:02', '2023-01-20 0:44:55', NULL, '75f223ec-2ede-4b38-9096-f9333d4141c7', 'Test Account 2', '35850977413', 'test-account-2.myshopify.com', 3, 101, 86400, NULL, '9:00:00', 'America/New_York', FALSE, NULL, NULL, NULL, NULL, '{}', NULL, '{}', '{"selectedSellingPlanId":"gid://shopify/SellingPlanGroup/208633989","hasProductSelected":true,"snippetsThemeId":"122514735237","renderingThemeId":"122514735237","isSetupFinished":true,"optimization":{"shipping":true,"theming":true,"transaction":true,"integrations":true,"retention":true}}', 'CREATE_ALWAYS', NULL, FALSE, NULL, FALSE, '{}', '/embed/dashboards-next/28?embed_domain='),
    ('2023-01-19 13:12:39', '2023-01-19 13:12:39', NULL, 'f7ccfc71-1858-40f4-8d03-77e3d1efb86c', 'Test Account 3', '59308736557', 'test-account-3.myshopify.com', 3, 101, 86400, NULL, '9:00:00', 'Europe/Berlin', FALSE, NULL, NULL, NULL, NULL, '{}', NULL, '{}', '{"selectedSellingPlanId":"" ,"hasProductSelected":false,"snippetsThemeId":"","renderingThemeId":"","isSetupFinished":false,"optimization":{"shipping":false,"theming":false,"transaction":false,"integrations":false}}', 'CREATE_ALWAYS', NULL, FALSE, NULL, FALSE, '{}', '/embed/dashboards-next/28?embed_domain='),
    ('2023-01-19 4:55:25', '2023-01-19 4:55:25', NULL, '53980994-173e-4620-b560-2c2c437953ec', 'Test Account 4', '25729722', 'test-account-4.myshopify.com', 3, 101, 86400, NULL, '9:00:00', 'Australia/Sydney', FALSE, NULL, NULL, NULL, NULL, '{}', NULL, '{}', '{"selectedSellingPlanId":"" ,"hasProductSelected":false,"snippetsThemeId":"","renderingThemeId":"","isSetupFinished":false,"optimization":{"shipping":false,"theming":false,"transaction":false,"integrations":false}}', 'CREATE_ALWAYS', NULL, FALSE, NULL, FALSE, '{}', '/embed/dashboards-next/28?embed_domain='),
    ('2023-01-19 1:54:32', '2023-01-19 14:56:28', NULL, 'c535b056-fe20-4409-ab16-a4b7c5e7dff6', 'Test Account 5', '50788368575', 'test-account-5.myshopify.com', 3, 101, 86400, NULL, '9:00:00', 'America/New_York', FALSE, NULL, NULL, NULL, NULL, '{}', NULL, '{}', '{"selectedSellingPlanId":"gid://shopify/SellingPlanGroup/614858943","hasProductSelected":true,"snippetsThemeId":"","renderingThemeId":"","isSetupFinished":false,"optimization":{"shipping":false,"theming":false,"transaction":false,"integrations":false}}', 'CREATE_ALWAYS', NULL, FALSE, NULL, FALSE, '{}', '/embed/dashboards-next/28?embed_domain='),
    ('2023-01-18 21:42:39', '2023-01-18 21:46:48', NULL, '788f31b6-1418-452e-9064-28041319523d', 'Test Account 6', '68566221112', 'test-account-6.myshopify.com', 3, 101, 86400, NULL, '9:00:00', 'America/New_York', FALSE, NULL, NULL, NULL, NULL, '{}', '63c868c71275a771dcc6fe7b', '{}', '{"selectedSellingPlanId":"" ,"hasProductSelected":false,"snippetsThemeId":"","renderingThemeId":"","isSetupFinished":false,"optimization":{"shipping":false,"theming":false,"transaction":false,"integrations":false}}', 'CREATE_ALWAYS', NULL, FALSE, NULL, FALSE, '{}', '/embed/dashboards-next/28?embed_domain='),
    ('2023-01-18 18:25:24', '2023-01-18 18:25:27', NULL, 'adc50e61-6072-410e-9936-162ce46982ce', 'Test Account 7', '70714786071', 'test-account-7.myshopify.com', 3, 101, 86400, NULL, '9:00:00', 'America/New_York', FALSE, NULL, NULL, NULL, NULL, '{}', NULL, '{}', '{"selectedSellingPlanId":"" ,"hasProductSelected":false,"snippetsThemeId":"","renderingThemeId":"","isSetupFinished":false,"optimization":{"shipping":false,"theming":false,"transaction":false,"integrations":false}}', 'CREATE_ALWAYS', NULL, FALSE, NULL, FALSE, '{}', '/embed/dashboards-next/28?embed_domain='),
    ('2023-01-18 18:24:25', '2023-01-18 18:24:40', NULL, '126c230a-f07c-4416-9406-c3758b4be772', 'Test Account 8', '69435326771', 'test-account-8.myshopify.com', 3, 101, 86400, NULL, '9:00:00', 'America/New_York', FALSE, NULL, NULL, NULL, NULL, '{}', NULL, '{}', '{"selectedSellingPlanId":"" ,"hasProductSelected":false,"snippetsThemeId":"","renderingThemeId":"","isSetupFinished":false,"optimization":{"shipping":false,"theming":false,"transaction":false,"integrations":false}}', 'CREATE_ALWAYS', NULL, FALSE, NULL, FALSE, '{}', '/embed/dashboards-next/28?embed_domain='),
    ('2023-01-18 14:29:26', '2023-01-18 14:31:15', NULL, '8533ba30-ad82-41e6-9825-af3c2122d95f', 'Test Account 9', '8009744461', 'test-account-9.myshopify.com', 3, 101, 86400, NULL, '9:00:00', 'America/New_York', FALSE, NULL, NULL, NULL, NULL, '{}', NULL, '{}', '{"selectedSellingPlanId":"gid://shopify/SellingPlanGroup/223150157","hasProductSelected":true,"snippetsThemeId":"43449647181","renderingThemeId":"","isSetupFinished":false,"optimization":{"shipping":false,"theming":false,"transaction":false,"integrations":false}}', 'CREATE_ALWAYS', NULL, FALSE, NULL, FALSE, '{}', '/embed/dashboards-next/28?embed_domain='),
    ('2023-01-18 3:54:45', '2023-01-18 3:54:45', NULL, '88684712-d564-41be-b37f-4e8084439806', 'Test Account 10', '70699778363', 'test-account-10.myshopify.com', 3, 101, 86400, NULL, '9:00:00', 'America/New_York', FALSE, NULL, NULL, NULL, NULL, '{}', NULL, '{}', '{"selectedSellingPlanId":"" ,"hasProductSelected":false,"snippetsThemeId":"","renderingThemeId":"","isSetupFinished":false,"optimization":{"shipping":false,"theming":false,"transaction":false,"integrations":false}}', 'CREATE_ALWAYS', NULL, FALSE, NULL, FALSE, '{}', '/embed/dashboards-next/28?embed_domain=');

-- Create the 'accounts' table
CREATE TABLE accounts (
    createdDate TIMESTAMP,
    updatedDate TIMESTAMP,
    deletedAt TIMESTAMP,
    id VARCHAR(36) PRIMARY KEY,
    shopifyId VARCHAR(255),
    __uniqueShopifyId__ VARCHAR(255),
    receivedFromShopifyDate TIMESTAMP,
    shopifyUpdateDate TIMESTAMP,
    planName VARCHAR(255),
    status VARCHAR(255),
    approvedAt TIMESTAMP,
    trialDays INT,
    usageLineItemShopifyId INT,
    planFee DECIMAL(10, 2),
    transactionFee DECIMAL(10, 2),
    percentageFee DECIMAL(5, 2),
    organizationId VARCHAR(36),
    features TEXT,
    confirmationUrl VARCHAR(255),
    trialPeriodStart TIMESTAMP,
    trialPeriodEnd TIMESTAMP,
    reportUsageAt TIMESTAMP
);

-- Insert data into the 'accounts' table
INSERT INTO accounts (
    createdDate,
    updatedDate,
    deletedAt,
    id,
    shopifyId,
    __uniqueShopifyId__,
    receivedFromShopifyDate,
    shopifyUpdateDate,
    planName,
    status,
    approvedAt,
    trialDays,
    usageLineItemShopifyId,
    planFee,
    transactionFee,
    percentageFee,
    organizationId,
    features,
    confirmationUrl,
    trialPeriodStart,
    trialPeriodEnd,
    reportUsageAt
) VALUES
    ('2023-01-18 18:25:24', '2023-01-18 18:25:24', NULL, 'cca85c84-4724-49fd-8ff2-3917bf83cba9', NULL, NULL, '2023-01-18 18:25:23', '2023-01-18 18:25:23', 'Free Trial', 'ACTIVE', NULL, 14, NULL, 0, 0, 0, 'adc50e61-6072-410e-9936-162ce46982ce', '{"CORE_SUBSCRIPTIONS":true,"CORE_CONFIGURATION":true,"ANALYTICS":true,"LOOKER_ANALYTICS":false,"SHOPIFY_DEBUG":false,"RETENTION":true,"INTEGRATIONS":true,"PREPAID_SELLING_PLAN":false,"SEQUENTIAL_SELLING_PLAN":true,"ADVANCED_SEQUENTIAL_SELLING_PLAN":false,"SETUP":false,"LOYALTY":false,"BUNDLES":false,"TRANSLATIONS":false,"PASSWORDLESS":false,"TRENDING":false}', NULL, '2023-01-18 18:25:23', '2023-02-01 18:25:23', NULL),
    ('2023-01-20 0:17:02', '2023-01-20 0:17:02', NULL, 'af071cb8-abc5-4dfa-ba2e-2cf930447587', NULL, NULL, '2023-01-20 0:17:01', '2023-01-20 0:17:01', 'Excel', 'ACTIVE', NULL, 14, NULL, 0, 0, 0, '75f223ec-2ede-4b38-9096-f9333d4141c7', '{"CORE_CONFIGURATION":true,"CORE_SUBSCRIPTIONS":true,"LOOKER_ANALYTICS":true,"RETENTION":true,"INTEGRATIONS":true,"PREPAID_SELLING_PLAN":true,"SEQUENTIAL_SELLING_PLAN":true,"MIGRATIONS":true,"BUNDLES":true,"LOYALTY":true,"TRANSLATIONS":true,"PASSWORDLESS":true}', NULL, '2023-01-20 0:17:01', '2023-02-03 0:17:01', NULL),
    ('2023-01-20 4:07:20', '2023-01-20 4:07:20', NULL, '05078458-d1c4-4221-b702-057c33f7e8ee', NULL, NULL, '2023-01-20 4:07:20', '2023-01-20 4:07:20', 'Free Trial', 'ACTIVE', NULL, 14, NULL, 0, 0, 0, 'cce0223a-fcac-4953-9137-3c5c10c158c3', '{"CORE_SUBSCRIPTIONS":true,"CORE_CONFIGURATION":true,"ANALYTICS":true,"LOOKER_ANALYTICS":false,"SHOPIFY_DEBUG":false,"RETENTION":true,"INTEGRATIONS":true,"PREPAID_SELLING_PLAN":false,"SEQUENTIAL_SELLING_PLAN":true,"ADVANCED_SEQUENTIAL_SELLING_PLAN":false,"SETUP":false,"LOYALTY":false,"BUNDLES":false,"TRANSLATIONS":false,"PASSWORDLESS":false,"TRENDING":false}', NULL, '2023-01-20 4:07:20', '2023-02-03 4:07:20', NULL),
    ('2023-01-18 21:42:39', '2023-01-18 21:42:39', NULL, 'e91e2145-aaef-4e6c-996d-8efd7f75f11c', NULL, NULL, '2023-01-18 21:42:39', '2023-01-18 21:42:39', 'Free Trial', 'ACTIVE', NULL, 14, NULL, 0, 0, 0, '788f31b6-1418-452e-9064-28041319523d', '{"CORE_SUBSCRIPTIONS":true,"CORE_CONFIGURATION":true,"ANALYTICS":true,"LOOKER_ANALYTICS":false,"SHOPIFY_DEBUG":false,"RETENTION":true,"INTEGRATIONS":true,"PREPAID_SELLING_PLAN":false,"SEQUENTIAL_SELLING_PLAN":true,"ADVANCED_SEQUENTIAL_SELLING_PLAN":false,"SETUP":false,"LOYALTY":false,"BUNDLES":false,"TRANSLATIONS":false,"PASSWORDLESS":false,"TRENDING":false}', NULL, '2023-01-18 21:42:39', '2023-02-01 21:42:39', NULL),
    ('2023-01-19 4:55:25', '2023-01-19 4:55:25', NULL, '5ef30cf7-50ce-4456-88c7-218b47588515', NULL, NULL, '2023-01-19 4:55:25', '2023-01-19 4:55:25', 'Free Trial', 'ACTIVE', NULL, 14, NULL, 0, 0, 0, '53980994-173e-4620-b560-2c2c437953ec', '{"CORE_SUBSCRIPTIONS":true,"CORE_CONFIGURATION":true,"ANALYTICS":true,"LOOKER_ANALYTICS":false,"SHOPIFY_DEBUG":false,"RETENTION":true,"INTEGRATIONS":true,"PREPAID_SELLING_PLAN":false,"SEQUENTIAL_SELLING_PLAN":true,"ADVANCED_SEQUENTIAL_SELLING_PLAN":false,"SETUP":false,"LOYALTY":false,"BUNDLES":false,"TRANSLATIONS":false,"PASSWORDLESS":false,"TRENDING":false}', NULL, '2023-01-19 4:55:25', '2023-02-02 4:55:25', NULL),
    ('2023-01-19 1:54:32', '2023-01-19 14:57:05', NULL, '8217d6fb-911f-4da4-be35-e8cbf091fb62', NULL, NULL, '2023-01-19 1:54:32', '2023-01-19 1:54:32', 'Free Trial', 'CANCELLED', NULL, 14, NULL, 0, 0, 0, 'c535b056-fe20-4409-ab16-a4b7c5e7dff6', '{"CORE_SUBSCRIPTIONS":true,"CORE_CONFIGURATION":true,"ANALYTICS":true,"LOOKER_ANALYTICS":false,"SHOPIFY_DEBUG":false,"RETENTION":true,"INTEGRATIONS":true,"PREPAID_SELLING_PLAN":false,"SEQUENTIAL_SELLING_PLAN":true,"ADVANCED_SEQUENTIAL_SELLING_PLAN":false,"SETUP":false,"LOYALTY":false,"BUNDLES":false,"TRANSLATIONS":false,"PASSWORDLESS":false,"TRENDING":false}', NULL, '2023-01-19 1:54:32', '2023-02-02 1:54:32', NULL),
    ('2023-01-18 14:29:26', '2023-01-18 14:29:26', NULL, '04eceded-2972-46f0-ac24-b69745ddcb95', NULL, NULL, '2023-01-18 14:29:25', '2023-01-18 14:29:25', 'Free Trial', 'ACTIVE', NULL, 14, NULL, 0, 0, 0, '8533ba30-ad82-41e6-9825-af3c2122d95f', '{"CORE_SUBSCRIPTIONS":true,"CORE_CONFIGURATION":true,"ANALYTICS":true,"LOOKER_ANALYTICS":false,"SHOPIFY_DEBUG":false,"RETENTION":true,"INTEGRATIONS":true,"PREPAID_SELLING_PLAN":false,"SEQUENTIAL_SELLING_PLAN":true,"ADVANCED_SEQUENTIAL_SELLING_PLAN":false,"SETUP":false,"LOYALTY":false,"BUNDLES":false,"TRANSLATIONS":false,"PASSWORDLESS":false,"TRENDING":false}', NULL, '2023-01-18 14:29:25', '2023-02-01 14:29:25', NULL),
    ('2023-01-18 18:24:25', '2023-01-18 18:24:25', NULL, 'c01594fe-785a-4d6f-a449-8d30be99dd18', NULL, NULL, '2023-01-18 18:24:25', '2023-01-18 18:24:25', 'Free Trial', 'ACTIVE', NULL, 14, NULL, 0, 0, 0, '126c230a-f07c-4416-9406-c3758b4be772', '{"CORE_SUBSCRIPTIONS":true,"CORE_CONFIGURATION":true,"ANALYTICS":true,"LOOKER_ANALYTICS":false,"SHOPIFY_DEBUG":false,"RETENTION":true,"INTEGRATIONS":true,"PREPAID_SELLING_PLAN":false,"SEQUENTIAL_SELLING_PLAN":true,"ADVANCED_SEQUENTIAL_SELLING_PLAN":false,"SETUP":false,"LOYALTY":false,"BUNDLES":false,"TRANSLATIONS":false,"PASSWORDLESS":false,"TRENDING":false}', NULL, '2023-01-18 18:24:25', '2023-02-01 18:24:25', NULL),
    ('2023-01-19 1:54:32', '2023-01-19 14:57:05', NULL, '111da83a-98d0-11ed-a8fc-0242ac120002', NULL, NULL, '2023-01-19 1:54:32', '2023-01-19 1:54:32', 'Grow', 'ACTIVE', NULL, 14, NULL, 0, 0, 0, 'c535b056-fe20-4409-ab16-a4b7c5e7dff6', '{"CORE_SUBSCRIPTIONS":true,"CORE_CONFIGURATION":true,"ANALYTICS":true,"LOOKER_ANALYTICS":false,"SHOPIFY_DEBUG":false,"RETENTION":true,"INTEGRATIONS":true,"PREPAID_SELLING_PLAN":false,"SEQUENTIAL_SELLING_PLAN":true,"ADVANCED_SEQUENTIAL_SELLING_PLAN":false,"SETUP":false,"LOYALTY":false,"BUNDLES":false,"TRANSLATIONS":false,"PASSWORDLESS":false,"TRENDING":false}', NULL, '2023-01-19 1:54:32', '2023-02-02 1:54:32', NULL);

