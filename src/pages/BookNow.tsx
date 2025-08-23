import React, { useEffect } from 'react';

const BookNow: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-[#d2b9e3] via-[#b7a0c7] to-[#6a4c69] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wave.png')] opacity-10 mix-blend-soft-light bg-repeat"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
            The Experience Your Skin Has Been Waiting For
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Book now and thank yourself later
          </p>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-bold mb-2 text-[#6a4c69]">Hours</h2>
              <p className="text-gray-600">Monday – Sunday</p>
              <p className="text-gray-600">11:00 AM – 7:00 PM</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-bold mb-2 text-[#6a4c69]">Before You Book</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Please arrive with clean skin</li>
                <li>24-hour cancellation notice required</li>
                <li>Late arrivals may reduce treatment time</li>
              </ul>
            </div>
          </div>

          {/* Booking Iframe */}
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden shadow">
              <iframe src="https://app.acuityscheduling.com/schedule.php?owner=36118242&ref=embedded_csp" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe>
              <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;