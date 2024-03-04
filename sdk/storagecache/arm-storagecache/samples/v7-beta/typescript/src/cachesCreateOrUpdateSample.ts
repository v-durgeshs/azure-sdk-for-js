/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Cache, StorageCacheManagementClient } from "@azure/arm-storagecache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a cache.
 *
 * @summary Create or update a cache.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/preview/2023-11-01-preview/examples/Caches_CreateOrUpdate.json
 */
async function cachesCreateOrUpdate() {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["STORAGECACHE_RESOURCE_GROUP"] || "scgroup";
  const cacheName = "sc1";
  const cache: Cache = {
    cacheSizeGB: 3072,
    directoryServicesSettings: {
      activeDirectory: {
        cacheNetBiosName: "contosoSmb",
        credentials: { password: "<password>", username: "consotoAdmin" },
        domainName: "contosoAd.contoso.local",
        domainNetBiosName: "contosoAd",
        primaryDnsIpAddress: "192.0.2.10",
        secondaryDnsIpAddress: "192.0.2.11"
      },
      usernameDownload: {
        credentials: {
          bindDn: "cn=ldapadmin,dc=contosoad,dc=contoso,dc=local",
          bindPassword: "<bindPassword>"
        },
        extendedGroups: true,
        ldapBaseDN: "dc=contosoad,dc=contoso,dc=local",
        ldapServer: "192.0.2.12",
        usernameSource: "LDAP"
      }
    },
    encryptionSettings: {
      keyEncryptionKey: {
        keyUrl: "https://keyvault-cmk.vault.azure.net/keys/key2047/test",
        sourceVault: {
          id:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.KeyVault/vaults/keyvault-cmk"
        }
      }
    },
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/00000000000000000000000000000000/resourceGroups/scgroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/identity1": {}
      }
    },
    location: "westus",
    securitySettings: {
      accessPolicies: [
        {
          name: "default",
          accessRules: [
            {
              access: "rw",
              rootSquash: false,
              scope: "default",
              submountAccess: true,
              suid: false
            }
          ]
        }
      ]
    },
    sku: { name: "Standard_2G" },
    subnet:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Network/virtualNetworks/scvnet/subnets/sub1",
    tags: { dept: "Contoso" },
    upgradeSettings: {
      scheduledTime: new Date("2022-04-26T18:25:43.511Z"),
      upgradeScheduleEnabled: true
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginCreateOrUpdateAndWait(
    resourceGroupName,
    cacheName,
    cache
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a cache.
 *
 * @summary Create or update a cache.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/preview/2023-11-01-preview/examples/Caches_CreateOrUpdate_ldap_only.json
 */
async function cachesCreateOrUpdateLdapOnly() {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["STORAGECACHE_RESOURCE_GROUP"] || "scgroup";
  const cacheName = "sc1";
  const cache: Cache = {
    cacheSizeGB: 3072,
    directoryServicesSettings: {
      usernameDownload: {
        credentials: {
          bindDn: "cn=ldapadmin,dc=contosoad,dc=contoso,dc=local",
          bindPassword: "<bindPassword>"
        },
        extendedGroups: true,
        ldapBaseDN: "dc=contosoad,dc=contoso,dc=local",
        ldapServer: "192.0.2.12",
        usernameSource: "LDAP"
      }
    },
    encryptionSettings: {
      keyEncryptionKey: {
        keyUrl: "https://keyvault-cmk.vault.azure.net/keys/key2048/test",
        sourceVault: {
          id:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.KeyVault/vaults/keyvault-cmk"
        }
      }
    },
    location: "westus",
    securitySettings: {
      accessPolicies: [
        {
          name: "default",
          accessRules: [
            {
              access: "rw",
              rootSquash: false,
              scope: "default",
              submountAccess: true,
              suid: false
            }
          ]
        }
      ]
    },
    sku: { name: "Standard_2G" },
    subnet:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Network/virtualNetworks/scvnet/subnets/sub1",
    tags: { dept: "Contoso" },
    upgradeSettings: {
      scheduledTime: new Date("2022-04-26T18:25:43.511Z"),
      upgradeScheduleEnabled: true
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginCreateOrUpdateAndWait(
    resourceGroupName,
    cacheName,
    cache
  );
  console.log(result);
}

async function main() {
  cachesCreateOrUpdate();
  cachesCreateOrUpdateLdapOnly();
}

main().catch(console.error);
