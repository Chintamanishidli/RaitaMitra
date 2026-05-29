// App.jsx

export default function RaitaMitraHomepage() {
  const programs = [
    {
      title: "Farmer Empowerment",
      description:
        "Supporting farmers with training, guidance, and modern agricultural practices.",
    },
    {
      title: "Education Support",
      description:
        "Helping rural students with scholarships, mentorship, and digital learning.",
    },
    {
      title: "Women Development",
      description:
        "Creating opportunities for women through self-help and skill programs.",
    },
    {
      title: "Health & Awareness",
      description:
        "Organizing rural health camps and awareness programs.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Farmers Supported" },
    { number: "50+", label: "Villages Reached" },
    { number: "120+", label: "Events Conducted" },
    { number: "500+", label: "Volunteers" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Raita Mitra
            </h1>
            <p className="text-xs text-gray-500">Social Trust</p>
          </div>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#home" className="hover:text-green-700 transition">
              Home
            </a>

            <a href="#about" className="hover:text-green-700 transition">
              About
            </a>

            <a href="#programs" className="hover:text-green-700 transition">
              Programs
            </a>

            <a href="#gallery" className="hover:text-green-700 transition">
              Gallery
            </a>

            <a href="#contact" className="hover:text-green-700 transition">
              Contact
            </a>
          </nav>

          <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-xl shadow-lg transition">
            Donate Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Empowering Farmers <br />
            Building Strong Villages
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Raita Mitra Social Trust works towards sustainable agriculture,
            rural education, women empowerment, and social development.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl transition">
              Join Our Mission
            </button>

            <button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1200&auto=format&fit=crop"
              alt="Farmers"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-green-700">
              About Our Trust
            </h2>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              We are committed to uplifting rural communities through
              sustainable farming initiatives, education support, healthcare,
              and social empowerment programs.
            </p>

            <p className="text-lg text-gray-600 leading-8">
              Our mission is to create a self-reliant farming ecosystem where
              every farmer and village has access to opportunities, knowledge,
              and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-5xl font-bold mb-2">{item.number}</h3>
              <p className="text-lg text-green-100">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              Our Programs
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creating impact through community-driven programs and sustainable
              development initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 text-3xl">
                  🌱
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              Gallery
            </h2>

            <p className="text-lg text-gray-600">
              Moments from our community programs and events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <img
                key={item}
                src={`https://picsum.photos/600/400?random=${item}`}
                alt="Gallery"
                className="rounded-3xl shadow-lg hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-green-700 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Together We Can Transform Rural Lives
          </h2>

          <p className="text-xl text-green-100 mb-10">
            Join hands with us to support farmers, students, and rural
            communities across Karnataka.
          </p>

          <button className="bg-white text-green-700 hover:bg-gray-100 px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl transition">
            Become a Volunteer
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Raita Mitra Social Trust
            </h3>

            <p className="leading-7 text-gray-400">
              Working towards farmer welfare, education, social empowerment,
              and sustainable village development.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>About Us</li>
              <li>Programs</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h4>

            <p className="text-gray-400 leading-7">
              Karnataka, India <br />
              Email: info@raitamitra.org <br />
              Phone: +91 9876543210
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          © 2026 Raita Mitra Social Trust. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}