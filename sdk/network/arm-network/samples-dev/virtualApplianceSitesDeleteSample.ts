/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes the specified site from a Virtual Appliance.
 *
 * @summary Deletes the specified site from a Virtual Appliance.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-09-01/examples/NetworkVirtualApplianceSiteDelete.json
 */
async function deleteNetworkVirtualApplianceSite() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkVirtualApplianceName = "nva";
  const siteName = "site1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualApplianceSites.beginDeleteAndWait(
    resourceGroupName,
    networkVirtualApplianceName,
    siteName,
  );
  console.log(result);
}

async function main() {
  deleteNetworkVirtualApplianceSite();
}

main().catch(console.error);
