# Shopify Organization Report Web App

## Overview

This web-based application allows you to generate reports for Shopify organizations based on the provided JSON data. It includes four types of reports: Optimization Settings by myShopifyDomain, Organizations Sorted by Oldest to Newest, Organizations with Status "Cancelled", and Organization Record by orgName.

## Features

- Generate reports for Shopify organizations.
- Four types of reports available.
- Easy-to-use web interface.
- Data is loaded from JSON files.

## Prerequisites

Before using this application, make sure you have the following:

- A modern web browser (Chrome, Firefox, Safari, etc.).
- JSON data files (`organizations.json` and `accounts.json`) for your Shopify organizations.

## Getting Started

1. Clone this repository to your local machine.

2. If you have CSV data, you can use google sheet "export JSON" feature to generate the JSON data.

3. If you're running your code directly from the local file system, connect app-for-local.js to index.html and replace the sample JSON data inside app-for-local.js with your actual data.

4. If you're running the app on a local development server, connect app-for-server.js to index.html and replace the accounts.json and organizations.json with your actual data.

## Usage

1. Open index.html in your web browser.

2. To generate the Optimization Settings report, enter the myShopifyDomain (e.g., test-account-1.myshopify.com) of the organization.

3. To generate the Organization Record by orgName report, enter the orgName (e.g., Test Account 1) of the organization.

##Troubleshooting

If you encounter an "This organization does not exist." error, double-check the myShopifyDomain or orgName you entered and the JSON data to ensure it exists.

## Acknowledgments

Built using HTML, CSS, and JavaScript.