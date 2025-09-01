'use client';

import { motion } from 'framer-motion';
import { Gamepad2, TrendingUp, Users, Shield, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">GameBoost Pro</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <Link href="/coming-soon">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Level Up Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Gaming</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Connect with professional boosters and coaches. Progress faster in competitive titles, 
            purchase in-game currency safely, and book personalized coaching sessions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/coming-soon">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
                Start Boosting <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 text-lg">Everything you need to dominate the competition</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Boosting Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500 transition-colors"
            >
              <TrendingUp className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Rank Boosting</h3>
              <p className="text-gray-300 mb-6">
                Professional rank boosts, level progression, and custom achievements. 
                Reach your desired rank faster with our expert boosters.
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• Competitive rank advancement</li>
                <li>• Level progression services</li>
                <li>• Achievement unlocking</li>
                <li>• Account safety guaranteed</li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors">
                View Boosting Options
              </button>
            </motion.div>

            {/* Currency Sales */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500 transition-colors"
            >
              <Shield className="h-12 w-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Game Currency</h3>
              <p className="text-gray-300 mb-6">
                Secure buying and selling of in-game currency. Safe transactions 
                with verified sellers and buyer protection.
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• Secure payment processing</li>
                <li>• Verified seller network</li>
                <li>• Instant delivery</li>
                <li>• Competitive pricing</li>
              </ul>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors">
                Browse Currency
              </button>
            </motion.div>

            {/* Coaching Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500 transition-colors"
            >
              <Users className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Pro Coaching</h3>
              <p className="text-gray-300 mb-6">
                One-on-one or group coaching sessions with top players. 
                Learn strategies and improve your gameplay skills.
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• Personal coaching sessions</li>
                <li>• Group training programs</li>
                <li>• Strategy development</li>
                <li>• Performance analysis</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                Find a Coach
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-300">Happy Gamers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">100K+</div>
              <div className="text-gray-300">Boosts Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Pro Coaches</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9★</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of gamers who trust GameBoost Pro to level up their gaming experience.
          </p>
          <Link href="/coming-soon">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Gamepad2 className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold text-white">GameBoost Pro</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 GameBoost Pro. All rights reserved.</p>
              <p className="text-sm mt-1">Secure • Reliable • Professional</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
