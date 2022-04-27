/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ManagementGroupsAPI } = require("@azure/arm-managementgroups");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all entities (Management Groups, Subscriptions, etc.) for the authenticated user.

 *
 * @summary List all entities (Management Groups, Subscriptions, etc.) for the authenticated user.

 * x-ms-original-file: specification/managementgroups/resource-manager/Microsoft.Management/stable/2021-04-01/examples/GetEntities.json
 */
async function getEntities() {
  const credential = new DefaultAzureCredential();
  const client = new ManagementGroupsAPI(credential);
  const resArray = new Array();
  for await (let item of client.entities.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getEntities().catch(console.error);