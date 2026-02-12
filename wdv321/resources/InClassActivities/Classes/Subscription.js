export default class Subscription {
    constructor(name, cost) {
        this.name = name;
        this.cost = parseFloat(cost);
    }

    static calculateTotal(list) {
        let total = 0;
        list.forEach(item => total += item.cost);
        return total;
    }
}