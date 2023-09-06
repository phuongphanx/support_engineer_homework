//Ideally, I would like the JSON data to be stored in separate JSON Files (accounts.json and organizations.json) but for the purpose of this assessment and to avoid CORS Policy, I have inserted the JSON data directly into app-for-local.js.

// Sample JSON data (replace with your actual data)
const organizations = [
    // ... (organizations.json data here)
        {
            "createddate": "2023-01-20T04:07:20.185Z",
            "updateddate": "2023-01-20T05:14:51.226Z",
            "deletedat": "NULL",
            "id": "cce0223a-fcac-4953-9137-3c5c10c158c3",
            "orgname": "Test Account 1",
            "shopifystoreid": 25571033181,
            "myshopifydomain": "test-account-1.myshopify.com",
            "numbillingretries": 3,
            "numfailedcyclesbeforecancel": 101,
            "delaybetweenretries": 86400,
            "logo": "NULL",
            "billingtime": "1899-12-30T09:00:00.000Z",
            "billingtimezone": "America/Los_Angeles",
            "initialsubscriptionimportcomplete": false,
            "monthlyfee": "NULL",
            "pertransactionfee": "NULL",
            "pertransactionpercentagefee": "NULL",
            "billingstartdate": "NULL",
            "account": "{}",
            "alloyuserid": "NULL",
            "activeworkflows": "{}",
            "setup": "{\"selectedSellingPlanId\":\"gid://shopify/SellingPlanGroup/366280870\",\"hasProductSelected\":true,\"snippetsThemeId\":\"\",\"renderingThemeId\":\"\",\"isSetupFinished\":false,\"optimization\":{\"shipping\":false,\"theming\":false,\"transaction\":false,\"integrations\":false}}",
            "outofstockbehavior": "CREATE_ALWAYS",
            "cancellationmessage": "NULL",
            "hasvisitedretention": true,
            "rewardspointmeaningid": "NULL",
            "hasotpenabled": false,
            "instagramuserdata": "{}",
            "lookerdashboardprefix": "/embed/dashboards-next/28?embed_domain="
        },
        {
            "createddate": "2023-01-20T00:17:01.717Z",
            "updateddate": "2023-01-20T00:44:55.449Z",
            "deletedat": "NULL",
            "id": "75f223ec-2ede-4b38-9096-f9333d4141c7",
            "orgname": "Test Account 2",
            "shopifystoreid": 35850977413,
            "myshopifydomain": "test-account-2.myshopify.com",
            "numbillingretries": 3,
            "numfailedcyclesbeforecancel": 101,
            "delaybetweenretries": 86400,
            "logo": "NULL",
            "billingtime": "1899-12-30T09:00:00.000Z",
            "billingtimezone": "America/New_York",
            "initialsubscriptionimportcomplete": false,
            "monthlyfee": "NULL",
            "pertransactionfee": "NULL",
            "pertransactionpercentagefee": "NULL",
            "billingstartdate": "NULL",
            "account": "{}",
            "alloyuserid": "NULL",
            "activeworkflows": "{}",
            "setup": "{\"selectedSellingPlanId\":\"gid://shopify/SellingPlanGroup/208633989\",\"hasProductSelected\":true,\"snippetsThemeId\":\"122514735237\",\"renderingThemeId\":\"122514735237\",\"isSetupFinished\":true,\"optimization\":{\"shipping\":true,\"theming\":true,\"transaction\":true,\"integrations\":true,\"retention\":true}}",
            "outofstockbehavior": "CREATE_ALWAYS",
            "cancellationmessage": "NULL",
            "hasvisitedretention": false,
            "rewardspointmeaningid": "NULL",
            "hasotpenabled": false,
            "instagramuserdata": "{}",
            "lookerdashboardprefix": "/embed/dashboards-next/28?embed_domain="
        },
        {
            "createddate": "2023-01-19T13:12:38.549Z",
            "updateddate": "2023-01-19T13:12:38.549Z",
            "deletedat": "NULL",
            "id": "f7ccfc71-1858-40f4-8d03-77e3d1efb86c",
            "orgname": "Test Account 3",
            "shopifystoreid": 59308736557,
            "myshopifydomain": "test-account-3.myshopify.com",
            "numbillingretries": 3,
            "numfailedcyclesbeforecancel": 101,
            "delaybetweenretries": 86400,
            "logo": "NULL",
            "billingtime": "1899-12-30T09:00:00.000Z",
            "billingtimezone": "Europe/Berlin",
            "initialsubscriptionimportcomplete": false,
            "monthlyfee": "NULL",
            "pertransactionfee": "NULL",
            "pertransactionpercentagefee": "NULL",
            "billingstartdate": "NULL",
            "account": "{}",
            "alloyuserid": "NULL",
            "activeworkflows": "{}",
            "setup": "{\"selectedSellingPlanId\":\"\",\"hasProductSelected\":false,\"snippetsThemeId\":\"\",\"renderingThemeId\":\"\",\"isSetupFinished\":false,\"optimization\":{\"shipping\":false,\"theming\":false,\"transaction\":false,\"integrations\":false}}",
            "outofstockbehavior": "CREATE_ALWAYS",
            "cancellationmessage": "NULL",
            "hasvisitedretention": false,
            "rewardspointmeaningid": "NULL",
            "hasotpenabled": false,
            "instagramuserdata": "{}",
            "lookerdashboardprefix": "/embed/dashboards-next/28?embed_domain="
        },
        {
            "createddate": "2023-01-19T04:55:25.024Z",
            "updateddate": "2023-01-19T04:55:25.024Z",
            "deletedat": "NULL",
            "id": "53980994-173e-4620-b560-2c2c437953ec",
            "orgname": "Test Account 4",
            "shopifystoreid": 25729722,
            "myshopifydomain": "test-account-4.myshopify.com",
            "numbillingretries": 3,
            "numfailedcyclesbeforecancel": 101,
            "delaybetweenretries": 86400,
            "logo": "NULL",
            "billingtime": "1899-12-30T09:00:00.000Z",
            "billingtimezone": "Australia/Sydney",
            "initialsubscriptionimportcomplete": false,
            "monthlyfee": "NULL",
            "pertransactionfee": "NULL",
            "pertransactionpercentagefee": "NULL",
            "billingstartdate": "NULL",
            "account": "{}",
            "alloyuserid": "NULL",
            "activeworkflows": "{}",
            "setup": "{\"selectedSellingPlanId\":\"\",\"hasProductSelected\":false,\"snippetsThemeId\":\"\",\"renderingThemeId\":\"\",\"isSetupFinished\":false,\"optimization\":{\"shipping\":false,\"theming\":false,\"transaction\":false,\"integrations\":false}}",
            "outofstockbehavior": "CREATE_ALWAYS",
            "cancellationmessage": "NULL",
            "hasvisitedretention": false,
            "rewardspointmeaningid": "NULL",
            "hasotpenabled": false,
            "instagramuserdata": "{}",
            "lookerdashboardprefix": "/embed/dashboards-next/28?embed_domain="
        },
        {
            "createddate": "2023-01-19T01:54:32.348Z",
            "updateddate": "2023-01-19T14:56:27.933Z",
            "deletedat": "NULL",
            "id": "c535b056-fe20-4409-ab16-a4b7c5e7dff6",
            "orgname": "Test Account 5",
            "shopifystoreid": 50788368575,
            "myshopifydomain": "test-account-5.myshopify.com",
            "numbillingretries": 3,
            "numfailedcyclesbeforecancel": 101,
            "delaybetweenretries": 86400,
            "logo": "NULL",
            "billingtime": "1899-12-30T09:00:00.000Z",
            "billingtimezone": "America/New_York",
            "initialsubscriptionimportcomplete": false,
            "monthlyfee": "NULL",
            "pertransactionfee": "NULL",
            "pertransactionpercentagefee": "NULL",
            "billingstartdate": "NULL",
            "account": "{}",
            "alloyuserid": "NULL",
            "activeworkflows": "{}",
            "setup": "{\"selectedSellingPlanId\":\"gid://shopify/SellingPlanGroup/614858943\",\"hasProductSelected\":true,\"snippetsThemeId\":\"\",\"renderingThemeId\":\"\",\"isSetupFinished\":false,\"optimization\":{\"shipping\":false,\"theming\":false,\"transaction\":false,\"integrations\":false}}",
            "outofstockbehavior": "CREATE_ALWAYS",
            "cancellationmessage": "NULL",
            "hasvisitedretention": false,
            "rewardspointmeaningid": "NULL",
            "hasotpenabled": false,
            "instagramuserdata": "{}",
            "lookerdashboardprefix": "/embed/dashboards-next/28?embed_domain="
        },
        {
            "createddate": "2023-01-18T21:42:39.294Z",
            "updateddate": "2023-01-18T21:46:48.227Z",
            "deletedat": "NULL",
            "id": "788f31b6-1418-452e-9064-28041319523d",
            "orgname": "Test Account 6",
            "shopifystoreid": 68566221112,
            "myshopifydomain": "test-account-6.myshopify.com",
            "numbillingretries": 3,
            "numfailedcyclesbeforecancel": 101,
            "delaybetweenretries": 86400,
            "logo": "NULL",
            "billingtime": "1899-12-30T09:00:00.000Z",
            "billingtimezone": "America/New_York",
            "initialsubscriptionimportcomplete": false,
            "monthlyfee": "NULL",
            "pertransactionfee": "NULL",
            "pertransactionpercentagefee": "NULL",
            "billingstartdate": "NULL",
            "account": "{}",
            "alloyuserid": "63c868c71275a771dcc6fe7b",
            "activeworkflows": "{}",
            "setup": "{\"selectedSellingPlanId\":\"\",\"hasProductSelected\":false,\"snippetsThemeId\":\"\",\"renderingThemeId\":\"\",\"isSetupFinished\":false,\"optimization\":{\"shipping\":false,\"theming\":false,\"transaction\":false,\"integrations\":false}}",
            "outofstockbehavior": "CREATE_ALWAYS",
            "cancellationmessage": "NULL",
            "hasvisitedretention": false,
            "rewardspointmeaningid": "NULL",
            "hasotpenabled": false,
            "instagramuserdata": "{}",
            "lookerdashboardprefix": "/embed/dashboards-next/28?embed_domain="
        },
        {
            "createddate": "2023-01-18T18:25:23.805Z",
            "updateddate": "2023-01-18T18:25:27.099Z",
            "deletedat": "NULL",
            "id": "adc50e61-6072-410e-9936-162ce46982ce",
            "orgname": "Test Account 7",
            "shopifystoreid": 70714786071,
            "myshopifydomain": "test-account-7.myshopify.com",
            "numbillingretries": 3,
            "numfailedcyclesbeforecancel": 101,
            "delaybetweenretries": 86400,
            "logo": "NULL",
            "billingtime": "1899-12-30T09:00:00.000Z",
            "billingtimezone": "America/New_York",
            "initialsubscriptionimportcomplete": false,
            "monthlyfee": "NULL",
            "pertransactionfee": "NULL",
            "pertransactionpercentagefee": "NULL",
            "billingstartdate": "NULL",
            "account": "{}",
            "alloyuserid": "NULL",
            "activeworkflows": "{}",
            "setup": "{\"selectedSellingPlanId\":\"\",\"hasProductSelected\":false,\"snippetsThemeId\":\"\",\"renderingThemeId\":\"\",\"isSetupFinished\":false,\"optimization\":{\"shipping\":false,\"theming\":false,\"transaction\":false,\"integrations\":false}}",
            "outofstockbehavior": "CREATE_ALWAYS",
            "cancellationmessage": "NULL",
            "hasvisitedretention": false,
            "rewardspointmeaningid": "NULL",
            "hasotpenabled": false,
            "instagramuserdata": "{}",
            "lookerdashboardprefix": "/embed/dashboards-next/28?embed_domain="
        },
        {
            "createddate": "2023-01-18T18:24:25.009Z",
            "updateddate": "2023-01-18T18:24:40.419Z",
            "deletedat": "NULL",
            "id": "126c230a-f07c-4416-9406-c3758b4be772",
            "orgname": "Test Account 8",
            "shopifystoreid": 69435326771,
            "myshopifydomain": "test-account-8.myshopify.com",
            "numbillingretries": 3,
            "numfailedcyclesbeforecancel": 101,
            "delaybetweenretries": 86400,
            "logo": "NULL",
            "billingtime": "1899-12-30T09:00:00.000Z",
            "billingtimezone": "America/New_York",
            "initialsubscriptionimportcomplete": false,
            "monthlyfee": "NULL",
            "pertransactionfee": "NULL",
            "pertransactionpercentagefee": "NULL",
            "billingstartdate": "NULL",
            "account": "{}",
            "alloyuserid": "NULL",
            "activeworkflows": "{}",
            "setup": "{\"selectedSellingPlanId\":\"\",\"hasProductSelected\":false,\"snippetsThemeId\":\"\",\"renderingThemeId\":\"\",\"isSetupFinished\":false,\"optimization\":{\"shipping\":false,\"theming\":false,\"transaction\":false,\"integrations\":false}}",
            "outofstockbehavior": "CREATE_ALWAYS",
            "cancellationmessage": "NULL",
            "hasvisitedretention": false,
            "rewardspointmeaningid": "NULL",
            "hasotpenabled": false,
            "instagramuserdata": "{}",
            "lookerdashboardprefix": "/embed/dashboards-next/28?embed_domain="
        },
        {
            "createddate": "2023-01-18T14:29:25.785Z",
            "updateddate": "2023-01-18T14:31:15.024Z",
            "deletedat": "NULL",
            "id": "8533ba30-ad82-41e6-9825-af3c2122d95f",
            "orgname": "Test Account 9",
            "shopifystoreid": 8009744461,
            "myshopifydomain": "test-account-9.myshopify.com",
            "numbillingretries": 3,
            "numfailedcyclesbeforecancel": 101,
            "delaybetweenretries": 86400,
            "logo": "NULL",
            "billingtime": "1899-12-30T09:00:00.000Z",
            "billingtimezone": "America/New_York",
            "initialsubscriptionimportcomplete": false,
            "monthlyfee": "NULL",
            "pertransactionfee": "NULL",
            "pertransactionpercentagefee": "NULL",
            "billingstartdate": "NULL",
            "account": "{}",
            "alloyuserid": "NULL",
            "activeworkflows": "{}",
            "setup": "{\"selectedSellingPlanId\":\"gid://shopify/SellingPlanGroup/223150157\",\"hasProductSelected\":true,\"snippetsThemeId\":\"43449647181\",\"renderingThemeId\":\"\",\"isSetupFinished\":false,\"optimization\":{\"shipping\":false,\"theming\":false,\"transaction\":false,\"integrations\":false}}",
            "outofstockbehavior": "CREATE_ALWAYS",
            "cancellationmessage": "NULL",
            "hasvisitedretention": false,
            "rewardspointmeaningid": "NULL",
            "hasotpenabled": false,
            "instagramuserdata": "{}",
            "lookerdashboardprefix": "/embed/dashboards-next/28?embed_domain="
        },
        {
            "createddate": "2023-01-18T03:54:44.712Z",
            "updateddate": "2023-01-18T03:54:44.712Z",
            "deletedat": "NULL",
            "id": "88684712-d564-41be-b37f-4e8084439806",
            "orgname": "Test Account 10",
            "shopifystoreid": 70699778363,
            "myshopifydomain": "test-account-10.myshopify.com",
            "numbillingretries": 3,
            "numfailedcyclesbeforecancel": 101,
            "delaybetweenretries": 86400,
            "logo": "NULL",
            "billingtime": "1899-12-30T09:00:00.000Z",
            "billingtimezone": "America/New_York",
            "initialsubscriptionimportcomplete": false,
            "monthlyfee": "NULL",
            "pertransactionfee": "NULL",
            "pertransactionpercentagefee": "NULL",
            "billingstartdate": "NULL",
            "account": "{}",
            "alloyuserid": "NULL",
            "activeworkflows": "{}",
            "setup": "{\"selectedSellingPlanId\":\"\",\"hasProductSelected\":false,\"snippetsThemeId\":\"\",\"renderingThemeId\":\"\",\"isSetupFinished\":false,\"optimization\":{\"shipping\":false,\"theming\":false,\"transaction\":false,\"integrations\":false}}",
            "outofstockbehavior": "CREATE_ALWAYS",
            "cancellationmessage": "NULL",
            "hasvisitedretention": false,
            "rewardspointmeaningid": "NULL",
            "hasotpenabled": false,
            "instagramuserdata": "{}",
            "lookerdashboardprefix": "/embed/dashboards-next/28?embed_domain="
        }
    
];

const accounts = [
    // ... (accounts.json data here)
    
        {
            "createddate": "2023-01-18T18:25:23.869Z",
            "updateddate": "2023-01-18T18:25:23.869Z",
            "deletedat": "NULL",
            "id": "cca85c84-4724-49fd-8ff2-3917bf83cba9",
            "shopifyid": "NULL",
            "uniqueshopifyid": "NULL",
            "receivedfromshopifydate": "2023-01-18T18:25:23.000Z",
            "shopifyupdatedate": "2023-01-18T18:25:23.000Z",
            "planname": "Free Trial",
            "status": "ACTIVE",
            "approvedat": "NULL",
            "trialdays": 14,
            "usagelineitemshopifyid": "NULL",
            "planfee": 0,
            "transactionfee": 0,
            "percentagefee": 0,
            "organizationid": "adc50e61-6072-410e-9936-162ce46982ce",
            "features": "{\"CORE_SUBSCRIPTIONS\":true,\"CORE_CONFIGURATION\":true,\"ANALYTICS\":true,\"LOOKER_ANALYTICS\":false,\"SHOPIFY_DEBUG\":false,\"RETENTION\":true,\"INTEGRATIONS\":true,\"PREPAID_SELLING_PLAN\":false,\"SEQUENTIAL_SELLING_PLAN\":true,\"ADVANCED_SEQUENTIAL_SELLING_PLAN\":false,\"SETUP\":false,\"LOYALTY\":false,\"BUNDLES\":false,\"TRANSLATIONS\":false,\"PASSWORDLESS\":false,\"TRENDING\":false}",
            "confirmationurl": "NULL",
            "trialperiodstart": "2023-01-18T18:25:23.000Z",
            "trialperiodend": "2023-02-01T18:25:23.000Z",
            "reportusageat": "NULL"
        },
        {
            "createddate": "2023-01-20T00:17:01.764Z",
            "updateddate": "2023-01-20T00:17:01.764Z",
            "deletedat": "NULL",
            "id": "af071cb8-abc5-4dfa-ba2e-2cf930447587",
            "shopifyid": "NULL",
            "uniqueshopifyid": "NULL",
            "receivedfromshopifydate": "2023-01-20T00:17:01.000Z",
            "shopifyupdatedate": "2023-01-20T00:17:01.000Z",
            "planname": "Excel",
            "status": "ACTIVE",
            "approvedat": "NULL",
            "trialdays": 14,
            "usagelineitemshopifyid": "NULL",
            "planfee": 0,
            "transactionfee": 0,
            "percentagefee": 0,
            "organizationid": "75f223ec-2ede-4b38-9096-f9333d4141c7",
            "features": "{\"CORE_CONFIGURATION\":true,\"CORE_SUBSCRIPTIONS\":true,\"LOOKER_ANALYTICS\":true,\"RETENTION\":true,\"INTEGRATIONS\":true,\"PREPAID_SELLING_PLAN\":true,\"SEQUENTIAL_SELLING_PLAN\":true,\"MIGRATIONS\":true,\"BUNDLES\":true,\"LOYALTY\":true,\"TRANSLATIONS\":true,\"PASSWORDLESS\": true}\n",
            "confirmationurl": "NULL",
            "trialperiodstart": "2023-01-20T00:17:01.000Z",
            "trialperiodend": "2023-02-03T00:17:01.000Z",
            "reportusageat": "NULL"
        },
        {
            "createddate": "2023-01-20T04:07:20.251Z",
            "updateddate": "2023-01-20T04:07:20.251Z",
            "deletedat": "NULL",
            "id": "05078458-d1c4-4221-b702-057c33f7e8ee",
            "shopifyid": "NULL",
            "uniqueshopifyid": "NULL",
            "receivedfromshopifydate": "2023-01-20T04:07:20.000Z",
            "shopifyupdatedate": "2023-01-20T04:07:20.000Z",
            "planname": "Free Trial",
            "status": "ACTIVE",
            "approvedat": "NULL",
            "trialdays": 14,
            "usagelineitemshopifyid": "NULL",
            "planfee": 0,
            "transactionfee": 0,
            "percentagefee": 0,
            "organizationid": "cce0223a-fcac-4953-9137-3c5c10c158c3",
            "features": "{\"CORE_SUBSCRIPTIONS\":true,\"CORE_CONFIGURATION\":true,\"ANALYTICS\":true,\"LOOKER_ANALYTICS\":false,\"SHOPIFY_DEBUG\":false,\"RETENTION\":true,\"INTEGRATIONS\":true,\"PREPAID_SELLING_PLAN\":false,\"SEQUENTIAL_SELLING_PLAN\":true,\"ADVANCED_SEQUENTIAL_SELLING_PLAN\":false,\"SETUP\":false,\"LOYALTY\":false,\"BUNDLES\":false,\"TRANSLATIONS\":false,\"PASSWORDLESS\":false,\"TRENDING\":false}",
            "confirmationurl": "NULL",
            "trialperiodstart": "2023-01-20T04:07:20.000Z",
            "trialperiodend": "2023-02-03T04:07:20.000Z",
            "reportusageat": "NULL"
        },
        {
            "createddate": "2023-01-18T21:42:39.372Z",
            "updateddate": "2023-01-18T21:42:39.372Z",
            "deletedat": "NULL",
            "id": "e91e2145-aaef-4e6c-996d-8efd7f75f11c",
            "shopifyid": "NULL",
            "uniqueshopifyid": "NULL",
            "receivedfromshopifydate": "2023-01-18T21:42:39.000Z",
            "shopifyupdatedate": "2023-01-18T21:42:39.000Z",
            "planname": "Free Trial",
            "status": "ACTIVE",
            "approvedat": "NULL",
            "trialdays": 14,
            "usagelineitemshopifyid": "NULL",
            "planfee": 0,
            "transactionfee": 0,
            "percentagefee": 0,
            "organizationid": "788f31b6-1418-452e-9064-28041319523d",
            "features": "{\"CORE_SUBSCRIPTIONS\":true,\"CORE_CONFIGURATION\":true,\"ANALYTICS\":true,\"LOOKER_ANALYTICS\":false,\"SHOPIFY_DEBUG\":false,\"RETENTION\":true,\"INTEGRATIONS\":true,\"PREPAID_SELLING_PLAN\":false,\"SEQUENTIAL_SELLING_PLAN\":true,\"ADVANCED_SEQUENTIAL_SELLING_PLAN\":false,\"SETUP\":false,\"LOYALTY\":false,\"BUNDLES\":false,\"TRANSLATIONS\":false,\"PASSWORDLESS\":false,\"TRENDING\":false}",
            "confirmationurl": "NULL",
            "trialperiodstart": "2023-01-18T21:42:39.000Z",
            "trialperiodend": "2023-02-01T21:42:39.000Z",
            "reportusageat": "NULL"
        },
        {
            "createddate": "2023-01-19T04:55:25.063Z",
            "updateddate": "2023-01-19T04:55:25.063Z",
            "deletedat": "NULL",
            "id": "5ef30cf7-50ce-4456-88c7-218b47588515",
            "shopifyid": "NULL",
            "uniqueshopifyid": "NULL",
            "receivedfromshopifydate": "2023-01-19T04:55:25.000Z",
            "shopifyupdatedate": "2023-01-19T04:55:25.000Z",
            "planname": "Free Trial",
            "status": "ACTIVE",
            "approvedat": "NULL",
            "trialdays": 14,
            "usagelineitemshopifyid": "NULL",
            "planfee": 0,
            "transactionfee": 0,
            "percentagefee": 0,
            "organizationid": "53980994-173e-4620-b560-2c2c437953ec",
            "features": "{\"CORE_SUBSCRIPTIONS\":true,\"CORE_CONFIGURATION\":true,\"ANALYTICS\":true,\"LOOKER_ANALYTICS\":false,\"SHOPIFY_DEBUG\":false,\"RETENTION\":true,\"INTEGRATIONS\":true,\"PREPAID_SELLING_PLAN\":false,\"SEQUENTIAL_SELLING_PLAN\":true,\"ADVANCED_SEQUENTIAL_SELLING_PLAN\":false,\"SETUP\":false,\"LOYALTY\":false,\"BUNDLES\":false,\"TRANSLATIONS\":false,\"PASSWORDLESS\":false,\"TRENDING\":false}",
            "confirmationurl": "NULL",
            "trialperiodstart": "2023-01-19T04:55:25.000Z",
            "trialperiodend": "2023-02-02T04:55:25.000Z",
            "reportusageat": "NULL"
        },
        {
            "createddate": "2023-01-19T01:54:32.393Z",
            "updateddate": "2023-01-19T14:57:04.703Z",
            "deletedat": "NULL",
            "id": "8217d6fb-911f-4da4-be35-e8cbf091fb62",
            "shopifyid": "NULL",
            "uniqueshopifyid": "NULL",
            "receivedfromshopifydate": "2023-01-19T01:54:32.000Z",
            "shopifyupdatedate": "2023-01-19T01:54:32.000Z",
            "planname": "Free Trial",
            "status": "CANCELLED",
            "approvedat": "NULL",
            "trialdays": 14,
            "usagelineitemshopifyid": "NULL",
            "planfee": 0,
            "transactionfee": 0,
            "percentagefee": 0,
            "organizationid": "c535b056-fe20-4409-ab16-a4b7c5e7dff6",
            "features": "{\"CORE_SUBSCRIPTIONS\":true,\"CORE_CONFIGURATION\":true,\"ANALYTICS\":true,\"LOOKER_ANALYTICS\":false,\"SHOPIFY_DEBUG\":false,\"RETENTION\":true,\"INTEGRATIONS\":true,\"PREPAID_SELLING_PLAN\":false,\"SEQUENTIAL_SELLING_PLAN\":true,\"ADVANCED_SEQUENTIAL_SELLING_PLAN\":false,\"SETUP\":false,\"LOYALTY\":false,\"BUNDLES\":false,\"TRANSLATIONS\":false,\"PASSWORDLESS\":false,\"TRENDING\":false}",
            "confirmationurl": "NULL",
            "trialperiodstart": "2023-01-19T01:54:32.000Z",
            "trialperiodend": "2023-02-02T01:54:32.000Z",
            "reportusageat": "NULL"
        },
        {
            "createddate": "2023-01-18T14:29:25.821Z",
            "updateddate": "2023-01-18T14:29:25.821Z",
            "deletedat": "NULL",
            "id": "04eceded-2972-46f0-ac24-b69745ddcb95",
            "shopifyid": "NULL",
            "uniqueshopifyid": "NULL",
            "receivedfromshopifydate": "2023-01-18T14:29:25.000Z",
            "shopifyupdatedate": "2023-01-18T14:29:25.000Z",
            "planname": "Free Trial",
            "status": "ACTIVE",
            "approvedat": "NULL",
            "trialdays": 14,
            "usagelineitemshopifyid": "NULL",
            "planfee": 0,
            "transactionfee": 0,
            "percentagefee": 0,
            "organizationid": "8533ba30-ad82-41e6-9825-af3c2122d95f",
            "features": "{\"CORE_SUBSCRIPTIONS\":true,\"CORE_CONFIGURATION\":true,\"ANALYTICS\":true,\"LOOKER_ANALYTICS\":false,\"SHOPIFY_DEBUG\":false,\"RETENTION\":true,\"INTEGRATIONS\":true,\"PREPAID_SELLING_PLAN\":false,\"SEQUENTIAL_SELLING_PLAN\":true,\"ADVANCED_SEQUENTIAL_SELLING_PLAN\":false,\"SETUP\":false,\"LOYALTY\":false,\"BUNDLES\":false,\"TRANSLATIONS\":false,\"PASSWORDLESS\":false,\"TRENDING\":false}",
            "confirmationurl": "NULL",
            "trialperiodstart": "2023-01-18T14:29:25.000Z",
            "trialperiodend": "2023-02-01T14:29:25.000Z",
            "reportusageat": "NULL"
        },
        {
            "createddate": "2023-01-18T18:24:25.050Z",
            "updateddate": "2023-01-18T18:24:25.050Z",
            "deletedat": "NULL",
            "id": "c01594fe-785a-4d6f-a449-8d30be99dd18",
            "shopifyid": "NULL",
            "uniqueshopifyid": "NULL",
            "receivedfromshopifydate": "2023-01-18T18:24:25.000Z",
            "shopifyupdatedate": "2023-01-18T18:24:25.000Z",
            "planname": "Free Trial",
            "status": "ACTIVE",
            "approvedat": "NULL",
            "trialdays": 14,
            "usagelineitemshopifyid": "NULL",
            "planfee": 0,
            "transactionfee": 0,
            "percentagefee": 0,
            "organizationid": "126c230a-f07c-4416-9406-c3758b4be772",
            "features": "{\"CORE_SUBSCRIPTIONS\":true,\"CORE_CONFIGURATION\":true,\"ANALYTICS\":true,\"LOOKER_ANALYTICS\":false,\"SHOPIFY_DEBUG\":false,\"RETENTION\":true,\"INTEGRATIONS\":true,\"PREPAID_SELLING_PLAN\":false,\"SEQUENTIAL_SELLING_PLAN\":true,\"ADVANCED_SEQUENTIAL_SELLING_PLAN\":false,\"SETUP\":false,\"LOYALTY\":false,\"BUNDLES\":false,\"TRANSLATIONS\":false,\"PASSWORDLESS\":false,\"TRENDING\":false}",
            "confirmationurl": "NULL",
            "trialperiodstart": "2023-01-18T18:24:25.000Z",
            "trialperiodend": "2023-02-01T18:24:25.000Z",
            "reportusageat": "NULL"
        },
        {
            "createddate": "2023-01-19T01:54:32.393Z",
            "updateddate": "2023-01-19T14:57:04.703Z",
            "deletedat": "NULL",
            "id": "111da83a-98d0-11ed-a8fc-0242ac120002",
            "shopifyid": "NULL",
            "uniqueshopifyid": "NULL",
            "receivedfromshopifydate": "2023-01-19T01:54:32.000Z",
            "shopifyupdatedate": "2023-01-19T01:54:32.000Z",
            "planname": "Grow",
            "status": "ACTIVE",
            "approvedat": "NULL",
            "trialdays": 14,
            "usagelineitemshopifyid": "NULL",
            "planfee": 0,
            "transactionfee": 0,
            "percentagefee": 0,
            "organizationid": "c535b056-fe20-4409-ab16-a4b7c5e7dff6",
            "features": "{\"CORE_SUBSCRIPTIONS\":true,\"CORE_CONFIGURATION\":true,\"ANALYTICS\":true,\"LOOKER_ANALYTICS\":false,\"SHOPIFY_DEBUG\":false,\"RETENTION\":true,\"INTEGRATIONS\":true,\"PREPAID_SELLING_PLAN\":false,\"SEQUENTIAL_SELLING_PLAN\":true,\"ADVANCED_SEQUENTIAL_SELLING_PLAN\":false,\"SETUP\":false,\"LOYALTY\":false,\"BUNDLES\":false,\"TRANSLATIONS\":false,\"PASSWORDLESS\":false,\"TRENDING\":false}",
            "confirmationurl": "NULL",
            "trialperiodstart": "2023-01-19T01:54:32.000Z",
            "trialperiodend": "2023-02-02T01:54:32.000Z",
            "reportusageat": "NULL"
        }
    
];


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

