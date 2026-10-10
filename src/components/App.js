import React, { useState } from "react";

const initialMenuItems = [
	{
		id: 1,
		title: "Buttermilk Pancakes",
		category: "breakfast",
		price: 15.99,
		image:
			"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
		description: "Fluffy buttermilk pancakes served with maple syrup.",
	},
	{
		id: 2,
		title: "Country Delight",
		category: "breakfast",
		price: 20.99,
		image:
			"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
		description: "A hearty country-style breakfast with eggs and toast.",
	},
	{
		id: 3,
		title: "Bacon Overflow",
		category: "breakfast",
		price: 8.99,
		image:
			"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
		description: "Crispy bacon with eggs and fresh greens.",
	},
	{
		id: 4,
		title: "Diner Double",
		category: "lunch",
		price: 13.99,
		image:
			"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
		description: "A double cheeseburger with lettuce, tomato, and onion.",
	},
	{
		id: 5,
		title: "Egg Attack",
		category: "lunch",
		price: 22.99,
		image:
			"https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=800&q=80",
		description: "A toasted sandwich stacked with egg and cheese.",
	},
	{
		id: 6,
		title: "American Classic",
		category: "lunch",
		price: 12.99,
		image:
			"https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=800&q=80",
		description: "A classic grilled burger with house toppings.",
	},
	{
		id: 7,
		title: "Godzilla Milkshake",
		category: "shakes",
		price: 6.99,
		image:
			"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
		description: "A thick vanilla milkshake topped with whipped cream.",
	},
	{
		id: 8,
		title: "Oreo Dream",
		category: "shakes",
		price: 18.99,
		image:
			"https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
		description: "A creamy chocolate shake blended with cookie pieces.",
	},
	{
		id: 9,
		title: "Quarantine Buddy",
		category: "shakes",
		price: 16.99,
		image:
			"https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80",
		description: "A cool, sweet strawberry shake.",
	},
];

const categories = [
	{ id: "filter-btn-1", label: "Breakfast", value: "breakfast" },
	{ id: "filter-btn-2", label: "Lunch", value: "lunch" },
	{ id: "filter-btn-3", label: "Shakes", value: "shakes" },
];

function App() {
	const [menuItems] = useState(initialMenuItems);
	const [activeCategory, setActiveCategory] = useState("all");

	const visibleItems =
		activeCategory === "all"
			? menuItems
			: menuItems.filter((item) => item.category === activeCategory);

	return (
		<main id="main">
			<h1>Our Menu</h1>
			<nav aria-label="Filter menu by category">
				<button
					id="filter-btn-all"
					type="button"
					aria-pressed={activeCategory === "all"}
					onClick={() => setActiveCategory("all")}
				>
					All
				</button>
				{categories.map((category) => (
					<button
						id={category.id}
						key={category.id}
						type="button"
						aria-pressed={activeCategory === category.value}
						onClick={() => setActiveCategory(category.value)}
					>
						{category.label}
					</button>
				))}
			</nav>
			<section aria-label="Menu items">
				{visibleItems.map((item) => (
					<article
						className="menu-item"
						data-test-id={`menu-item-${item.category}`}
						key={item.id}
					>
						<img src={item.image} alt={item.title} />
						<h2>{item.title}</h2>
						<p>{item.description}</p>
						<p>Category: {item.category}</p>
						<p>${item.price.toFixed(2)}</p>
					</article>
				))}
			</section>
		</main>
	);
}

export default App;

