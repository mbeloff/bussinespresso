<template>
  <section class="section relative">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-title display">
        Our <span class="highlight">Menu</span>
      </h2>

                  <!-- Bread Options -->
                  <div class="text-center text-gray-300 my-8">
        <p>Signature grilled sandwiches available on thick cut white, sourdough, brioche or gluten free</p>
      </div>
      
      <!-- Favourites Section -->
      <div class="mb-12">
        <h3 class="text-3xl font-display text-[#FFB800] mb-6">Favourites</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="item in favourites" :key="item.id" 
            class="bg-gradient-to-b from-[#0a0a0a] to-black rounded-lg p-6 
                   hover:from-[#111111] hover:to-[#0a0a0a] transition-all duration-300
                   border border-[#1a1a1a] hover:border-[#FFB800]/20 flex flex-col h-full">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden mb-4">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="object-cover w-full h-full"
              />
            </div>
            <h3 class="text-2xl font-display text-[#FFB800] mb-2">{{ item.name }}</h3>
            <p class="text-gray-300 mb-4">{{ item.description }}</p>
            <div class="mt-auto">
              <span class="text-xl font-display text-[#FFB800]">${{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Platinum Section -->
      <div class="mb-12">
        <h3 class="text-3xl font-display text-[#FFB800] mb-6">Platinum</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="item in platinum" :key="item.id" 
            class="bg-gradient-to-b from-[#0a0a0a] to-black rounded-lg p-6 
                   hover:from-[#111111] hover:to-[#0a0a0a] transition-all duration-300
                   border border-[#1a1a1a] hover:border-[#FFB800]/20 flex flex-col h-full">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden mb-4">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="object-cover w-full h-full"
              />
            </div>
            <h3 class="text-2xl font-display text-[#FFB800] mb-2">{{ item.name }}</h3>
            <p class="text-gray-300 mb-4">{{ item.description }}</p>
            <div class="mt-auto">
              <span class="text-xl font-display text-[#FFB800]">${{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>



      <!-- Dessert Toasties Section -->
      <div class="mb-12">
        <h3 class="text-3xl font-display text-[#FFB800] mb-6">Dessert Toasties</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="item in desserts" :key="item.id" 
            class="bg-gradient-to-b from-[#0a0a0a] to-black rounded-lg p-6 
                   hover:from-[#111111] hover:to-[#0a0a0a] transition-all duration-300
                   border border-[#1a1a1a] hover:border-[#FFB800]/20 flex flex-col h-full">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden mb-4">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="object-cover w-full h-full"
              />
            </div>
            <h3 class="text-2xl font-display text-[#FFB800] mb-2">{{ item.name }}</h3>
            <p class="text-gray-300 mb-4">{{ item.description }}</p>
            <div class="mt-auto">
              <span class="text-xl font-display text-[#FFB800]">${{ item.price }}</span>
            </div>
          </div>
        </div>
        <p class="text-center text-gray-300 mt-4">Add French Toast for $2</p>
      </div>

      <!-- Sandwich Dippers Section -->
      <div class="mb-12">
        <h3 class="text-3xl font-display text-[#FFB800] mb-6">Sandwich Dippers</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="item in dippers" :key="item.id" 
            class="bg-gradient-to-b from-[#0a0a0a] to-black rounded-lg p-6 
                   hover:from-[#111111] hover:to-[#0a0a0a] transition-all duration-300
                   border border-[#1a1a1a] hover:border-[#FFB800]/20 flex flex-col h-full">
            <h3 class="text-2xl font-display text-[#FFB800] mb-2">{{ item.name }}</h3>
            <p class="text-gray-300 mb-4">{{ item.description }}</p>
            <div class="mt-auto">
              <span class="text-xl font-display text-[#FFB800]">${{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup>
const favourites = [
  {
    id: 1,
    name: "Cheese Dreams",
    description: "Mozzarella, cheddar & Parmesan, melted to perfection",
    price: 12.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/cheese-dreams.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  },
  {
    id: 2,
    name: "HCT",
    description: "Honey leg ham, house cheese blend, fresh tomato with honey mustard dipping sauce",
    price: 14.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/hct.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  },
  {
    id: 3,
    name: "Cheesymite",
    description: "House cheese blend with Vegemite, a perfect balance of creamy and umami",
    price: 11.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/cheesymite.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  },
  {
    id: 4,
    name: "Chicken Avo",
    description: "BBQ roasted chicken, smashed avocado, mozzarella, and baby spinach with honey mustard sauce",
    price: 15.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/chicken-avo2.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  },
  {
    id: 5,
    name: "Sam's Tuna Melt",
    description: "Ethical tuna with kewpie mayo, mozzarella, avocado, and sun-dried tomatoes",
    price: 14.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/tuna-melt2.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  }
]

const platinum = [
  {
    id: 6,
    name: "CC Cubano",
    description: "Braised pork, honey ham, Swiss cheese, house pickles, and American mustard on a soft long roll",
    price: 16.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/cc-cubano.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  },
  {
    id: 7,
    name: "Tandoori",
    description: "Tandoori chicken with house cheese blend, baby spinach, and raita dipping sauce",
    price: 15.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/tandoori.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  },
  {
    id: 8,
    name: "Meatball Madness",
    description: "Tuscan meatballs, parmesan cheese, grilled bell peppers, and red onion on a soft long roll",
    price: 16.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/meatball-madness.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  }
]

const desserts = [
  {
    id: 9,
    name: "Banana Boat",
    description: "Fresh bananas and Nutella, a sweet and satisfying treat",
    price: 8.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/banana-boat.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  },
  {
    id: 10,
    name: "Apple Pie",
    description: "Slow-cooked apples with cinnamon butter, like homemade apple pie",
    price: 8.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/apple-pie.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  },
  {
    id: 11,
    name: "PB&J",
    description: "American peanut butter with chunky strawberry jam",
    price: 7.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/pbj.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  },
  {
    id: 12,
    name: "Rocky Road",
    description: "Nutella, American peanut butter, chunky strawberry jam, and marshmallow",
    price: 9.99,
    image: "https://ik.imagekit.io/y3ayiqneqlr/bussin/rocky-road.jpg?tr=w-400,h-400,fo-auto,q-80,f-auto"
  }
]

const dippers = [
  {
    id: 13,
    name: "Honey Mustard",
    description: "Sweet and tangy honey mustard with a hint of spice",
    price: 1.99,
  },
  {
    id: 14,
    name: "Ranch",
    description: "Creamy buttermilk ranch with herbs and spices",
    price: 1.99,
  },
  {
    id: 15,
    name: "Raita",
    description: "Yogurt sauce with fresh mint and cucumber",
    price: 1.99,
  },
  {
    id: 16,
    name: "Burger Sauce",
    description: "Classic burger sauce with our special blend",
    price: 1.99,
  }
]
</script> 