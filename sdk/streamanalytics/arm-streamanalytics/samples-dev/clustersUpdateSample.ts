/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  Cluster,
  StreamAnalyticsManagementClient,
} from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates an existing cluster. This can be used to partially update (ie. update one or two properties) a cluster without affecting the rest of the cluster definition.
 *
 * @summary Updates an existing cluster. This can be used to partially update (ie. update one or two properties) a cluster without affecting the rest of the cluster definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2020-03-01-preview/examples/Cluster_Update.json
 */
async function updateACluster() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const clusterName = "testcluster";
  const cluster: Cluster = { location: "Central US", sku: { capacity: 96 } };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.clusters.beginUpdateAndWait(
    resourceGroupName,
    clusterName,
    cluster,
  );
  console.log(result);
}

async function main() {
  updateACluster();
}

main().catch(console.error);
