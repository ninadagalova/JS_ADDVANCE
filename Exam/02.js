class SnowSportStore {
    constructor(storeName) {
        this.storeName = storeName;
        this.availableEquipment = [];
        this.revenue = 0;
    }

    addEquipment(type, price, condition) {
        if (typeof type !== "string" || type.trim() === "" ||
            typeof price !== "number" || price <= 0 ||
            typeof condition !== "string" || condition.trim() === "") {
            throw new Error("Invalid equipment details!");
        }

        let newEq = { type, price: price.toFixed(2), condition };
        this.availableEquipment.push(newEq);

        return `New equipment added: ${type} / ${condition} condition - ${newEq.price}$.`;
    }

    rentEquipment(type, rentalDays) {
        let equipmentt = this.availableEquipment.find(eq => eq.type === type && eq.condition === "used");

        if (!equipmentt) {
            throw new Error(`${type} is not available for rent!`);
        }

        let rentalCost = (equipmentt.price * 0.1 * rentalDays).toFixed(2);
        this.revenue += Number(rentalCost);

        return `${type} rented for ${rentalDays} days. Total cost: ${rentalCost}$.`;
    }

    sellEquipment(type) {
        let ind = this.availableEquipment.findIndex(x => x.type === type && x.condition === "new");

        if (ind === -1) {
            throw new Error(`${type} is not available for purchase!`);
        }

        let soldEquipment = this.availableEquipment.splice(ind, 1)[0];
        this.revenue += Number(soldEquipment.price);

        return `${type} has been sold for ${soldEquipment.price}$.`;
    }

    showRevenue() {
        if (this.revenue === 0) {
            return "Nothing has been sold or rented.";
        }
        
        return `${this.storeName} has made a total revenue of ${this.revenue.toFixed(2)}$.`;
    }
}
let store = new SnowSportStore('Alpine Gear Shop');
console.log(store.addEquipment('Ski', 500, 'new'));
console.log(store.addEquipment('Boots', 100, 'used'));
console.log(store.addEquipment('Helmet', 200, 'new'));
console.log(store.addEquipment('Snowboard', 300, 'used'));
console.log(store.sellEquipment('Ski'));
console.log(store.sellEquipment('Helmet'));
console.log(store.rentEquipment('Snowboard', 3));
console.log(store.showRevenue());
