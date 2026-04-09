'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Shield, Award } from 'lucide-react'

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
    <footer className="bg-warm-900 text-white relative overflow-hidden">
      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/bcs-logo.png"
                alt="Blacksburg Chimney Services"
                width={180}
                height={64}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-warm-400 text-sm mb-5 leading-relaxed">
              Chimney Sweeping, Repairs & Installations
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-sm text-warm-300">
                <Award className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="font-semibold">3 CSIA Certified Professionals</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-warm-300">
                <Shield className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="font-semibold">BBB Accredited Business</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-warm-400 hover:text-primary-400 transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-warm-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5402390440"
                  className="flex items-center gap-3 text-warm-300 hover:text-primary-400 transition-colors text-sm font-semibold group"
                >
                  <div className="w-10 h-10 bg-warm-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <Phone className="h-4 w-4 text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  (540) 239-0440
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@blacksburgchimneyservices.net"
                  className="flex items-center gap-3 text-warm-300 hover:text-primary-400 transition-colors text-sm group"
                >
                  <div className="w-10 h-10 bg-warm-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <Mail className="h-4 w-4 text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="break-all">info@blacksburgchimneyservices.net</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-warm-400 text-sm">
                <div className="w-10 h-10 bg-warm-800 rounded-lg flex items-center justify-center flex-shrink-0">
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

        <div className="border-t border-warm-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-500 text-sm">
            &copy; {new Date().getFullYear()} Blacksburg Chimney Services. All rights reserved.
          </p>
          <p className="text-warm-500 text-sm font-semibold tracking-wide uppercase">
            Quality Work Guaranteed
          </p>
        </div>
      </div>
    </footer>
  )
}
