import { UseFilters } from '@nestjs/common';
import { Connection } from 'mongoose';
import { Company, CompanySchema } from './schemas/company.schema';

export const companyProviders = [
  {
    provide: 'COMPANY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model(Company.name, CompanySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
