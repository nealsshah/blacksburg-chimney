'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Shield, CheckCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { FadeIn } from '@/components/animations'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(540) 239-0440',
    href: 'tel:5402390440',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@blacksburgchimneyservices.net',
    href: 'mailto:info@blacksburgchimneyservices.net',
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

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative animated-gradient text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom section-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-6">
              <span className="text-sm text-slate-300 font-medium">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get In{' '}
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Quality Work Guaranteed. Contact us anytime for more information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <motion.a
                        key={item.title}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl hover:bg-slate-100 transition-colors group"
                      >
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{item.title}</p>
                          <p className="text-slate-900 font-semibold group-hover:text-primary-600 transition-colors">
                            {item.content}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Service Areas */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary-500" />
                    Areas We Serve
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <motion.div
                        key={area}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-primary-500" />
                        <span className="text-sm text-slate-600">{area}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-primary-50 px-4 py-2.5 rounded-full"
                  >
                    <Shield className="h-5 w-5 text-primary-600" />
                    <span className="text-sm font-medium text-primary-700">CSIA Certified</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-slate-100 px-4 py-2.5 rounded-full"
                  >
                    <Shield className="h-5 w-5 text-slate-600" />
                    <span className="text-sm font-medium text-slate-700">BBB Accredited</span>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
