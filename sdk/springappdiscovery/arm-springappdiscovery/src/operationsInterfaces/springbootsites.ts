/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  SpringbootsitesModel,
  SpringbootsitesListByResourceGroupOptionalParams,
  SpringbootsitesListBySubscriptionOptionalParams,
  SpringbootsitesGetOptionalParams,
  SpringbootsitesGetResponse,
  SpringbootsitesCreateOrUpdateOptionalParams,
  SpringbootsitesCreateOrUpdateResponse,
  SpringbootsitesDeleteOptionalParams,
  SpringbootsitesDeleteResponse,
  SpringbootsitesPatch,
  SpringbootsitesUpdateOptionalParams,
  SpringbootsitesUpdateResponse,
  SpringbootsitesTriggerRefreshSiteOptionalParams,
  SpringbootsitesTriggerRefreshSiteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Springbootsites. */
export interface Springbootsites {
  /**
   * List springbootsites resource by resourceGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SpringbootsitesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<SpringbootsitesModel>;
  /**
   * List springbootsites resource by subscription
   * @param options The options parameters.
   */
  listBySubscription(
    options?: SpringbootsitesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<SpringbootsitesModel>;
  /**
   * Get a springbootsites resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param springbootsitesName The springbootsites name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    springbootsitesName: string,
    options?: SpringbootsitesGetOptionalParams,
  ): Promise<SpringbootsitesGetResponse>;
  /**
   * Create a springbootsites resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param springbootsitesName The springbootsites name.
   * @param springbootsites Create a springbootsites payload.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    springbootsitesName: string,
    springbootsites: SpringbootsitesModel,
    options?: SpringbootsitesCreateOrUpdateOptionalParams,
  ): Promise<SpringbootsitesCreateOrUpdateResponse>;
  /**
   * Delete a springbootsites resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param springbootsitesName The springbootsites name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    springbootsitesName: string,
    options?: SpringbootsitesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SpringbootsitesDeleteResponse>,
      SpringbootsitesDeleteResponse
    >
  >;
  /**
   * Delete a springbootsites resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param springbootsitesName The springbootsites name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    springbootsitesName: string,
    options?: SpringbootsitesDeleteOptionalParams,
  ): Promise<SpringbootsitesDeleteResponse>;
  /**
   * Update a springbootsites resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param springbootsitesName The springbootsites name.
   * @param springbootsites Update a springbootsites payload.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    springbootsitesName: string,
    springbootsites: SpringbootsitesPatch,
    options?: SpringbootsitesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SpringbootsitesUpdateResponse>,
      SpringbootsitesUpdateResponse
    >
  >;
  /**
   * Update a springbootsites resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param springbootsitesName The springbootsites name.
   * @param springbootsites Update a springbootsites payload.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    springbootsitesName: string,
    springbootsites: SpringbootsitesPatch,
    options?: SpringbootsitesUpdateOptionalParams,
  ): Promise<SpringbootsitesUpdateResponse>;
  /**
   * Trigger refresh springbootsites action
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param springbootsitesName The springbootsites name.
   * @param options The options parameters.
   */
  beginTriggerRefreshSite(
    resourceGroupName: string,
    springbootsitesName: string,
    options?: SpringbootsitesTriggerRefreshSiteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SpringbootsitesTriggerRefreshSiteResponse>,
      SpringbootsitesTriggerRefreshSiteResponse
    >
  >;
  /**
   * Trigger refresh springbootsites action
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param springbootsitesName The springbootsites name.
   * @param options The options parameters.
   */
  beginTriggerRefreshSiteAndWait(
    resourceGroupName: string,
    springbootsitesName: string,
    options?: SpringbootsitesTriggerRefreshSiteOptionalParams,
  ): Promise<SpringbootsitesTriggerRefreshSiteResponse>;
}
