import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, Github, Linkedin, ExternalLink, MapPin, Calendar, Award, Code, Database, Cloud, Shield, Cpu, Briefcase, GraduationCap, Trophy, User, ChevronDown, Menu, X, Mountain } from 'lucide-react'
import MountainBackground from './components/MountainBackground.jsx'
import './App.css'

// Import logos
import kpmgLogo from './assets/logos/cdXVYjoBYYHL.png'
import ippinkaLogo from './assets/logos/8EPR0bNM967k.png'
import uoftLogo from './assets/logos/rjCU13KOspje.png'
import nodejsLogo from './assets/logos/YHXII6W1OQpJ.png'
import flaskLogo from './assets/logos/DM79xXWGK1Ct.png'
import djangoLogo from './assets/logos/1Wry6BwVU5wW.png'
import tensorflowLogo from './assets/logos/8OQaFIqgHcoY.png'
import pytorchLogo from './assets/logos/7u4uSjJ4UOyd.png'
import scikitlearnLogo from './assets/logos/onejaPZaVetD.png'
import pandasLogo from './assets/logos/enuOpZR0gTy8.png'
import numpyLogo from './assets/logos/2odXktjHTUWm.png'
import seleniumLogo from './assets/logos/Gv9mLtP7iBAM.png'
import junitLogo from './assets/logos/mTDGqxkYmCH1.png'
import latexLogo from './assets/logos/WLr4So8ZZ6IW.png'
import pyomoLogo from './assets/logos/pNHhbo8Isuht.png'
import scipLogo from './assets/logos/czkjcnVpzPLT.png'
import cplexLogo from './assets/logos/2vqNU1kcMIeZ.png'
import nginxLogo from './assets/logos/CG1pi6r7oRPP.png'
import digitaloceanLogo from './assets/logos/Q97radICVDRa.png'
import mongodbLogo from './assets/logos/fIKZ4omW9bOQ.png'
import condaLogo from './assets/logos/6GoPMkiF1SNW.jpg'
import ubuntuLogo from './assets/logos/nqVdK6zDMzrY.png'
import wordpressLogo from './assets/logos/qvbjCQdMbZH8.png'
import gitLogo from './assets/logos/XOzf4mbB0CqV.png'
import bitbucketLogo from './assets/logos/YgqD931G4vvF.png'
import githubLogo from './assets/logos/Zv0kWrXWPR1b.png'
import githubActionsLogo from './assets/logos/EqkK2AiXCkDE.png'
import cicdLogo from './assets/logos/fbgCNaR7IIJi.jpg'
import jsonLogo from './assets/logos/Kl8TAIzw0o7i.png'
import restLogo from './assets/logos/SotzNeBv6PPb.jpg'
import shellscriptingLogo from './assets/logos/hWSOW1nACwYQ.png'
import awsLogo from './assets/logos/WJdq4aUOGzlr.png'
import azureLogo from './assets/logos/uHjEIOFMNorq.png'
import openaiapiLogo from './assets/logos/bIEVVKBRjBXm.png'
import googleappsscriptLogo from './assets/logos/cmwanl0Hf7nK.png'
import amazonrainforestapiLogo from './assets/logos/D7wD76mCxVwd.png'
import captchaLogo from './assets/logos/NPMPzgsSba04.png'
import sqlmapLogo from './assets/logos/b6DokbfJxDHs.png'
import ghidraLogo from './assets/logos/Dgv3Hg7fqk8V.png'
import burpsuiteLogo from './assets/logos/HuEGbeWZt6O1.jpg'
import wiresharkLogo from './assets/logos/pMmjH2FsMNJz.png'
import wpscanLogo from './assets/logos/xKF9iBlkiaw9.png'
import cohereaiLogo from './assets/logos/PRHtAjIX5B8s.jpg'
import flutterLogo from './assets/logos/daTxIixyunzd.png'
import gcpLogo from './assets/logos/uND0Q6djzyCA.png'
import uipathLogo from './assets/logos/rWAKrITSTmmu.png'
import damaLogo from './assets/logos/MuShVDOWIQ2s.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'research', 'awards', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    languages: [
      { name: 'Java', logo: null }, { name: 'Python', logo: null }, { name: 'C/C++', logo: null }, 
      { name: 'JavaScript', logo: null }, { name: 'TypeScript', logo: null }, { name: 'Bash', logo: shellscriptingLogo }, 
      { name: 'SQL', logo: null }, { name: 'PHP', logo: null }, { name: 'Assembly (x86)' }
    ],
    frameworks: [
      { name: 'Node.js', logo: nodejsLogo }, { name: 'Flask', logo: flaskLogo }, { name: 'Django', logo: djangoLogo }, 
      { name: 'TensorFlow', logo: tensorflowLogo }, { name: 'PyTorch', logo: pytorchLogo }, { name: 'scikit-learn', logo: scikitlearnLogo }, 
      { name: 'pandas', logo: pandasLogo }, { name: 'NumPy', logo: numpyLogo }, { name: 'Selenium', logo: seleniumLogo }, 
      { name: 'JUnit', logo: junitLogo }, { name: 'LaTeX', logo: latexLogo }, { name: 'Pyomo', logo: pyomoLogo }, 
      { name: 'SCIP', logo: scipLogo }, { name: 'CPLEX', logo: cplexLogo }
    ],
    infrastructure: [
      { name: 'NGINX', logo: nginxLogo }, { name: 'DigitalOcean', logo: digitaloceanLogo }, { name: 'MongoDB', logo: mongodbLogo }, 
      { name: 'Conda', logo: condaLogo }, { name: 'Ubuntu', logo: ubuntuLogo }, { name: 'WordPress', logo: wordpressLogo }
    ],
    devops: [
      { name: 'Git', logo: gitLogo }, { name: 'Bitbucket', logo: bitbucketLogo }, { name: 'GitHub', logo: githubLogo }, 
      { name: 'GitHub Actions', logo: githubActionsLogo }, { name: 'CI/CD', logo: cicdLogo }, { name: 'JSON', logo: jsonLogo }, 
      { name: 'REST', logo: restLogo }, { name: 'Shell scripting', logo: shellscriptingLogo }
    ],
    cloud: [
      { name: 'AWS', logo: awsLogo }, { name: 'Azure', logo: azureLogo }, { name: 'OpenAI API', logo: openaiapiLogo }, 
      { name: 'Google Apps Script', logo: googleappsscriptLogo }, { name: 'Amazon Rainforest API', logo: amazonrainforestapiLogo }
    ],
    security: [
      { name: 'CAPTCHA', logo: captchaLogo }, { name: 'SQLmap', logo: sqlmapLogo }, { name: 'Ghidra', logo: ghidraLogo }, 
      { name: 'Burp Suite', logo: burpsuiteLogo }, { name: 'Wireshark', logo: wiresharkLogo }, { name: 'WPScan', logo: wpscanLogo }, 
      { name: 'Cryptographic tools', logo: null }
    ]
  }

  const experiences = [
    {
      title: 'E-commerce Software Developer',
      company: 'IPPINKA',
      logo: ippinkaLogo,
      location: 'Toronto, ON',
      period: 'June 2024 – Present',
      description: 'Lead developer at a curated e-commerce brand with 5,000+ Amazon listings, bridging independent designers and global buyers.',
      highlights: [
        'Designed and maintained backend infrastructure using Node.js, TypeScript, and Google Apps Script',
        'Built metadata-aware caching system for Google Sheets, reducing API load and improving latency',
        'Developed automated pipelines for FBA prep, Flodesk email marketing integration, and cross-sheet data synchronization',
        'Launched demand forecasting pipeline using 10+ years of sales data with seasonality and behavioral heuristics',
        'Led full-stack automation of PO system with nonlinear MINLP solver logic using Pyomo, SCIP, and CPLEX',
        'Spearheaded hiring for 3 developers and led onboarding with personalized documentation'
      ]
    },
    {
      title: 'AI Intern — Data Management and Governance',
      company: 'KPMG LLP',
      logo: kpmgLogo,
      location: 'Toronto, ON',
      period: 'May 2023 – Oct 2023',
      description: 'Developed interactive AI prototypes and data governance solutions for enterprise clients.',
      highlights: [
        'Developed interactive AI prototypes using ChatGPT to streamline internal data governance workflows',
        'Designed end-to-end prototypes with mock UIs, automation algorithms, and data pipelines',
        'Applied Naive Bayes, dynamic programming, and greedy heuristics to optimize internal tooling',
        'Assisted in platform evaluations for enterprise data catalogs (Informatica, Microsoft Purview, Collibra)',
        'Outlined long-term cloud architecture strategies leveraging AWS and Azure',
        'Authored KPMG\'s internal Data Governance and Management Playbook'
      ]
    }
  ]

  const projects = [
    {
      title: 'Nettoyer',
      subtitle: 'UofT Hacks Runner-up',
      tech: [{ name: 'Cohere AI', logo: cohereaiLogo }, { name: 'Python', logo: null }, { name: 'Flutter', logo: flutterLogo }],
      description: 'Built a decentralization-focused content filtering platform with real-time toxicity detection using Cohere AI.',
      highlights: [
        'Automated YouTube engagement actions to support user mental wellness',
        'Delivered production-ready frontend in under 4 hours during hackathon sprint'
      ]
    },
    {
      title: 'Automated Purchase Order System',
      subtitle: 'Enterprise E-commerce Solution',
      tech: [
        { name: 'Node.js', logo: nodejsLogo }, { name: 'TypeScript', logo: null }, { name: 'Python', logo: null }, 
        { name: 'Pyomo', logo: pyomoLogo }, { name: 'GCP', logo: gcpLogo }, { name: 'SCIP', logo: scipLogo }, 
        { name: 'CPLEX', logo: cplexLogo }
      ],
      description: 'Built a hybrid system to automate supplier purchase orders across 5,000+ SKUs.',
      highlights: [
        'Modeled nonlinear MINLP constraints using Pyomo and solved with SCIP and CPLEX',
        'Implemented solver orchestration via Google Apps Script and Conda subprocess environments',
        'Developed spreadsheet-driven UI for live PO edits and PDF invoice generation'
      ]
    },
    {
      title: 'Essay Research Bot',
      subtitle: 'Deer Hacks Winner',
      tech: [{ name: 'Python', logo: null }, { name: 'Flask', logo: flaskLogo }, { name: 'UiPath', logo: uipathLogo }],
      description: 'Built an automated essay research tool using Google APIs and web scraping.',
      highlights: [
        'Integrated UiPath to handle repetitive research workflows',
        'Generated automated citations and research summaries'
      ]
    }
  ]

  const awards = [
    { title: 'Certified Data Management Professional (CDMP)', org: 'DAMA', logo: damaLogo, year: '2023', description: 'Top 10% of 4,562+ professionals globally' },
    { title: 'Dean\'s List Scholar', org: 'University of Toronto', logo: uoftLogo, year: '2021-Present', description: 'GPA consistently above 3.5; top 10% of the faculty cohort' },
    { title: 'Deer Hacks Winner', org: 'University of Toronto', logo: uoftLogo, year: '2022', description: 'Best overall project for AI-powered academic research assistant' },
    { title: 'UofT Hacks Runner-up', org: 'University of Toronto', logo: uoftLogo, year: '2024', description: 'Second place for Nettoyer content filtering platform' }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      {/* Interactive Mountain Background */}
      <MountainBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent flex items-center space-x-2">
              <Mountain size={24} className="text-blue-400" />
              <span>Karanvir Khanna</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'research', 'awards', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'experience', 'projects', 'research', 'awards', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block px-3 py-2 text-base font-medium capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-lg md:text-xl text-blue-400 mb-2 animate-fade-in-up flex items-center justify-center space-x-2">
              <Mountain size={20} />
              <span>Introducing</span>
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up animation-delay-200">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                KARANVIR
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                KHANNA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2 animate-fade-in-up animation-delay-400">
              Computer Science Specialist & Software Developer
            </p>
            <p className="text-lg md:text-xl text-blue-400 mb-8 animate-fade-in-up animation-delay-600">
              AI & E-commerce Solutions Expert
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown 
              size={32} 
              className="mx-auto text-gray-400 cursor-pointer hover:text-white transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Mountain size={32} className="text-blue-400" />
              <span>About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Hey, I'm Karanvir Khanna</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm an undergraduate student at the University of Toronto, specializing in Computer Science with a minor in Mathematics. 
                Currently participating in the Co-op (PEY) program, I bring a strong problem-solving background complemented by 
                proficiency in multiple programming languages and cutting-edge technologies.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My experience spans from AI and machine learning to e-commerce automation and data governance. I've worked with 
                industry leaders like KPMG and IPPINKA, developing innovative solutions that bridge technology and business needs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="text-blue-400" size={20} />
                  <span className="text-sm">University of Toronto</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-sm">Toronto, ON</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-blue-400" size={20} />
                  <span className="text-sm">Sep 2021 – Apr 2026</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="text-blue-400" size={20} />
                  <span className="text-sm">CS Specialist</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-slate-800/90 border-slate-700 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-blue-400">Current Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Leading e-commerce automation projects at IPPINKA, developing sophisticated 
                    purchase order systems with MINLP optimization and machine learning-driven demand forecasting.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/90 border-slate-700 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-blue-400">Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Artificial Intelligence</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Data Science</Badge>
                    <Badge variant="secondary">Optimization</Badge>
                    <Badge variant="secondary">E-commerce</Badge>
                    <Badge variant="secondary">Cloud Computing</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Mountain size={32} className="text-blue-400" />
              <span>Technical Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(skills).map((category) => (
              <Card key={category} className="bg-slate-800/90 border-slate-700 hover:bg-slate-800 transition-all backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-400">
                    {category === 'languages' && <Code size={24} />}
                    {category === 'frameworks' && <Cpu size={24} />}
                    {category === 'infrastructure' && <Database size={24} />}
                    {category === 'devops' && <Briefcase size={24} />}
                    {category === 'cloud' && <Cloud size={24} />}
                    {category === 'security' && <Shield size={24} />}
                    <span>{category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills[category].map((skill) => (
                      <Badge key={skill.name} variant="outline" className="border-blue-400 text-blue-400 flex items-center space-x-1 hover:bg-blue-400 hover:text-white transition-colors">
                        {skill.logo && <img src={skill.logo} alt={skill.name} className="h-4 w-4" />}
                        <span>{skill.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-900/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Mountain size={32} className="text-blue-400" />
              <span>Work Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-800/90 border-slate-700 hover:border-blue-400 transition-all backdrop-blur-sm shadow-xl hover:shadow-2xl">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-400 mb-2 flex items-center space-x-2">
                        {exp.logo && <img src={exp.logo} alt={exp.company} className="h-6 w-6" />}
                        <span>{exp.title}</span>
                      </CardTitle>
                      <CardDescription className="text-lg text-white font-semibold">{exp.company}</CardDescription>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-gray-400">{exp.location}</div>
                      <div className="text-gray-400">{exp.period}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Mountain size={32} className="text-blue-400" />
              <span>Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/90 border-slate-700 hover:border-blue-400 transition-all hover:transform hover:scale-105 backdrop-blur-sm shadow-xl hover:shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-blue-400">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech.name} variant="secondary" className="text-xs flex items-center space-x-1 hover:bg-blue-400 hover:text-white transition-colors">
                        {tech.logo && <img src={tech.logo} alt={tech.name} className="h-3 w-3" />}
                        <span>{tech.name}</span>
                      </Badge>
                    ))}
                  </div>
                  
                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-slate-900/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Mountain size={32} className="text-blue-400" />
              <span>Research</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <Card className="bg-slate-800/90 border-slate-700 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-blue-400">Matroid Theory Research</CardTitle>
              <CardDescription className="text-white">University of Toronto | May 2023 – Sep 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Studied volume estimation of matroid polytopes and their polar duals using combinatorial and geometric techniques.
              </p>
              <ul className="space-y-2">
                <li className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Adapted Hepp bounds and T-invariants to derive structural volume identities
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Validated conjectures in Sage using rank-jump analysis
                </li>
                <li className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Authored original research under Prof. Ahmed Ashraf on polytope duality and symbolic methods
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Mountain size={32} className="text-blue-400" />
              <span>Certifications & Awards</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="bg-slate-800/90 border-slate-700 hover:border-blue-400 transition-all backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-400">
                    <Trophy size={20} />
                    <span>{award.title}</span>
                  </CardTitle>
                  <CardDescription className="text-white flex items-center space-x-2">
                    {award.logo && <img src={award.logo} alt={award.org} className="h-4 w-4" />}
                    <span>{award.org} | {award.year}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Mountain size={32} className="text-blue-400" />
              <span>Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
            <p className="text-gray-300 mt-6">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/90 border-slate-700 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-blue-400">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={20} />
                  <a href="mailto:prokaranvir@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    prokaranvir@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400" size={20} />
                  <a href="tel:+14163473761" className="text-gray-300 hover:text-white transition-colors">
                    +1 (416) 347-3761
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="text-blue-400" size={20} />
                  <a href="https://github.com/Karanvir1729" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    github.com/Karanvir1729
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="text-blue-400" size={20} />
                  <a href="https://linkedin.com/in/karan-khanna-b7013b24b" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    LinkedIn Profile
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/90 border-slate-700 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-blue-400">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Whether you're looking for a talented developer, want to collaborate on a project, 
                  or just want to connect, I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open('mailto:prokaranvir@gmail.com', '_blank')}
                  >
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open('https://linkedin.com/in/karan-khanna-b7013b24b', '_blank')}
                  >
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50 bg-slate-950/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <Mountain size={16} className="text-blue-400" />
            <span>© 2024 Karanvir Khanna. Built with React and Tailwind CSS.</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

