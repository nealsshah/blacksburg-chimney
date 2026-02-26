'use client'

import { motion } from 'framer-motion'
import { Award, Phone, MapPin } from 'lucide-react'
import { FadeIn, FadeInStagger, FadeInStaggerItem, HoverCard } from '@/components/animations'

const team = [
  {
    name: 'Alan Duchovnay',
    title: 'Master Sweep',
    experience: '48 years',
  },
  {
    name: 'Zachery Ratcliff',
    title: 'CSIA Certified',
    certification: 'CSIA #10698',
    experience: '8 years',
  },
  {
    name: 'Josh Dowdy',
    title: 'CSIA Certified',
    certification: 'CSIA #12314',
    experience: '8 years',
  },
]

const serviceAreas = [
  'Blacksburg',
  'Christiansburg',
  'Radford',
  'Pulaski County',
  'Giles County',
  'Montgomery County',
  'Floyd County',
  'Roanoke County',
  'Shawsville',
  'Wytheville',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative animated-gradient text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom section-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-6">
              <span className="text-sm text-slate-300 font-medium">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Meet the{' '}
              <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              CSIA certified chimney sweeping, repairs, and installations serving the New River Valley.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <FadeInStagger className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <FadeInStaggerItem key={member.name}>
                <HoverCard>
                  <div className="bg-slate-50 rounded-3xl p-8 text-center h-full border border-slate-100 hover:border-primary-200 transition-colors">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-primary-500/25">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <p className="text-primary-600 font-medium">{member.title}</p>
                    {member.certification && (
                      <p className="text-sm text-slate-500 mt-1">{member.certification}</p>
                    )}
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mt-4 shadow-sm">
                      <Award className="h-4 w-4 text-primary-500" />
                      <span className="text-sm text-slate-600 font-medium">{member.experience}</span>
                    </div>
                  </div>
                </HoverCard>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
                <MapPin className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-primary-600 font-medium">Service Areas</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Where We{' '}
                <span className="gradient-text">Serve</span>
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-slate-700 font-medium">{area}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl blur-2xl opacity-20" />
                <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-10 text-white">
                  <h3 className="text-3xl font-bold mb-4">Quality Work Guaranteed</h3>
                  <p className="text-primary-100 mb-8 text-lg">
                    Contact us anytime for more information.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:5402390440"
                      className="flex items-center gap-3 text-white hover:text-primary-100 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-lg">(540) 239-0440</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
