import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Sparkles,
  ShoppingBag,
  ArrowUpRight,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const categoryProductData = [
  {
    title: "Rice",
    image: "/images/product-category/rice.webp",
    compressedImg: "/images/product-category/rice-compressed.webp",
    description: "Premium quality grains",
    color: "from-green-600 to-emerald-700",
    icon: "🌾",
    items: "120+ Items",
  },
  {
    title: "Wheat",
    image: "/images/product-category/wheat.webp",
    compressedImg: "/images/product-category/wheat-compressed.webp",
    description: "Fresh milled flour",
    color: "from-green-500 to-green-600",
    icon: "🌾",
    items: "85+ Items",
  },
  {
    title: "Nuts",
    image: "/images/product-category/nuts.webp",
    compressedImg: "/images/product-category/nuts-compressed.webp",
    description: "Crunchy & nutritious",
    color: "from-emerald-500 to-green-600",
    icon: "🥜",
    items: "65+ Items",
  },
  {
    title: "Sugar",
    image: "/images/product-category/sugar.webp",
    compressedImg: "/images/product-category/sugar-compressed.webp",
    description: "Pure sweetness",
    color: "from-green-400 to-emerald-500",
    icon: "🍯",
    items: "30+ Items",
  },
  {
    title: "Spices",
    image: "/images/product-category/spices.webp",
    compressedImg: "/images/product-category/spices-compressed.webp",
    description: "Aromatic flavors",
    color: "from-emerald-600 to-green-700",
    icon: "🌶️",
    items: "200+ Items",
  },
  {
    title: "Fruits",
    image: "/images/product-category/fruits.webp",
    compressedImg: "/images/product-category/fruits-compressed.webp",
    description: "Fresh & juicy",
    color: "from-green-500 to-emerald-600",
    icon: "🍎",
    items: "95+ Items",
  },
  {
    title: "Vegetables",
    image: "/images/product-category/vegetables.webp",
    compressedImg: "/images/product-category/vegetables-compressed.webp",
    description: "Garden fresh produce",
    color: "from-emerald-500 to-green-600",
    icon: "🥕",
    items: "150+ Items",
  },
  {
    title: "Pulses",
    image: "/images/product-category/pulses.webp",
    compressedImg: "/images/product-category/pulses-compressed.webp",
    description: "Protein rich legumes",
    color: "from-green-600 to-emerald-700",
    icon: "🫘",
    items: "75+ Items",
  },
];

// Premium CategoryCard component
const PremiumCategoryCard = ({
  title,
  image,
  compressedImg,
  description,
  color,
  icon,
  items,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      } hover:-translate-y-3`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? "translateY(-12px) scale(1.02)"
          : "translateY(0) scale(1)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Main Card Container */}
      <div className="relative bg-white rounded-3xl  transition-all duration-500 border border-gray-200 hover:border-green-200 overflow-hidden">
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={compressedImg || image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${color} opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
          ></div>

          {/* Top Badge */}
          {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
            <span className="text-sm font-semibold text-gray-700">{items}</span>
          </div> */}

          {/* Icon Float */}
          <div className="absolute top-4 right-4 text-3xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
            {icon}
          </div>

          {/* Hover Action */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center space-x-3 border border-white/30 shadow-xl">
              <ShoppingBag className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Browse {title}</span>
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
              {title}
            </h3>
            <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <ChevronRight className="w-5 h-5 text-green-600" />
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {description}
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
            ></div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">
              Premium Quality
            </span>
            <div className="flex items-center space-x-1">
              <Leaf className="w-3 h-3 text-green-500" />
              <span className="text-xs text-green-600 font-medium">
                Organic
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10">
          <div
            className={`w-full h-full bg-gradient-to-br ${color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
          ></div>
        </div>
      </div>
    </div>
  );
};

function Category() {
  return (
    <div className="min-h-screen bg-white category-section">
      {/* Hero Section */}
      <div className="relative py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-green-500"></div>
            <Sparkles className="w-8 h-8 text-green-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Shop by Category
            </h1>
            <Sparkles className="w-8 h-8 text-emerald-600" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover our premium collection of fresh, organic products
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">820+</div>
              <div className="text-sm text-gray-500">Products</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">8</div>
              <div className="text-sm text-gray-500">Categories</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-500">Organic</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="relative px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryProductData.map((item, index) => (
              <Link to={`/category/${item.title.toLowerCase()}`} key={index}>
                <div
                  key={index}
                  onClick={() => {
                    console.log(
                      `Navigate to /category/${item.title.toLowerCase()}`
                    );
                  }}
                >
                  <PremiumCategoryCard
                    title={item.title}
                    image={item.image}
                    compressedImg={item.compressedImg}
                    description={item.description}
                    color={item.color}
                    icon={item.icon}
                    items={item.items}
                    index={index}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to bringing you the freshest, highest quality
              products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌱",
                title: "100% Organic",
                description: "Certified organic products from trusted farmers",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: "🚚",
                title: "Fast Delivery",
                description: "Same day delivery within city limits",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: "💰",
                title: "Best Prices",
                description: "Competitive pricing with regular discounts",
                color: "from-orange-500 to-red-600",
              },
              {
                icon: "🏆",
                title: "Premium Quality",
                description: "Hand-picked products meeting highest standards",
                color: "from-purple-500 to-pink-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 mb-8 rounded-full border border-green-200 "
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div
                  className={`mt-6 h-1 w-16 mx-auto bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai",
                review:
                  "Amazing quality products! The organic vegetables are so fresh and the delivery is always on time. Highly recommended!",
                rating: 5,
                avatar: "👩",
              },
              {
                name: "Rajesh Kumar",
                location: "Delhi",
                review:
                  "Best prices in the market for organic products. The rice quality is exceptional and my family loves shopping here.",
                rating: 5,
                avatar: "👨",
              },
              {
                name: "Anita Patel",
                location: "Bangalore",
                review:
                  "Excellent customer service and premium quality spices. The variety available is impressive. Will definitely order again!",
                rating: 5,
                avatar: "👩‍💼",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{review.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
