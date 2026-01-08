import { Injectable } from '@nestjs/common';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject('COMPANY_MODEL') private companyModel: Model<Company>
  ){}
  
}
