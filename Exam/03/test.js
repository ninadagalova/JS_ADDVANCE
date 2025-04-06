const { expect } = require("chai");
const homeGardener = require("./homeGardener");

describe("homeGardener", function () {
    describe("plantCareInstructions", function () {
        it("should return correct instructions for succulent", function () {
            expect(homeGardener.plantCareInstructions("succulent"))
                .to.equal("Succulents require minimal watering, indirect sunlight, and well-draining soil.");
        });

        it("should return correct instructions for vegetable", function () {
            expect(homeGardener.plantCareInstructions("vegetable"))
                .to.equal("Vegetables need full sun, regular watering, and nutrient-rich soil.");
        });

        it("should return correct instructions for flowering", function () {
            expect(homeGardener.plantCareInstructions("flowering"))
                .to.equal("Flowering plants require moderate watering, occasional fertilization, and pruning.");
        });

        it("should return correct instructions for tree", function () {
            expect(homeGardener.plantCareInstructions("tree"))
                .to.equal("Trees need deep watering, proper spacing, and regular mulching.");
        });

        it("should throw an error for invalid plant type", function () {
            expect(() => homeGardener.plantCareInstructions("cactus"))
                .to.throw("Invalid plant type!");
        });
    });

    describe("availablePlants", function () {
        it("should return correct count of suitable plants", function () {
            expect(homeGardener.availablePlants([10, 20, 30, 40], 25))
                .to.equal("There are 2 plants suitable for your garden height criteria!");
        });

        it("should return zero suitable plants if none match the criteria", function () {
            expect(homeGardener.availablePlants([50, 60, 70], 25))
                .to.equal("There are 0 plants suitable for your garden height criteria!");
        });

        it("should correctly handle negative plant sizes", function () {
            expect(homeGardener.availablePlants([-10, 5, 15], 20))
                .to.equal("There are 2 plants suitable for your garden height criteria!");
        });

        it("should throw an error if plantSizes is not an array", function () {
            expect(() => homeGardener.availablePlants("invalid", 20))
                .to.throw("Invalid Information!");
        });

        it("should throw an error if maxHeight is not a number", function () {
            expect(() => homeGardener.availablePlants([10, 20, 30], "invalid"))
                .to.throw("Invalid Information!");
        });

        it("should throw an error if plantSizes is an empty array", function () {
            expect(() => homeGardener.availablePlants([], 10))
                .to.throw("Invalid Information!");
        });

        it("should throw an error if maxHeight is less than 1", function () {
            expect(() => homeGardener.availablePlants([10, 20, 30], 0))
                .to.throw("Invalid Information!");
        });
    });

    describe("gardenExpenses", function () {
        it("should calculate total cost without discount", function () {
            expect(homeGardener.gardenExpenses(["shovel", "rake"], ["vegetable seeds"], false))
                .to.equal("You spent $45.00 on tools and seeds!");
        });

        it("should calculate total cost with discount", function () {
            expect(homeGardener.gardenExpenses(["shovel", "rake"], ["vegetable seeds"], true))
                .to.equal("You spent $40.50 on tools and seeds with a 10% discount!");
        });

        it("should calculate total cost with multiple tools and seeds", function () {
            expect(homeGardener.gardenExpenses(["shovel", "rake", "watering can"], ["vegetable seeds", "flower seeds"], false))
                .to.equal("You spent $63.00 on tools and seeds!");
        });

        it("should return zero cost if no tools and no seeds are bought", function () {
            expect(homeGardener.gardenExpenses([], [], false))
                .to.equal("You spent $0.00 on tools and seeds!");
        });

        it("should calculate cost correctly when only seeds are bought", function () {
            expect(homeGardener.gardenExpenses([], ["vegetable seeds", "herb seeds"], false))
                .to.equal("You spent $8.00 on tools and seeds!");
        });

        it("should calculate cost correctly when only tools are bought", function () {
            expect(homeGardener.gardenExpenses(["shovel", "watering can"], [], false))
                .to.equal("You spent $35.00 on tools and seeds!");
        });

        it("should calculate correct discount when only seeds are bought", function () {
            expect(homeGardener.gardenExpenses([], ["vegetable seeds", "herb seeds"], true))
                .to.equal("You spent $7.20 on tools and seeds with a 10% discount!");
        });

        it("should throw an error if tools is not an array", function () {
            expect(() => homeGardener.gardenExpenses("invalid", ["vegetable seeds"], false))
                .to.throw("Invalid Information!");
        });

        it("should throw an error if seeds is not an array", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], "invalid", false))
                .to.throw("Invalid Information!");
        });

        it("should throw an error if discount is not a boolean", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], ["vegetable seeds"], "invalid"))
                .to.throw("Invalid Information!");
        });
        
    });
});
