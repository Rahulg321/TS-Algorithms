// Coin Change Problem
function minCoins(coins: number[], amount: number): number {
    // Sort the coins in descending order
    coins.sort((a, b) => b - a);

    let coinCount = 0;
    let remainingAmount = amount;

    for (let i = 0; i < coins.length; i++) {
      while (remainingAmount >= coins[i]) {
        remainingAmount -= coins[i];
        coinCount++;
      }
    }

    return coinCount;
  }

  // Example usage:
  const coins: number[] = [1, 5, 10, 25];
  const amount: number = 12;
  const result: number = minCoins(coins, amount);
  console.log(result); // Output: 4 (25, 10, 5, 1)


  // Fractional Knapsack Problem
  interface Item {
    weight: number;
    value: number;
    ratio?: number; // Optional property for value-to-weight ratio
  }

  function fractionalKnapsack(capacity: number, items: Item[]): number {
    // Calculate value-to-weight ratio for each item
    items.forEach((item) => {
      item.ratio = item.value / item.weight;
    });


    // Sort items by ratio in descending order
    // getting more value for the weight
    items.sort((a, b) => b.ratio! - a.ratio!); // Non-null assertion (!) since ratio is calculated above

    let totalValue = 0;
    let remainingCapacity = capacity;

    for (let i = 0; i < items.length; i++) {
      if (items[i].weight <= remainingCapacity) {
        totalValue += items[i].value;
        remainingCapacity -= items[i].weight;
      } else {
        totalValue += items[i].ratio! * remainingCapacity; // Non-null assertion (!)
        break; // Knapsack is full
      }
    }

    return totalValue;
  }

  // Example usage:
  const capacity: number = 50;
  const items: Item[] = [
    { weight: 10, value: 60 },
    { weight: 20, value: 100 },
    { weight: 30, value: 120 },
  ];
  const result2: number = fractionalKnapsack(capacity, items);
  console.log(result2); // Output: 240
