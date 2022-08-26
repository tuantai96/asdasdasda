export default class MenuService {

    getTreeMenu() {
        return fetch('data/menu-tree.json').then(res => res.json()).then(d => d.root);
    }
    
}
