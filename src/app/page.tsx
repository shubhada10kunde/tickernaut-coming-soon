"use client";

import React, { useState } from "react";
import {
  Search,
  TrendingUp,
  BarChart3,
  Brain,
  Database,
  ArrowRight,
  CheckCircle,
  FileText,
  Zap,
  Shield,
  Clock,
  Leaf,
  ExternalLink,
  Bell,
  Network,
  Check,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

type Mode = "ask-doc-ai" | "ask-fin-ai" | "stock-detail" | "esg";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMode, setSearchMode] = useState<Mode>("ask-doc-ai");
  const [email, setEmail] = useState("");
  const [notifySubmitted, setNotifySubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Using FormSubmit.co - simplest way to collect emails
      // Replace 'your@email.com' with your actual email address
      const response = await fetch("https://formsubmit.co/shubhadakunde8@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          _subject: "New Tickernaut Waitlist Signup!",
          _template: "table",
          timestamp: new Date().toLocaleString(),
          source: "Landing Page - Coming Soon",
        }),
      });

      if (response.ok) {
        setNotifySubmitted(true);
        setTimeout(() => {
          setNotifySubmitted(false);
          setEmail("");
        }, 3000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Failed to submit:", error);
      alert("Failed to join waitlist. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Black Navbar */}
      <nav className="bg-[#141218] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and brand */}
            <div className="flex items-center space-x-3 -ml-20">
              {/* Logo image */}
              <div className="relative w-[136px] h-[136px]"> 
                <Image
                  src="/logo_tk.png"
                  alt="Tickernaut Logo"
                  fill
                  className="object-contain"
                />
              </div>
             
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Platform
              </a>
              <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Capabilities
              </a>
              <a href="#for-whom" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                For Whom
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Join Waitlist
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-3">
                <a
                  href="#platform"
                  className="text-gray-300 hover:text-white transition-colors py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Platform
                </a>
                <a
                  href="#capabilities"
                  className="text-gray-300 hover:text-white transition-colors py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Capabilities
                </a>
                <a
                  href="#for-whom"
                  className="text-gray-300 hover:text-white transition-colors py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  For Whom
                </a>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-purple-700 text-sm font-medium">
                Launching Soon - Join the Waitlist
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Research Companies & Markets Using AI
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Not Dashboards
              </span>
            </h1>

            <p className="text-l text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tickernaut unifies financial data, market analytics, and ESG
              intelligence into a natural-language AI research experience. Ask
              questions about public companies, private firms, and
              sustainability—get source-linked answers instantly.
            </p>

            {/* Search Box - Exact Design from SearchBox Component */}
            <div className="max-w-4xl mx-auto mb-8">
              {/* Mode Toggle */}
              <div className="mb-4 flex justify-center">
                <div className="flex flex-wrap gap-1 rounded-lg bg-gray-100 p-1">
                  <button
                    onClick={() => setSearchMode("ask-doc-ai")}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${
                      searchMode === "ask-doc-ai"
                        ? "bg-black text-white shadow-sm"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Brain className="h-4 w-4" />
                      <span>Ask Doc AI</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSearchMode("ask-fin-ai")}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${
                      searchMode === "ask-fin-ai"
                        ? "bg-black text-white shadow-sm"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Brain className="h-4 w-4" />
                      <span>Ask Fin AI</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSearchMode("stock-detail")}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${
                      searchMode === "stock-detail"
                        ? "bg-black text-white shadow-sm"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>Stock Detail</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSearchMode("esg")}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${
                      searchMode === "esg"
                        ? "bg-black text-white shadow-sm"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-4 w-4" />
                      <span>ESG</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Input */}
              <div className="group relative">
                <div className="rounded-2xl border-2 border-gray-200 bg-white p-2 shadow-lg transition-colors group-hover:border-gray-300">
                  <div className="relative items-center min-w-0 flex">
                    {/* Left icon */}
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      {searchMode === "ask-doc-ai" ||
                      searchMode === "ask-fin-ai" ? (
                        <Brain className="h-6 w-6" />
                      ) : (
                        <Search className="h-6 w-6" />
                      )}
                    </div>

                    {/* Textarea */}
                    <textarea
                      placeholder={
                        searchMode === "ask-doc-ai"
                          ? 'Ask Doc AI… (e.g., "Extract board members from INFY annual report")'
                          : searchMode === "ask-fin-ai"
                            ? 'Ask Fin AI… (e.g., "INFY EPS growth and ROE last 5 years")'
                            : searchMode === "esg"
                              ? 'Search ESG data… (e.g., "INFY")'
                              : 'Search for stocks… (e.g., "INFY")'
                      }
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      rows={1}
                      className="flex-1 min-w-0 resize-none bg-transparent pl-12 pr-24 py-4 text-lg placeholder-gray-500 focus:outline-none"
                      style={{
                        lineHeight: "1.4",
                        overflow: "hidden",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                      }}
                    />

                    {/* Right icons - positioned bottom-right */}
                    <div className="absolute right-2 bottom-2 flex gap-2 items-center">
                      {/* Send button - DISABLED with tooltip */}
                      <div className="relative group/tooltip">
                        <button
                          type="button"
                          disabled
                          aria-label="Send"
                          className="p-3 rounded-md bg-gray-300 text-gray-500 cursor-not-allowed"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </button>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          Coming soon - join waitlist below!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggestion Chips */}
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {(searchMode === "ask-doc-ai"
                  ? [
                      "Key factors that contributed to the Persistent revenue growth",
                      "What are ADANIGREEN initiatives in FY2024 to reduce carbon footprint",
                    ]
                  : searchMode === "ask-fin-ai"
                    ? [
                        "Which company has more POSH cases",
                        "Give me 2 stocks with improving pat but declining revenue quarterly",
                        "Which companies generate lot of battery waste",
                      ]
                    : searchMode === "esg"
                      ? ["ITC", "AARTIDRUGS", "ADANIGREEN"]
                      : ["INFY", "RELIANCE", "TCS"]
                ).map((s) => (
                  <button
                    key={s}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 transition-all duration-200 hover:bg-gray-200 hover:text-black"
                    onClick={() => setSearchQuery(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Email Waitlist Form */}
            <div className="max-w-md mx-auto mb-6">
              <form
                onSubmit={handleNotifySubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  required
                  className="flex-1 px-4 py-3 border-2 border-purple-500 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium whitespace-nowrap"
                >
                  <Bell className="w-4 h-4 inline mr-2" />
                  Notify Me
                </button>
              </form>
              {notifySubmitted && (
                <p className="text-green-600 text-sm mt-2 flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Thanks! We'll notify you when we launch.
                </p>
              )}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Launching Q2 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Early access available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Built for India</span>
              </div>
            </div>

            {/* Example Queries Preview */}
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 text-left">
                <p className="text-gray-900 text-sm italic">
                  "Compare revenue growth of TCS vs Infosys"
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Get side-by-side financial comparison with trends
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 text-left">
                <p className="text-gray-900 text-sm italic">
                  "Summarize latest earnings call"
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Key takeaways and management insights in seconds
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 text-left">
                <p className="text-gray-900 text-sm italic">
                  "Which companies generate battery waste?"
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  ESG-focused research with sustainability metrics
                </p>
              </div>
            </div>

            {/* Metrics band */}
            <div className="mt-6">
              <div className="rounded-2xl p-6 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <FileText className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                      1 B+
                    </div>
                    <div className="text-sm md:text-base text-gray-600">
                      Tokens processed from 20K+ filings
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <BarChart3 className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                      10 M+
                    </div>
                    <div className="text-sm md:text-base text-gray-600">
                      Multi-dimensional metrics (daily refresh)
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <TrendingUp className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                      20 M+
                    </div>
                    <div className="text-sm md:text-base text-gray-600">
                      Live OHLC and technical datapoints
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Leaf className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                      500 K+
                    </div>
                    <div className="text-sm md:text-base text-gray-600">
                      ESG datapoints across 1,100+ companies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Tickernaut Section */}
      <section id="platform" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What is Tickernaut?
            </h2>
            <p className="text-xl text-gray-600">
              An AI-powered research and insights platform that allows you to
              ask questions about public companies, private companies, ESG &
              sustainability data—all through natural language, without
              navigating complex dashboards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Public Markets Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Public Markets Intelligence
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Track thousands of NSE/BSE companies. Access financials,
                filings, prices, and market trends with explainable AI insights.
              </p>
            </div>

            {/* Private Companies Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                <Network className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Private Company Intelligence
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Research private companies: revenue, growth, burn rate, runway.
                Understand the full landscape of India's startup ecosystem.
              </p>
            </div>

            {/* ESG Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                ESG & Sustainability Data
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Integrated ESG signals and sustainability metrics. Make informed
                decisions aligned with your values and impact goals.
              </p>
            </div>

            {/* Natural Language AI Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Natural Language AI
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Ask questions in plain English. Receive source-linked answers,
                financial insights, market analysis, and ESG signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            Platform Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Everything you need for comprehensive financial analysis and
            decision-making
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AI Research Layer */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                AI Research Layer
              </h3>
              <p className="text-gray-600 mb-4">
                Document AI + Financial AI processing for deep, contextual
                research across all data sources.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Multi-source data synthesis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Source attribution & traceability
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Explainable AI reasoning
                  </span>
                </li>
              </ul>
            </div>

            {/* Financial & Market Analytics */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Financial & Market Analytics
              </h3>
              <p className="text-gray-600 mb-4">
                Real-time market data, financial metrics, technical analysis,
                and trend identification.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Real-time price & volume data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Financial statement analysis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Technical & fundamental insights
                  </span>
                </li>
              </ul>
            </div>

            {/* ESG Intelligence */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                ESG & Sustainability Intelligence
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive ESG metrics, sustainability reports, and impact
                assessments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">ESG scoring & ratings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sustainability tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Impact & governance insights
                  </span>
                </li>
              </ul>
            </div>

            {/* Developer APIs */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Developer APIs & Enterprise
              </h3>
              <p className="text-gray-600 mb-4">
                Integrate Tickernaut into your platforms and workflows with
                powerful APIs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">REST & GraphQL APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">White-label solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Enterprise SLAs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Built for India Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Built for India's Capital Markets
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tickernaut is designed specifically for India's investment
              landscape. We track thousands of NSE and BSE companies, understand
              Indian regulatory frameworks, and serve serious retail investors,
              professional analysts, and institutional platforms.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">
                  <strong className="text-black">
                    Comprehensive Coverage:
                  </strong>{" "}
                  Thousands of NSE/BSE listed companies
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">
                  <strong className="text-black">Credible Data:</strong>{" "}
                  Explainable AI ensures transparency and trust
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">
                  <strong className="text-black">Institutional Grade:</strong>{" "}
                  Built for serious investors and professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it For Section */}
      <section id="for-whom" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            Who is it For?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Built for investors, analysts, and enterprises across India's
            financial ecosystem
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-3">
                Retail & Pro Investors
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Make faster, smarter investment decisions with AI-powered
                research and real-time market insights.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-500 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-3">
                PMS / RIAs / Funds
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Streamline portfolio management and due diligence with
                integrated financial and ESG intelligence.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-500 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-3">
                Analysts & Researchers
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Deep-dive research with source attribution and explainable AI
                insights for credible analysis.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-yellow-500 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-3">
                Fintech & Enterprise Platforms
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Integrate Tickernaut APIs into your platform for enhanced
                financial intelligence capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            Why Tickernaut is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
            A new approach to financial intelligence that puts AI-powered
            research first
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Natural Language vs Complex Filters */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 p-6 rounded-xl">
                <p className="text-sm font-bold text-blue-600 mb-2">
                  ✓ TICKERNAUT
                </p>
                <p className="text-xl font-bold text-black mb-2">
                  Natural Language Queries
                </p>
                <p className="text-gray-600 text-base">
                  Ask questions in plain English. No complex filters or
                  dashboards to navigate.
                </p>
              </div>
              <div className="bg-gray-100 border-2 border-gray-200 p-6 rounded-xl opacity-60">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  ✗ TRADITIONAL TOOLS
                </p>
                <p className="text-xl font-bold text-gray-700 mb-2">
                  Complex Filter Dashboards
                </p>
                <p className="text-gray-600 text-base">
                  Navigate multiple screens and filters. Steep learning curve.
                </p>
              </div>
            </div>

            {/* Unified Data vs Fragmented */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 p-6 rounded-xl">
                <p className="text-sm font-bold text-blue-600 mb-2">
                  ✓ TICKERNAUT
                </p>
                <p className="text-xl font-bold text-black mb-2">
                  Unified Data Platform
                </p>
                <p className="text-gray-600 text-base">
                  All financial, market, and ESG data in one place with AI
                  synthesis.
                </p>
              </div>
              <div className="bg-gray-100 border-2 border-gray-200 p-6 rounded-xl opacity-60">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  ✗ TRADITIONAL TOOLS
                </p>
                <p className="text-xl font-bold text-gray-700 mb-2">
                  Fragmented Data Sources
                </p>
                <p className="text-gray-600 text-base">
                  Piece together data from multiple platforms. Time-consuming
                  and error-prone.
                </p>
              </div>
            </div>

            {/* Explainable AI vs Black Box */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 p-6 rounded-xl">
                <p className="text-sm font-bold text-blue-600 mb-2">
                  ✓ TICKERNAUT
                </p>
                <p className="text-xl font-bold text-black mb-2">
                  Explainable AI
                </p>
                <p className="text-gray-600 text-base">
                  Understand how AI reached its conclusions with source
                  attribution.
                </p>
              </div>
              <div className="bg-gray-100 border-2 border-gray-200 p-6 rounded-xl opacity-60">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  ✗ TRADITIONAL TOOLS
                </p>
                <p className="text-xl font-bold text-gray-700 mb-2">
                  Black Box Algorithms
                </p>
                <p className="text-gray-600 text-base">
                  No transparency. Trust required without understanding.
                </p>
              </div>
            </div>

            {/* ESG Integrated vs Missing */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 p-6 rounded-xl">
                <p className="text-sm font-bold text-blue-600 mb-2">
                  ✓ TICKERNAUT
                </p>
                <p className="text-xl font-bold text-black mb-2">
                  ESG Integrated
                </p>
                <p className="text-gray-600 text-base">
                  Sustainability and impact metrics built into every analysis.
                </p>
              </div>
              <div className="bg-gray-100 border-2 border-gray-200 p-6 rounded-xl opacity-60">
                <p className="text-sm font-bold text-gray-500 mb-2">
                  ✗ TRADITIONAL TOOLS
                </p>
                <p className="text-xl font-bold text-gray-700 mb-2">
                  ESG Missing or Siloed
                </p>
                <p className="text-gray-600 text-base">
                  ESG data treated separately or not available at all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be the First to Experience AI-Powered Financial Intelligence
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join investors and analysts waiting to research companies, analyze
            markets, and make data-driven decisions with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <Bell className="w-5 h-5" />
              <span>Join Waitlist</span>
            </button>
            <button
              type="button"
              disabled
              className="border-2 border-white/30 text-white/50 px-8 py-4 rounded-lg font-medium cursor-not-allowed"
            >
              Documentation (Coming Soon)
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-lg font-bold text-black whitespace-nowrap">
                  Tickernaut
                </span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                AI-powered financial intelligence for India's capital markets.
                Research companies and markets using natural language, not
                dashboards.
              </p>
              <div className="text-sm text-gray-500">
                © 2026 Tickernaut. All rights reserved.
              </div>
            </div>

            <div>
              <h3 className="text-black font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="text-gray-400 cursor-not-allowed">
                    AI Research (Soon)
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 cursor-not-allowed">
                    Market Analytics (Soon)
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 cursor-not-allowed">
                    ESG Intelligence (Soon)
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 cursor-not-allowed">
                    APIs (Soon)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;