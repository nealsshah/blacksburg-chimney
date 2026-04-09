'use client'

import { motion } from 'framer-motion'
import { Award, Phone, MapPin, Shield } from 'lucide-react'
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
      {/* Hero */}
      <section className="relative bg-warm-900 text-white pt-32 pb-16 grain overflow-hidden">
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading text-5xl md:text-6xl lg:text-7xl text-white mb-4">
              Meet the Team
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CSIA Banner */}
      <section className="bg-primary-600 text-white py-5">
        <div className="container-custom px-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <Award className="h-6 w-6 flex-shrink-0" />
            <p className="font-bold tracking-wide text-sm uppercase">
              3 CSIA Certified Chimney Sweep Professionals &mdash; BBB Accredited Business
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-warm-50 section-padding">
        <div className="container-custom">
          <FadeInStagger className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <FadeInStaggerItem key={member.name}>
                <HoverCard>
                  <div className="bg-white rounded-xl p-8 text-center h-full border border-warm-200 hover:border-primary-300 transition-colors">
                    <div className="w-20 h-20 bg-primary-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="heading text-xl text-warm-900">{member.name}</h3>
                    <p className="text-primary-600 font-semibold">{member.title}</p>
                    {member.certification && (
                      <div className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-800 px-3 py-1 rounded-md mt-2 text-sm font-bold">
                        <Shield className="h-3.5 w-3.5" />
                        {member.certification}
                      </div>
                    )}
                    <div className="mt-4 pt-4 border-t border-warm-100">
                      <span className="text-sm text-warm-600 font-semibold">{member.experience} experience</span>
                    </div>
                  </div>
                </HoverCard>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="heading text-4xl md:text-5xl text-warm-900 mb-8">
                Where We Serve
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="flex items-center gap-3 bg-warm-50 px-4 py-3 rounded-lg border border-warm-200"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                    <span className="text-warm-800 font-medium">{area}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-warm-900 rounded-xl p-10 text-white grain relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="heading text-3xl mb-4">Quality Work Guaranteed</h3>
                  <p className="text-warm-300 mb-8 text-lg">
                    Contact us anytime for more information.
                  </p>
                  <a
                    href="tel:5402390440"
                    className="flex items-center gap-3 text-white hover:text-primary-300 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-xl">(540) 239-0440</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
