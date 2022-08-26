export default class OrganizationService {

    getTreeOrganization() {
        return fetch('data/organization-tree.json').then(res => res.json()).then(d => d.root);
    }
    
}
