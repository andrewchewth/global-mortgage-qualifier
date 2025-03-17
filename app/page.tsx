import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AIAssistant } from "./components/AIAssistant"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2 font-bold">
              <span>Global Mortgage Qualifier</span>
            </Link>
          </div>
          <nav className="ml-auto flex items-center gap-4">
            <Link href="/resources" className="text-sm font-medium">
              Resources
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background with multiple gradients and patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.1),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(var(--secondary-rgb),0.1),transparent_40%)]" />
          <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-10" />
          
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Mortgage Pre-Qualification for Foreign Nationals & US Expats
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl max-w-[600px]">
                  Find the right mortgage program for your unique situation. Our pre-qualification tool helps you
                  understand your options before speaking with a loan officer.
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link href="/assessment/start">
                    <Button size="lg" className="w-full min-[400px]:w-auto bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all duration-200">
                      Start Pre-Qualification <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto border-2 hover:bg-secondary/10">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-background via-muted to-background shadow-xl border border-muted/50 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50" />
                  <div className="absolute inset-0 bg-grid-small-white/[0.2]" />
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                    alt="Modern luxury home representing global mortgage opportunities"
                    className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                    width={1000}
                    height={667}
                    priority
                    unoptimized={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-muted/30 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Why Choose Us
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl">
                We specialize exclusively in helping foreign nationals and US expats secure mortgages for US properties
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-primary">Specialized Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Unlike most banks that focus on local citizens, we exclusively serve foreign nationals and US expats
                    buying US property.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-secondary">Foreign Income</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We can qualify you based on foreign income sources or offer non-income based qualification options
                    that traditional lenders can't.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-accent">Remote Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We handle international logistics with remote notary services for Hague Convention countries and
                    guidance on using US embassies for Apostille Seals.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-primary">Expert Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most local loan brokers are unfamiliar with your unique challenges. Our specialists understand the
                    complexities of international mortgage financing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl">
                Our pre-qualification tool guides you through a simple process to determine your eligibility.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Answer Questions</h3>
                <p className="text-center text-muted-foreground">
                  Provide information about your citizenship, income sources, and property plans.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Get Matched</h3>
                <p className="text-center text-muted-foreground">
                  Our system matches you with appropriate mortgage programs based on your profile.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Book a Call</h3>
                <p className="text-center text-muted-foreground">
                  Schedule a consultation with a loan officer who specializes in your situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Ask Our AI Assistant
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl">
                Get instant answers to your mortgage questions based on your unique situation
              </p>
            </div>
            <div className="mx-auto py-12">
              <AIAssistant />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Global Mortgage Qualifier. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

