'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Clock, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-8"
        >
          <Link 
            href="/"
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center space-x-3 mb-12"
        >
          <Gamepad2 className="h-12 w-12 text-purple-400" />
          <span className="text-3xl font-bold text-white">GameBoost Pro</span>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="mb-8">
            <Clock className="h-24 w-24 text-purple-400 mx-auto mb-6" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Coming
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Soon</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're working hard to bring you the ultimate gaming services marketplace. 
            Get ready to level up your gaming experience like never before!
          </p>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
            <div className="text-purple-400 text-2xl font-bold mb-2">Q1 2025</div>
            <div className="text-white font-semibold mb-2">Rank Boosting</div>
            <div className="text-gray-400 text-sm">Professional boosting services launch</div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
            <div className="text-green-400 text-2xl font-bold mb-2">Q2 2025</div>
            <div className="text-white font-semibold mb-2">Currency Exchange</div>
            <div className="text-gray-400 text-sm">Secure in-game currency marketplace</div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
            <div className="text-blue-400 text-2xl font-bold mb-2">Q3 2025</div>
            <div className="text-white font-semibold mb-2">Pro Coaching</div>
            <div className="text-gray-400 text-sm">Expert coaching and training sessions</div>
          </div>
        </motion.div>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 max-w-md mx-auto"
        >
          <Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Get Early Access</h3>
          <p className="text-gray-300 mb-6">
            Be the first to know when we launch and get exclusive early access.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Join the waitlist</p>
          <div className="flex justify-center space-x-8">
            <div>
              <div className="text-2xl font-bold text-purple-400">2,500+</div>
              <div className="text-gray-400 text-sm">On Waitlist</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">50+</div>
              <div className="text-gray-400 text-sm">Pro Gamers Ready</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">15+</div>
              <div className="text-gray-400 text-sm">Games Supported</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
