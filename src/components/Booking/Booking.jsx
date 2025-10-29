import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import {
  FaStar,
  FaMapMarkerAlt,
  FaPlane,
  FaHotel,
  FaUtensils,
  FaCamera,
  FaCalendar,
  FaUsers,
  FaWifi,
  FaSwimmingPool,
  FaCar,
  FaUmbrellaBeach,
  FaSpa,
  FaHiking,
  FaGlassCheers,
  FaConciergeBell,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowLeft
} from "react-icons/fa";

const destinations = [
  {
    id: 1,
    name: "Paris",
    location: "France, Europe",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1600",
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1600",
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1600",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1600",
      "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=1600"
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41994.2414242069!2d2.2944813!3d48.8583701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877b17f93%3A0x4a45b8e5e5d8e92a!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1618573642436!5m2!1sen!2sfr",
    description: "The City of Light awaits you with its timeless charm, world-class cuisine, and breathtaking architecture. From the majestic Eiffel Tower to the artistic halls of the Louvre, Paris offers an unforgettable romantic getaway. Stroll along the Seine, explore charming neighborhoods like Montmartre, and indulge in exquisite French pastries at local patisseries.",
    highlights: [
      "Eiffel Tower & Seine River Cruise",
      "Louvre Museum & Mona Lisa",
      "Notre-Dame Cathedral",
      "Champs-Élysées Shopping",
      "Montmartre & Sacré-Cœur",
      "French Gourmet Dining Experience"
    ],
    bestTime: "April - June & September - October",
    temperature: "15°C - 25°C",
    rating: 4.8,
    reviews: "12,458"
  },
  {
    id: 2,
    name: "Maldives",
    location: "Indian Ocean",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",
      "https://images.unsplash.com/photo-1582719478171-2b36d41e4c4d?w=1600",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600"
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085135.808035533!2d71.0!3d3.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24069b92d325f47b%3A0xa0dcadf6e22b0a09!2sMaldives!5e0!3m2!1sen!2s!4v1618573723642!5m2!1sen!2s",
    description: "Escape to paradise with crystal-clear turquoise waters, pristine white-sand beaches, and luxurious overwater bungalows. The Maldives offers the ultimate romantic getaway with world-class diving, spa treatments, and unforgettable sunsets. Experience perfect serenity while snorkeling with manta rays, enjoying private beach dinners, and relaxing in your own infinity pool overlooking the Indian Ocean.",
    highlights: [
      "Overwater Luxury Villas",
      "Coral Reef Snorkeling & Diving",
      "Private Sandbank Picnics",
      "Spa & Wellness Treatments",
      "Sunset Dolphin Cruises",
      "Underwater Restaurant Dining"
    ],
    bestTime: "November - April",
    temperature: "28°C - 32°C",
    rating: 4.9,
    reviews: "8,742"
  },
  {
    id: 3,
    name: "Tokyo",
    location: "Japan, Asia",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
      "https://images.unsplash.com/photo-1549693578-d683be217e58?w=1600",
      "https://images.unsplash.com/photo-1526481280691-9062e0e4b315?w=1600",
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1600",
      "https://images.unsplash.com/photo-1540959733332-8a43da4b0194?w=1600",
      "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?w=1600"
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414260.2284536332!2d139.4913343!3d35.652832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf243d72a2d%3A0x2f5a6e864b3a7d9b!2sTokyo%2C%20Japan!5e0!3m2!1sen!2s!4v1618573804929!5m2!1sen!2s",
    description: "Immerse yourself in the perfect blend of ancient tradition and cutting-edge technology. Tokyo dazzles with its neon-lit streets, serene temples, and world-renowned cuisine. From the bustling Shibuya Crossing to the peaceful Meiji Shrine, experience the harmony of old and new. Discover anime culture in Akihabara, savor authentic sushi at Tsukiji Market, and witness the beauty of cherry blossoms in spring.",
    highlights: [
      "Shibuya Crossing & Tokyo Skytree",
      "Traditional Temples & Gardens",
      "Tsukiji Fish Market & Sushi",
      "Akihabara Electric Town",
      "Cherry Blossom Viewing",
      "Traditional Tea Ceremonies"
    ],
    bestTime: "March - May & September - November",
    temperature: "15°C - 28°C",
    rating: 4.7,
    reviews: "15,893"
  },
  {
    id: 4,
    name: "Switzerland",
    location: "Central Europe",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600",
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=1600",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1600",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600"
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221029.493907235!2d6.1431577!3d46.2043907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sGeneva%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1618573642436!5m2!1sen!2sch",
    description: "Discover the breathtaking beauty of the Swiss Alps, pristine lakes, and charming villages. Switzerland offers world-class skiing, hiking adventures, and luxurious mountain resorts. Experience the perfect blend of natural wonders and urban sophistication in cities like Zurich and Geneva.",
    highlights: [
      "Swiss Alps & Mountain Railways",
      "Lake Geneva & Scenic Cruises",
      "Luxury Ski Resorts",
      "Chocolate & Cheese Tasting",
      "Historic Old Towns",
      "Jungfrau Region Exploration"
    ],
    bestTime: "June - September & December - March",
    temperature: "5°C - 25°C",
    rating: 4.8,
    reviews: "9,673"
  },
  {
    id: 5,
    name: "Bali",
    location: "Indonesia, Asia",
    images: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1600",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1600",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1600",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1600",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1600",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1600"
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252793.204345883!2d115.088184!3d-8.455471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1618573723642!5m2!1sen!2sid",
    description: "Experience the Island of Gods with its rich culture, stunning beaches, and lush rice terraces. Bali offers spiritual retreats, vibrant nightlife, and world-class surfing. Immerse yourself in traditional ceremonies, yoga retreats, and the warm hospitality of the Balinese people.",
    highlights: [
      "Ubud Rice Terraces & Monkey Forest",
      "Beach Clubs & Sunset Views",
      "Traditional Temple Ceremonies",
      "Water Sports & Surfing",
      "Luxury Villa Experiences",
      "Balinese Spa & Wellness"
    ],
    bestTime: "April - October",
    temperature: "26°C - 31°C",
    rating: 4.7,
    reviews: "14,892"
  },
  {
    id: 6,
    name: "New York",
    location: "USA, North America",
    images: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600",
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=1600",
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1600",
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600",
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=1600",
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1600"
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.914768182!2d-74.120107!3d40.697488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1618573804929!5m2!1sen!2sus",
    description: "The city that never sleeps offers endless possibilities from Broadway shows to world-class museums and iconic landmarks. Experience the vibrant energy of Times Square, the tranquility of Central Park, and the diverse culinary scene that makes New York a global destination.",
    highlights: [
      "Statue of Liberty & Ellis Island",
      "Broadway Shows & Times Square",
      "Central Park & Museums",
      "Empire State Building Views",
      "Shopping & Fine Dining",
      "Brooklyn Bridge & Skyline"
    ],
    bestTime: "April - June & September - November",
    temperature: "10°C - 28°C",
    rating: 4.6,
    reviews: "18,452"
  },
  {
    id: 7,
    name: "Santorini",
    location: "Greece, Europe",
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600",
      "https://images.unsplash.com/photo-1533090368676-1fd25485db88?w=1600",
      "https://images.unsplash.com/photo-1502741338007-0d67ce0c6e9c?w=1600",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600",
      "https://images.unsplash.com/photo-1533090368676-1fd25485db88?w=1600",
      "https://images.unsplash.com/photo-1502741338007-0d67ce0c6e9c?w=1600"
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410387.243546577!2d25.324524!3d36.393156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499cdce05e3bce9%3A0x9f4c193023647e9f!2sSantorini!5e0!3m2!1sen!2sgr!4v1618573642436!5m2!1sen!2sgr",
    description: "Experience the magic of white-washed buildings, blue-domed churches, and spectacular sunsets over the caldera. Santorini offers romantic getaways, volcanic beaches, and exquisite Mediterranean cuisine in one of the world's most photogenic destinations.",
    highlights: [
      "Oia Sunset Views",
      "Caldera Cruise & Hot Springs",
      "Wine Tasting & Vineyards",
      "Volcanic Beach Exploration",
      "Traditional Greek Cuisine",
      "Luxury Cave Hotels"
    ],
    bestTime: "May - October",
    temperature: "20°C - 30°C",
    rating: 4.9,
    reviews: "11,784"
  },
  {
    id: 8,
    name: "Dubai",
    location: "United Arab Emirates, Middle East",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600",
      "https://images.unsplash.com/photo-1520250497596-4c4eac0b5a76?w=1600",
      "https://images.unsplash.com/photo-1542259009471-38a0ac901b1d?w=1600",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600",
      "https://images.unsplash.com/photo-1520250497596-4c4eac0b5a76?w=1600",
      "https://images.unsplash.com/photo-1542259009471-38a0ac901b1d?w=1600"
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.6509692403!2d54.947284!3d25.075759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1618573723642!5m2!1sen!2sae",
    description: "Discover the city of superlatives with the world's tallest building, largest shopping malls, and most luxurious experiences. Dubai blends modern architecture with traditional Arabian culture, offering desert adventures, beach resorts, and unparalleled shopping.",
    highlights: [
      "Burj Khalifa & Dubai Fountain",
      "Desert Safari & Camel Riding",
      "Luxury Shopping Malls",
      "Palm Jumeirah & Beaches",
      "Traditional Gold Souks",
      "Skydiving & Adventure"
    ],
    bestTime: "November - March",
    temperature: "20°C - 35°C",
    rating: 4.7,
    reviews: "13,567"
  },
  {
    id: 9,
    name: "Barcelona",
    location: "Spain, Europe",
    images: [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1600",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1600",
      "https://images.unsplash.com/photo-1562883677-d5f2f10b4e0e?w=1600",
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1600",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1600",
      "https://images.unsplash.com/photo-1562883677-d5f2f10b4e0e?w=1600"
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239349.813665753!2d2.078727!3d41.394767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1618573804929!5m2!1sen!2ses",
    description: "Experience the vibrant Catalan capital with its unique Gaudí architecture, bustling markets, and Mediterranean beaches. Barcelona offers a perfect blend of art, history, and modern lifestyle with its famous tapas bars, Gothic Quarter, and lively cultural scene.",
    highlights: [
      "Sagrada Familia & Gaudí Architecture",
      "Gothic Quarter & Historic Streets",
      "La Boqueria Market & Tapas",
      "Park Güell & City Views",
      "Beachfront & Mediterranean",
      "FC Barcelona Stadium Tour"
    ],
    bestTime: "March - May & September - November",
    temperature: "15°C - 28°C",
    rating: 4.8,
    reviews: "16,234"
  }
];

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [packageIndex, setPackageIndex] = useState(1); // Default to standard package
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const packages = [
    {
      name: "Essential Package",
      days: "4 Days / 3 Nights",
      price: 399,
      rating: 4.3,
      popular: false,
      features: [
        "Comfortable 3-Star Hotel",
        "Daily Breakfast Included",
        "City Orientation Tour",
        "Airport Transfers",
        "Free WiFi",
        "Travel Insurance Basic"
      ],
      description: "Perfect for budget-conscious travelers who want comfort and essential amenities"
    },
    {
      name: "Standard Package",
      days: "6 Days / 5 Nights",
      price: 799,
      rating: 4.7,
      popular: true,
      features: [
        "4-Star Luxury Hotel",
        "All Meals Included",
        "Professional Guided Tours",
        "Adventure Activities",
        "Spa Access (2 sessions)",
        "Private Transfers",
        "Travel Insurance Premium",
        "24/7 Concierge Service"
      ],
      description: "Our most popular choice offering great value and comprehensive services"
    },
    {
      name: "Premium Package",
      days: "8 Days / 7 Nights",
      price: 1299,
      rating: 4.9,
      popular: false,
      features: [
        "5-Star Luxury Resort",
        "Gourmet Dining Experience",
        "Private Tour Guide",
        "All Activities & Entrances",
        "Unlimited Spa Treatments",
        "Luxury Car Transfers",
        "Personal Photographer (2 days)",
        "VIP Airport Services",
        "Premium Travel Insurance",
        "Butler Service"
      ],
      description: "Ultimate luxury experience with personalized services and exclusive access"
    },
    {
      name: "Ultimate Luxury Package",
      days: "10 Days / 9 Nights",
      price: 2199,
      rating: 5.0,
      popular: false,
      features: [
        "Premium 5-Star Resort Suite",
        "Fine Dining & Premium Drinks",
        "Dedicated Private Guide & Driver",
        "Helicopter Tour Experience",
        "All Premium Activities Included",
        "Unlimited Spa & Wellness",
        "Luxury Yacht Experience",
        "Personal Concierge 24/7",
        "First Class Flights Included",
        "VIP Everything Included"
      ],
      description: "The epitome of luxury travel with every imaginable comfort and exclusive experience"
    }
  ];

  useEffect(() => {
    if (destination?.images) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % destination.images.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [destination]);

  useEffect(() => {
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 14);
    setDate(nextDate.toISOString().split("T")[0]);
  }, []);

  const totalPrice = () => {
    const base = packages[packageIndex].price * guests;
    const taxes = base * 0.12; // 12% tax
    const service = 75;
    return (base + taxes + service).toFixed(2);
  };

  const handleBooking = () => {
    const data = {
      destination: destination.name,
      package: packages[packageIndex],
      guests,
      date,
      total: totalPrice(),
      bookingId: `BK${Date.now()}${Math.random().toString(36).substr(2, 5)}`.toUpperCase()
    };
    setBookingData(data);
    setShowConfirmation(true);
  };

  if (!destination) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-700 bg-gradient-to-br from-blue-50 to-green-50">
        <h2 className="text-4xl font-bold mb-4">Destination Not Found 😢</h2>
        <p className="text-gray-600 mb-8">The destination you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#85D200] text-white px-8 py-4 rounded-full hover:bg-[#6cb500] transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Destinations
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-30">
        <button
          onClick={() => navigate(-1)}
          className="bg-white/90 hover:bg-white text-gray-800 px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 backdrop-blur-sm"
        >
          <FaArrowLeft />
          Back
        </button>
      </div>

      {/* HEADER CAROUSEL */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={destination.images[currentImage]}
          alt={destination.name}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Image Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {destination.images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImage ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>

        {/* Header Content */}
        <div className="absolute bottom-16 left-10 text-white max-w-2xl">
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
              <FaStar className="text-yellow-400" />
              <span>{destination.rating} • {destination.reviews} reviews</span>
            </div>
            <div className="bg-[#85D200] px-3 py-1 rounded-full text-sm font-medium">
              Popular Destination
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3">{destination.name}</h1>
          <p className="text-xl flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#85D200]" /> 
            {destination.location}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destination.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${destination.name} ${index + 1}`}
                className={`w-full h-32 object-cover rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === selectedImage ? 'ring-4 ring-[#85D200]' : 'opacity-80 hover:opacity-100'
                }`}
                onClick={() => {
                  setSelectedImage(index);
                  setCurrentImage(index);
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* ABOUT */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About {destination.name}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {destination.description}
              </p>
              
              {/* Destination Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl">
                <div className="text-center">
                  <FaStar className="text-yellow-400 text-2xl mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">{destination.rating}/5</p>
                  <p className="text-gray-600 text-sm">Rating</p>
                </div>
                <div className="text-center">
                  <FaCalendar className="text-[#85D200] text-2xl mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">{destination.bestTime}</p>
                  <p className="text-gray-600 text-sm">Best Time</p>
                </div>
                <div className="text-center">
                  <FaUsers className="text-blue-500 text-2xl mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">{destination.reviews}</p>
                  <p className="text-gray-600 text-sm">Reviews</p>
                </div>
                <div className="text-center">
                  <FaUtensils className="text-red-400 text-2xl mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">{destination.temperature}</p>
                  <p className="text-gray-600 text-sm">Temperature</p>
                </div>
              </div>
            </section>

            {/* HIGHLIGHTS */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Trip Highlights & Experiences</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <FaCheckCircle className="text-[#85D200] text-lg mt-1 flex-shrink-0" />
                    <p className="text-gray-800 font-medium">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* AMENITIES */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Included Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: FaWifi, label: "Free WiFi", color: "text-blue-500" },
                  { icon: FaSwimmingPool, label: "Swimming Pool", color: "text-cyan-500" },
                  { icon: FaSpa, label: "Spa", color: "text-pink-500" },
                  { icon: FaUtensils, label: "Restaurant", color: "text-red-400" },
                  { icon: FaCar, label: "Transfers", color: "text-gray-600" },
                  { icon: FaUmbrellaBeach, label: "Beach Access", color: "text-yellow-500" },
                  { icon: FaHiking, label: "Guided Tours", color: "text-green-500" },
                  { icon: FaShieldAlt, label: "Travel Insurance", color: "text-purple-500" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all">
                    <item.icon className={`text-2xl mx-auto mb-2 ${item.color}`} />
                    <p className="text-sm font-medium text-gray-800">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* MAP SECTION */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Location & Map
              </h3>
              <div className="bg-gradient-to-r from-blue-100 to-green-100 p-1 rounded-2xl">
                <iframe
                  src={destination.map}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-xl shadow-lg"
                ></iframe>
              </div>
            </section>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            {/* PACKAGES */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Choose Your Package</h3>
              <div className="space-y-4">
                {packages.map((pkg, i) => (
                  <div
                    key={i}
                    onClick={() => setPackageIndex(i)}
                    className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
                      packageIndex === i
                        ? "border-[#85D200] bg-gradient-to-r from-green-50 to-emerald-50 shadow-xl transform scale-105"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    } ${pkg.popular ? 'ring-2 ring-yellow-400' : ''}`}
                  >
                    {pkg.popular && (
                      <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                        ⭐ MOST POPULAR
                      </div>
                    )}
                    <h4 className="text-xl font-bold mb-2 text-gray-900">{pkg.name}</h4>
                    <p className="text-gray-500 mb-2 font-medium">{pkg.days}</p>
                    <div className="flex items-center gap-1 mb-3">
                      <FaStar className="text-yellow-400" /> 
                      <span className="font-semibold">{pkg.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">Rating</span>
                    </div>
                    <p className="text-[#85D200] text-2xl font-bold mb-3">
                      ${pkg.price} 
                      <span className="text-gray-500 text-sm font-normal"> / person</span>
                    </p>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                    <ul className="space-y-2">
                      {pkg.features.slice(0, 4).map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <FaCheckCircle className="text-[#85D200] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                      {pkg.features.length > 4 && (
                        <li className="text-sm text-gray-500 font-medium">
                          + {pkg.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* BOOKING FORM */}
            <section className="sticky top-24 bg-white p-8 shadow-2xl rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-center mb-2">
                Book Your Dream Trip ✈️
              </h3>
              <p className="text-gray-600 text-center mb-6">Secure your spot today!</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block font-semibold mb-3 text-gray-700">
                    <FaCalendar className="inline mr-2 text-[#85D200]" />
                    Travel Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-[#85D200] focus:border-[#85D200] transition-all"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-3 text-gray-700">
                    <FaUsers className="inline mr-2 text-[#85D200]" />
                    Number of Guests
                  </label>
                  <div className="flex items-center justify-between bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50"
                      disabled={guests <= 1}
                    >
                      -
                    </button>
                    <span className="text-xl font-bold text-gray-900 min-w-8 text-center">{guests}</span>
                    <button
                      onClick={() => setGuests(guests + 1)}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Price Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>${packages[packageIndex].price} × {guests} guests</span>
                      <span>${(packages[packageIndex].price * guests).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Taxes & Fees</span>
                      <span>${(packages[packageIndex].price * guests * 0.12).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Service Charge</span>
                      <span>$75.00</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900 mt-3 pt-3 border-t border-gray-200">
                      <span>Total Amount</span>
                      <span>${totalPrice()}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-[#85D200] to-[#6cb500] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Confirm Booking
                </button>

                <div className="text-center">
                  <p className="text-green-600 text-sm font-medium">
                    <FaShieldAlt className="inline mr-1" />
                    Free cancellation until 48 hours before travel
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    Best price guaranteed • Instant confirmation
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CONFIRMATION MODAL */}
      {showConfirmation && bookingData && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center animate-slideUp">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-4xl text-green-500" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed! 🎉</h2>
            <p className="text-gray-600 mb-2">Your dream vacation to</p>
            <h3 className="text-2xl font-bold text-[#85D200] mb-6">{bookingData.destination}</h3>
            
            <div className="bg-gray-50 rounded-2xl p-6 mb-6 text-left">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-semibold">{bookingData.bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Package:</span>
                  <span className="font-semibold">{bookingData.package.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests:</span>
                  <span className="font-semibold">{bookingData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Travel Date:</span>
                  <span className="font-semibold">{new Date(bookingData.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-200">
                  <span>Total Paid:</span>
                  <span className="text-[#85D200]">${bookingData.total}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              We've sent the booking details to your email. Get ready for an unforgettable experience!
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                Continue Booking
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex-1 bg-[#85D200] text-white py-3 rounded-xl font-semibold hover:bg-[#6cb500] transition-colors"
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}