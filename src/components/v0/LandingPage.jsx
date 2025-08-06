import { SpotifyIcon } from "../icons/SpotifyIcon";
import { Button } from "../ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-900">Synced.fm</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
                Features
              </a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="w-full text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-white/20 inline-block w-full max-w-screen-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Sync your sound with your balls twin
              </h1>

              <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Start diggin in yo butt
              </p>

              <Button
                size="lg"
                className="flex items-center justify-center gap-3 bg-[#1DB954] hover:bg-[#1ed760] text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                onClick={() => {
                  console.log("Connect with Spotify clicked");
                }}
              >
                <SpotifyIcon className="w-6 h-6" />
                <span>Connect with Spotify</span>
              </Button>

              <p className="text-sm text-slate-500 mt-6">
                Safe and secure • We never store your personal data
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16" id="features">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-screen-xl mx-auto">
            {[
              {
                title: "Your Music",
                desc: "Access your Spotify playlists and favorites",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                ),
              },
              {
                title: "Connect",
                desc: "Share and discover music with friends",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                ),
              },
              {
                title: "Sync",
                desc: "Real-time music synchronization",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
            ].map(({ title, desc, icon }, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/60 backdrop-blur-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-600 text-sm">
              © 2024 Synced.fm. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#privacy" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
