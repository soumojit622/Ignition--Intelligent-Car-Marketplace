import { getFeaturedCars } from "@/actions/home";
import { CarCard } from "@/components/car-card";
import Header from "@/components/headerr/header";
import { HomeSearch } from "@/components/home-search";
import AiFinancingCalculator from "@/components/landing/ai-financing-calculator";
import AiTechnology from "@/components/landing/ai-technology";
import AppPreview from "@/components/landing/app-preview";
import BackgroundSpots from "@/components/landing/background-spots";
import CallToAction from "@/components/landing/call-to-action";
import CustomerSupport from "@/components/landing/customer-support";
import DashboardPreview from "@/components/landing/dashboard-preview";
import Faq from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero-section";
import HowItWorks from "@/components/landing/how-it-works";
import Newsletter from "@/components/landing/newsletter";
import Partners from "@/components/landing/partners";
import PricingPlans from "@/components/landing/pricing-plans";
import SmartNotifications from "@/components/landing/smart-notifications";
import Statistics from "@/components/landing/statistics";
import Testimonials from "@/components/landing/testimonials";
import VehicleComparison from "@/components/landing/vehicle-comparison";
import VehicleHistoryTimeline from "@/components/landing/vehicle-history-timeline";
import VirtualTestDrive from "@/components/landing/virtual-test-drive";
import { Button } from "@/components/ui/button";
import { bodyTypes, carMakes } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const featuredCars = await getFeaturedCars();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0e0e10] text-white">
      <BackgroundSpots />
      <section className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </section>

      <main>
        {/* Hero Section with Gradient Title */}
        <section className="">
          <HeroSection />
          <HomeSearch />
        </section>

        {/* Featured Cars */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Featured Cars</h2>
              <Button variant="ghost" className="flex items-center" asChild>
                <Link href="/cars">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Make */}
        <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Browse by Make
              </h2>
              <Button
                variant="ghost"
                className="flex items-center text-sm"
                asChild
              >
                <Link href="/cars" className="text-blue-600 dark:text-blue-400">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Grid of Makes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {carMakes.map((make) => (
                <Link
                  key={make.name}
                  href={`/cars?make=${make.name}`}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-lg p-5 text-center transition-all group"
                >
                  {/* Logo */}
                  <div className="relative h-16 w-full mb-3">
                    <Image
                      src={
                        make.imageUrl || `/make/${make.name.toLowerCase()}.png`
                      }
                      alt={make.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {make.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <Statistics />
          <Features />
        </section>

        {/* Browse by Body Type */}
        <section className="py-14 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 transition-colors duration-300">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Browse by Body Type
              </h2>
              <Button
                variant="ghost"
                className="flex items-center text-sm text-blue-400 hover:text-blue-500 transition-colors"
                asChild
              >
                <Link href="/cars">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Body Type Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {bodyTypes.map((type) => (
                <Link
                  key={type.name}
                  href={`/cars?bodyType=${type.name}`}
                  className="group relative overflow-hidden rounded-2xl shadow-lg border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-800 hover:from-blue-950 hover:to-blue-900 transition-all duration-300"
                >
                  {/* Background Image */}
                  <div className="relative h-36 md:h-44 w-full">
                    <Image
                      src={
                        type.imageUrl || `/body/${type.name.toLowerCase()}.png`
                      }
                      alt={type.name}
                      fill
                      className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Blue Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-800/20 to-transparent" />
                    {/* Label */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10 px-2">
                      <h3 className="text-white text-lg md:text-xl font-semibold text-center drop-shadow-md group-hover:text-blue-300 transition">
                        {type.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <AiTechnology />
          <Partners />
          <HowItWorks />
          <VehicleComparison />
          <DashboardPreview />
          <VirtualTestDrive />
          {/* new */}
          <AiFinancingCalculator />
          {/* new */}
          <VehicleHistoryTimeline />
          <SmartNotifications />
          <AppPreview />
          <PricingPlans />
          <Testimonials />
          <CustomerSupport />
          <Faq />
          <Newsletter />
          <CallToAction />
        </section>

        <Footer />
      </main>
    </div>
  );
}
