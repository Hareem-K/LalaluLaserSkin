import React from 'react';


const BookNow: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-[#d2b9e3] via-[#b7a0c7] to-[#6a4c69] text-white overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wave.png')] opacity-10 mix-blend-soft-light bg-repeat"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
            The Experience Your Skin Has Been Waiting For
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Book now and thank yourself later
          </p>
        </div>
      </section>


      <iframe src="https://app.acuityscheduling.com/schedule.php?owner=36118242&ref=embedded_csp" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe>
      <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>

    </div>
  );
};

export default BookNow;