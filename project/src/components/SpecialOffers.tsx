import React, { useState, useEffect } from 'react';

export const SpecialOffers = () => {
  const offers = [
    {
      image: "/public/c-2-c.jpg",
      name: "Type-C Cable Bundle",
      description: "Get 3 premium Type-C cables at the price of 2",
      currentPrice: "₹599",
      originalPrice: "₹899",
      discount: "30% OFF",
      duration: 24 // hours
    },
    {
      image: "",
      name: "Projectors",
      description: "High-quality sound with extra bass effect",
      currentPrice: "₹799",
      originalPrice: "₹999",
      discount: "25% OFF",
      duration: 48
    },
    {
      image: "",
      name: "Fast Charger Combo",
      description: "Charger + Cable + Free Power Bank",
      currentPrice: "₹999",
      originalPrice: "₹1299",
      discount: "20% OFF",
      duration: 72
    }
  ];

  const [timeLeft, setTimeLeft] = useState<{ [key: number]: number }>(
    offers.reduce((acc, offer, index) => ({ ...acc, [index]: offer.duration * 3600 }), {})
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTimeLeft = { ...prev };
        Object.keys(newTimeLeft).forEach(key => {
          if (newTimeLeft[Number(key)] > 0) {
            newTimeLeft[Number(key)]--;
          }
        });
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(secs).padStart(2, '0')
    };
  };

  return (
    <section id="special-offers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Offers</h2>
          <p className="text-gray-600">Limited time deals you don't want to miss!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const time = formatTime(timeLeft[index]);
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <img 
                    src={offer.image} 
                    alt={offer.name} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {offer.discount}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{offer.name}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-blue-600">{offer.currentPrice}</div>
                  <div className="text-gray-500 line-through">{offer.originalPrice}</div>
                </div>
                <div className="countdown-timer bg-white p-3 rounded-lg mb-4 flex justify-center space-x-4">
                  <div className="text-center">
                    <span className="font-bold text-xl text-blue-600">{time.hours}</span>
                    <p className="text-sm text-gray-500">Hours</p>
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-xl text-blue-600">{time.minutes}</span>
                    <p className="text-sm text-gray-500">Minutes</p>
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-xl text-blue-600">{time.seconds}</span>
                    <p className="text-sm text-gray-500">Seconds</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Claim Offer
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};