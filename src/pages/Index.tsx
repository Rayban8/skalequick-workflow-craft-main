
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowRight, Bot, Cog, Zap, Target, CheckCircle, TrendingUp, Users, Clock, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Skalequick</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-coral transition-colors">Services</a>
              <a href="#process" className="text-muted-foreground hover:text-coral transition-colors">Process</a>
              <a href="#examples" className="text-muted-foreground hover:text-coral transition-colors">Examples</a>
              <a href="#faq" className="text-muted-foreground hover:text-coral transition-colors">FAQ</a>
            </div>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button className="bg-coral hover:bg-coral/90 text-white border-0">
                Book Free Audit
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 zen-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-coral/10 text-coral border-coral/20 hover:bg-coral/20">
              Workflow Automation Agency
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Workflow Automation for a{" "}
              <span className="gradient-text">Smarter Business</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Turn Chaos into Precision. Automate Your Way to Effortless Growth.
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              We eliminate manual work by engineering intelligent workflows that scale with your business. 
              Our transparent process focuses on delivering sustainable automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white border-0 px-8 py-4 text-lg coral-glow">
                Book a Free Automation Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white px-8 py-4 text-lg">
                View Case Studies
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-coral" />
                <span className="text-sm text-muted-foreground"><strong>7 Days:</strong> Live Prototype</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-coral" />
                <span className="text-sm text-muted-foreground"><strong>Expert:</strong> Support Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Skalequick, we transform business operations by creating intelligent automation systems 
              that work seamlessly behind the scenes. Our solutions streamline workflows, eliminate 
              repetitive tasks, and unlock your team's potential for strategic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-border hover:border-coral/30 transition-all duration-300 hover:shadow-lg group bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                  <Cog className="h-6 w-6 text-coral" />
                </div>
                <CardTitle className="text-xl text-foreground">Process Optimization</CardTitle>
                <CardDescription className="text-muted-foreground">
                  We identify time-consuming tasks like manual data entry, inventory tracking, or customer 
                  communications, then engineer automations to handle them seamlessly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border hover:border-coral/30 transition-all duration-300 hover:shadow-lg group bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                  <Zap className="h-6 w-6 text-coral" />
                </div>
                <CardTitle className="text-xl text-foreground">Integration Services</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Sync your existing tools and platforms to orchestrate data flows without manual 
                  intervention across your entire tech stack.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border hover:border-coral/30 transition-all duration-300 hover:shadow-lg group bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                  <Target className="h-6 w-6 text-coral" />
                </div>
                <CardTitle className="text-xl text-foreground">Custom Workflow Design</CardTitle>
                <CardDescription className="text-muted-foreground">
                  No one-size-fits-all solutions. We build automations tailored to your business—whether 
                  automating order confirmations, lease renewals, or HR approvals.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20 zen-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Examples of What We Automate</h2>
            <p className="text-lg text-muted-foreground">
              Real automation solutions we've built for businesses like yours
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Automated Lead Follow-Ups",
                problem: "Sales teams miss follow-ups",
                solution: "Trigger personalized emails/SMS based on CRM activity (N8N + Pipedrive)",
                impact: "95% follow-up rate",
                icon: TrendingUp
              },
              {
                title: "Social Media Automation",
                problem: "Business owners waste hours manually planning and publishing content",
                solution: "Auto-generate post ideas based on niche + trending topics, design carousels/images using AI",
                impact: "10 hours saved weekly",
                icon: Bot
              },
              {
                title: "Market & Trend Research",
                problem: "Real estate agents spend hours researching local markets",
                solution: "Auto-scrape housing data, demographics, and market trends, then summarize insights",
                impact: "Daily market insights",
                icon: Target
              },
              {
                title: "Smart Inventory Management",
                problem: "Manual stock tracking causes delays",
                solution: "Auto-reorder at threshold + sync with POS systems (N8N + Shopify)",
                impact: "Zero stockouts",
                icon: Cog
              },
              {
                title: "AI-Powered Customer Support",
                problem: "Overloaded support teams",
                solution: "AI assistants handle FAQs; escalate complex queries (N8N + Zendesk)",
                impact: "60% faster resolution",
                icon: Users
              },
              {
                title: "Streamlined Employee Onboarding",
                problem: "Manual paperwork slows hiring",
                solution: "Auto-send contracts, collect e-signatures, and schedule training (N8N + DocuSign)",
                impact: "3-day onboarding",
                icon: CheckCircle
              }
            ].map((example, index) => (
              <Card key={index} className="border-2 border-border hover:border-coral/30 transition-all duration-300 hover:shadow-lg group bg-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                    <example.icon className="h-6 w-6 text-coral" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-red-600">Problem:</span>
                      <p className="text-sm text-muted-foreground mt-1">{example.problem}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-coral">Solution:</span>
                      <p className="text-sm text-muted-foreground mt-1">{example.solution}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-green-600">Impact:</span>
                      <p className="text-sm text-muted-foreground mt-1 font-medium">{example.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-4xl mx-auto border-2 border-coral/20 bg-coral/5">
              <CardContent className="pt-6">
                <p className="text-foreground font-medium">
                  <strong>Additional Note:</strong> Our scope of services extends far beyond these examples — 
                  we adapt to your unique business needs and create custom solutions that grow with your organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="process" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground">Our proven 3-step process delivers results quickly and efficiently</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="relative">
                <Card className="border-2 border-border hover:border-coral/30 transition-all duration-300 hover:shadow-lg group bg-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-coral rounded-xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      1
                    </div>
                    <CardTitle className="text-xl text-foreground">Audit & Blueprint</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Analyze workflows to pinpoint automation opportunities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-coral/5 p-4 rounded-lg border border-coral/20">
                      <p className="text-sm font-medium text-coral">Deliverable:</p>
                      <p className="text-sm text-foreground">Custom Automation Roadmap</p>
                    </div>
                  </CardContent>
                </Card>
                {/* Arrow */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-coral" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <Card className="border-2 border-border hover:border-coral/30 transition-all duration-300 hover:shadow-lg group bg-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-coral rounded-xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      2
                    </div>
                    <CardTitle className="text-xl text-foreground">Build & Integrate</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Develop no-code workflows that sync with your tech stack.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-coral/5 p-4 rounded-lg border border-coral/20">
                      <p className="text-sm font-medium text-coral">Deliverable:</p>
                      <p className="text-sm text-foreground">Live Prototype in 7 Days</p>
                    </div>
                  </CardContent>
                </Card>
                {/* Arrow */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-coral" />
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <Card className="border-2 border-border hover:border-coral/30 transition-all duration-300 hover:shadow-lg group bg-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-coral rounded-xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      3
                    </div>
                    <CardTitle className="text-xl text-foreground">Optimize & Scale</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Refine processes to adapt as your business evolves.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-coral/5 p-4 rounded-lg border border-coral/20">
                      <p className="text-sm font-medium text-coral">Deliverable:</p>
                      <p className="text-sm text-foreground">Monthly Performance Reports</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 zen-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about our automation solutions</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Will automation replace my team or reduce their role?",
                  answer: "Absolutely not. We automate repetitive tasks (manual entry, status updates, report creation, data transfer, system notifications, form processing) to free your team for high-value work like strategy and client relationships. Your team becomes more impactful, not redundant."
                },
                {
                  question: "Do I need technical expertise to use your solutions?",
                  answer: "Zero technical skills required. We handle setup, integration, and training. You only need to use the final system—we'll ensure your team knows how."
                },
                {
                  question: "How long does it take to implement automation?",
                  answer: "Most workflows go live in 2-4 weeks. We only ask for a single point of contact to streamline communication and approvals."
                },
                {
                  question: "What if I don't know which processes to automate first?",
                  answer: "We'll identify your top 3 high-impact opportunities during a free audit. We prioritize quick wins that deliver immediate results while aligning with your long-term goals."
                },
                {
                  question: "Can I adjust workflows after they're live?",
                  answer: "Yes. All systems are designed to evolve. Add new rules, tweak triggers, or scale processes anytime—we'll provide guidance if needed."
                },
                {
                  question: "How do you protect my data?",
                  answer: "All workflows use encrypted connections and comply with GDPR/CCPA standards. We never store sensitive data unless explicitly requested and approved."
                },
                {
                  question: "What if the automation doesn't meet expectations?",
                  answer: "We offer a 30-day satisfaction guarantee. If you're unsatisfied, we'll refund your setup fee—no questions asked."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-foreground hover:text-coral">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Workflows?</h2>
            <p className="text-xl text-muted mb-8">
              We'll identify your top 3 automation opportunities in 30 minutes—no strings attached.
            </p>
            <Button size="lg" className="bg-coral hover:bg-coral/90 text-white border-0 px-8 py-4 text-lg coral-glow">
              Book a Free Automation Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Shield className="h-8 w-8 text-coral mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Risk-Free Approach</h3>
                <p className="text-muted text-sm">Transparent process with clear milestones and progress tracking.</p>
              </div>
              <div>
                <Users className="h-8 w-8 text-coral mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Direct Communication</h3>
                <p className="text-muted text-sm">Weekly progress updates via Slack + direct engineer access.</p>
              </div>
              <div>
                <Cog className="h-8 w-8 text-coral mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                <p className="text-muted text-sm">Need adjustments? We'll offer workflow refinements as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">Skalequick</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                We help businesses eliminate manual work by automating repetitive workflows with 
                intelligent N8N integrations and AI-powered solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Process Optimization</li>
                <li>Integration Services</li>
                <li>Custom Workflows</li>
                <li>AI Automation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-border mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Skalequick Automation Agency. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="https://twitter.com/skalequick_ai" className="text-muted-foreground hover:text-coral transition-colors">
                @skalequick_ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
