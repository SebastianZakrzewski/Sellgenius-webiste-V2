"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Download, Volume2, Settings, Maximize } from "lucide-react";

export function PromoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <section className="min-h-screen bg-[#000000] flex flex-col items-center justify-center py-24 px-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Poznaj <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500 bg-clip-text text-transparent">SellGenius</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Zobacz w akcji, jak nasze rozwiązania AI mogą przekształcić Twój biznes i zwiększyć sprzedaż
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full aspect-video bg-[#0A0A0A] rounded-lg overflow-hidden mb-8"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            poster="/images/hero.png"
          >
            <source src="/videos/promo.mp4" type="video/mp4" />
            Twoja przeglądarka nie obsługuje odtwarzania video.
          </video>

          {/* Play Button Overlay */}
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
              onClick={handlePlay}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl"
                style={{
                  boxShadow: '0 0 40px rgba(34, 211, 238, 0.6), 0 0 80px rgba(59, 130, 246, 0.4)'
                }}
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
              </motion.div>
            </motion.div>
          )}

          {/* Click to play text */}
          {!isPlaying && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium z-10"
            >
              Kliknij, aby odtworzyć prezentację
            </motion.p>
          )}

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-3 w-full h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePlay}
                  className="text-white hover:text-cyan-400 transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                <span className="text-white text-sm font-medium">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-white hover:text-cyan-400 transition-colors" aria-label="Volume">
                  <Volume2 className="w-5 h-5" />
                </button>
                <button className="text-white hover:text-cyan-400 transition-colors" aria-label="Settings">
                  <Settings className="w-5 h-5" />
                </button>
                <button className="text-white hover:text-cyan-400 transition-colors" aria-label="Fullscreen">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            W tej prezentacji poznasz wszystkie nasze usługi: GeniusAds, GeniusSales, GeniusSupport i GeniusShop. 
            Zobaczysz realne przykłady implementacji i rezultaty, które osiągnęli nasi klienci.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={handlePlay}
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 text-white flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Odtwórz Pełną Prezentację
          </button>
          <button
            className="px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 uppercase tracking-wide border-2 border-gray-700 text-white hover:border-cyan-400 hover:bg-cyan-400/10 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Pobierz Materiały
          </button>
        </motion.div>
      </div>
    </section>
  );
}

