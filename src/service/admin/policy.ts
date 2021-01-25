import { Provide } from '@midwayjs/decorator';
// import { IUserOptions } from '../interface';


@Provide()
export class PolicyService {

    async loadPolicyService(e: { loadPolicy: () => any; }) { await e.loadPolicy(); }

    async enforceService(e: { enforce: (arg0: string, arg1: string, arg2: string) => any; }) { await e.enforce('alice', 'data1', 'read'); }

    // Modify the policy.

    // async addPolicyService(e: { addPolicy: (arg0: any) => any; }) { await e.addPolicy(); }
    
    // await e.removePolicy(...);

    // Save the policy back to DB.

    async savePolicyService(e){await e.savePolicy();}
}
