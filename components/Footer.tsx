'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Flame, Shield, ArrowUpRight } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  'Chimney Sweeping',
  'Chimney Relining',
  'Chimney Repairs',
  'Copper Flashing',
  'Caps',
  'Woodstove Installation',
  'Woodstove Repairs',
  'Video Inspection',
  'Dryer Vent Cleaning & Repairs',
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-2.5 rounded-xl">
                  <Flame className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <div className="font-bold text-lg">Blacksburg</div>
                <div className="text-xs text-slate-400 tracking-wide">CHIMNEY SERVICES</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Chimney Sweeping, Repairs & Installations
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Shield className="h-4 w-4 text-primary-500" />
              CSIA Certified Professionals
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-slate-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5402390440"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary-400 transition-colors text-sm group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Phone className="h-4 w-4 text-primary-500" />
                  </div>
                  (540) 239-0440
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@blacksburgchimneyservices.net"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary-400 transition-colors text-sm group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary-500" />
                  </div>
                  <span className="break-all">info@blacksburgchimneyservices.net</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary-500" />
                </div>
                <span className="pt-2">
                  Serving Blacksburg, Christiansburg,
                  Radford & surrounding areas
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Blacksburg Chimney Services. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Quality Work Guaranteed
          </p>
        </div>
      </div>
    </footer>
  )
}
