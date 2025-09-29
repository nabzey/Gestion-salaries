import { PrismaClient as TenantPrismaClient } from '../generated/tenant';

const tenantClients: { [key: string]: TenantPrismaClient } = {};

export function getTenantPrisma(dbName: string): TenantPrismaClient {
  if (!tenantClients[dbName]) {
    const baseUrl = process.env.DATABASE_URL!.replace(/\/[^\/]*$/, '');
    const tenantUrl = `${baseUrl}/${dbName}`;
    tenantClients[dbName] = new TenantPrismaClient({
      datasourceUrl: tenantUrl,
    });
  }
  return tenantClients[dbName];
}
