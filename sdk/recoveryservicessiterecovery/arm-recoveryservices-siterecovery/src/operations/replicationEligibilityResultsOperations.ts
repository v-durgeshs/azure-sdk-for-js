/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ReplicationEligibilityResultsOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import {
  ReplicationEligibilityResultsListOptionalParams,
  ReplicationEligibilityResultsListResponse,
  ReplicationEligibilityResultsGetOptionalParams,
  ReplicationEligibilityResultsGetResponse,
} from "../models";

/** Class containing ReplicationEligibilityResultsOperations operations. */
export class ReplicationEligibilityResultsOperationsImpl
  implements ReplicationEligibilityResultsOperations
{
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationEligibilityResultsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Validates whether a given VM can be protected or not in which case returns list of errors.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param virtualMachineName Virtual Machine name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    virtualMachineName: string,
    options?: ReplicationEligibilityResultsListOptionalParams,
  ): Promise<ReplicationEligibilityResultsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualMachineName, options },
      listOperationSpec,
    );
  }

  /**
   * Validates whether a given VM can be protected or not in which case returns list of errors.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param virtualMachineName Virtual Machine name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualMachineName: string,
    options?: ReplicationEligibilityResultsGetOptionalParams,
  ): Promise<ReplicationEligibilityResultsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualMachineName, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{virtualMachineName}/providers/Microsoft.RecoveryServices/replicationEligibilityResults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReplicationEligibilityResultsCollection,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualMachineName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{virtualMachineName}/providers/Microsoft.RecoveryServices/replicationEligibilityResults/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReplicationEligibilityResults,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualMachineName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
