import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, FileCheck, Shield, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import image from "@/assets/image.png";
import cto from "@/assets/cto.png";
import {  FileText, Coins, CheckCircle, TrendingUp, } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
export default function Hero() {
  const features = [
   

    {
      icon: FileCheck,
      title: " On-Chain Security",
      description: "Protect every business agreement with blockchain-level transparency and tamper-proof verification.",
    },
    {
      icon: Shield,
      title: "Verified Trust",
      description: "Every signature is recorded on-chain, building an immutable record of trust between partners and clients.",
    },
    {
      icon: Clock,
      title: "Faster Payments",
      description: "Turn signed contracts into instantly fundable assets and access payment as soon as deals are approved.",
    },
    {
      icon: Users,
      title: "Simple & Seamless",
      description: "Upload, sign, and fund — all in one place. Basesig integrates easily with your existing business workflow.",
    },
  ];






  const BasesigUseCases = [
    {
      icon: FileText,
      title: "Suppliers and Vendors",
      description:
        "Small, medium, and large businesses that provide goods or services and face payment delays.Needaccess to working capital before clients pay approved invoices or purchase orders.",
    },
    {
      icon: Shield,
      title: "Buyers / Enterprises",
      description:
        "Companies that issue contracts or purchase orders and want secure, verifiable, and transparent documentation.",
    },
    {
      icon: Coins,
      title: "Financial Institutions / Fintech Lenders",
      description:
        "Banks, lenders, or fintech platforms seeking verified, fundable invoices or contracts to provide financing.",
    }
  ]

  interface TeamMember {
  name: string;
  role: string;
  image: any;
  linkedin?: string;
  twitter?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Uzor Ifeanyi",
    role: "Founder & CTO",
    image: cto,
    linkedin: "https://linkedin.com/in/uzor-ifeanyi-a500a7105",
    twitter: "https://x.com/lexikoder",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    image: "https://i.pravatar.cc/150?img=11",
    linkedin: "#",
    twitter: "#",
  }
];

  return (
    <>
    
       <header className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg"></div>
            <h1 className="text-xl font-semibold text-white">Basesig</h1>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-6">
            <button
              // onClick={() => scrollToSection("use-cases")}
              className="text-white hover:text-pink-500 transition-colors text-sm font-medium"
            >
              Use Cases
            </button>
            <Link
           to =  "https://app.basesig.xyz/login"
              
              className="text-white hover:text-pink-500 transition-colors text-sm"
            >
              Login
            </Link>
            <Link
            to = "https://app.basesig.xyz/"
              className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium shadow-md transition-all hover:opacity-90 hover:shadow-lg hover:scale-[1.02]"
              // size="sm"
              target="_blank" // opens in new tab
  rel="noopener noreferrer"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f] text-white">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#ff7ae5]/10" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" />

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          {/* Header Tag */}
          <br />
          <br />
          <br />
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gray-700 mb-8">
            <Sparkles className="h-4 w-4 text-pink-500" />
            
            <span className="text-sm font-medium text-gray-300">
              Trusted by businesses globally
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
              Protect your Business 
            </span>{" "}
            contract agreements onchain
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Upload your contract to Basesig, get it signed on chain, and access payment early.
Basesig turns signed agreements into instantly fundable assets.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
            to = "https://app.basesig.xyz/"
              className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium shadow-md transition-all hover:opacity-90 hover:shadow-lg hover:scale-[1.02]"
              // size="sm"
              target="_blank" // opens in new tab
  rel="noopener noreferrer"
            >
              Get Started
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-black "
            >
              Book Demo
            </Button>

             
          </div>
          <br />
          <br />
          <div className="flex flex-col items-center gap-6">
          <img
    src={image}
    alt="Blockradar Dashboard"
    className="rounded-lg shadow-lg max-w-full md:max-w-4xl"
  />
  </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-[#141414] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why businesses choose{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                Basesig
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powering fast, secure, and legally compliant digital contract agreement for every industry on chain.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#1a1a1a] border border-gray-700 hover:shadow-lg hover:border-pink-500/40 transition-all duration-300"
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="pt-32 pb-20 text-center bg-gradient-to-b from-[#0f0f0f] to-[#141414]">
              <div className="container mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-400">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Basesig{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                Use cases
              </span>
            </h2>
                  {/* <span className="bg-gradient-to-r from-pink-500 to-orange-400   bg-clip-text">
                    Basesig
                  </span >{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-400   bg-clip-text">
                    Use cases
                  </span >{" "} */}
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  How Basesig’s digital signature infrastructure powers secure, transparent,
                  and compliant blockchain-based receivables financing with Basesig.
                </p>
              </div>
            </section>
      
            {/* USE CASE DETAILS */}
            <section className="py-24 bg-[#141414]">
              <div className="container mx-auto px-4">
               
      
                {/* USE CASE CARDS */}
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {BasesigUseCases.map((useCase, index) => (
                    <Card
                      key={index}
                      className="bg-[#1a1a1a] border border-gray-700 hover:border-pink-500/40 hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="pt-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <useCase.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {useCase.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
              </div>
            </section>
      
            {/* CTA SECTION */}
            <section className="py-24 bg-[#0f0f0f] text-center">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-400">
               Want to build your next with {" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                with Basesig?
              </span>
            </h2>
                
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                  Get started Powering fast, secure, and legally compliant digital contract agreement for every industry on chain.
                </p>
                <Link
            to = "https://app.basesig.xyz/"
              className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium shadow-md transition-all hover:opacity-90 hover:shadow-lg hover:scale-[1.02]"
              // size="sm"
              target="_blank" // opens in new tab
  rel="noopener noreferrer"
            >
              Get Started
            </Link>
              </div>
            </section>

             <section className="py-24 bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* gradient background accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
              Basesig Team
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate innovators building contract agreements infrastructure onchain.
          </p>
        </div>

        {/* Team grid */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1a]/80 border border-gray-700 rounded-2xl shadow-md hover:shadow-lg hover:border-pink-500/40 transition-all duration-300 text-center"
            >
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full border-2 border-pink-500/50 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-400 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-gray-800 bg-[#0f0f0f] text-gray-400">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Basesig. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-pink-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>

      
    </>
  );
}
