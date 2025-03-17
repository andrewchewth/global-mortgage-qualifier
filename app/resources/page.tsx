import Link from "next/link"
import { ArrowLeft, BookOpen, FileText, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  return (
    <div className="container flex min-h-screen flex-col py-8">
      <div className="mb-8">
        <Link href="/" className="flex items-center text-sm font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Mortgage Resources</h1>
          <p className="mt-2 text-muted-foreground">Learn about mortgage options for foreign nationals and US expats</p>
        </div>

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="faq">
              <HelpCircle className="mr-2 h-4 w-4" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="programs">
              <FileText className="mr-2 h-4 w-4" />
              Loan Programs
            </TabsTrigger>
            <TabsTrigger value="glossary">
              <BookOpen className="mr-2 h-4 w-4" />
              Glossary
            </TabsTrigger>
            <TabsTrigger value="expertise">
              <FileText className="mr-2 h-4 w-4" />
              Our Expertise
            </TabsTrigger>
          </TabsList>
          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions about mortgages for foreign nationals and US expats</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Can foreign nationals get mortgages in the US?</AccordionTrigger>
                    <AccordionContent>
                      Yes, foreign nationals can obtain mortgages in the US, though the requirements are typically more
                      stringent. Foreign nationals usually need larger down payments (25-30%), may face higher interest
                      rates, and need to demonstrate sufficient assets and income. Specialized lenders offer programs
                      specifically designed for foreign nationals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What is a DSCR loan?</AccordionTrigger>
                    <AccordionContent>
                      A Debt Service Coverage Ratio (DSCR) loan is a type of mortgage that qualifies borrowers based on
                      the property's income potential rather than the borrower's personal income. This makes it ideal
                      for investment properties. The lender calculates the ratio of the property's rental income to its
                      debt obligations to determine eligibility.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How much down payment do I need as a foreign national?</AccordionTrigger>
                    <AccordionContent>
                      Foreign nationals typically need to provide a down payment of 25-30% for investment properties and
                      25% for secondary homes. This is higher than the requirements for US citizens or permanent
                      residents, who may qualify with 20% down payment. Some programs may require even higher down
                      payments depending on the property type and location.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What documents do I need as a foreign national?</AccordionTrigger>
                    <AccordionContent>
                      Foreign nationals typically need to provide: a valid passport, proof of income from foreign
                      sources, bank statements showing sufficient assets, reference letters from banks, proof of funds
                      for down payment, and sometimes a credit reference letter from their home country. Additional
                      documentation may be required depending on the lender and loan program.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Can I use foreign income to qualify for a US mortgage?</AccordionTrigger>
                    <AccordionContent>
                      Yes, foreign income can be used to qualify for a US mortgage, but the process is more complex.
                      Lenders will typically want to see documentation translated to English, verification of the income
                      source, and may apply a discount factor to account for currency exchange risk. Some loan programs
                      are specifically designed to accommodate foreign income sources.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/assessment/start">Start Pre-Qualification</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="programs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Loan Programs</CardTitle>
                <CardDescription>Available mortgage programs for foreign nationals and US expats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-medium">DSCR Investment Property Loans</h3>
                  <p className="mb-4 text-sm">
                    Debt Service Coverage Ratio loans qualify borrowers based on the property's rental income potential
                    rather than personal income.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="font-medium">Down Payment</p>
                        <p className="text-muted-foreground">25-30%</p>
                      </div>
                      <div>
                        <p className="font-medium">Loan Terms</p>
                        <p className="text-muted-foreground">30-year fixed</p>
                      </div>
                      <div>
                        <p className="font-medium">Property Types</p>
                        <p className="text-muted-foreground">1-4 units, condos</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-medium">Secondary Home Loans</h3>
                  <p className="mb-4 text-sm">
                    Mortgages for properties that will be used as vacation or second homes rather than primary
                    residences.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="font-medium">Down Payment</p>
                        <p className="text-muted-foreground">20-25%</p>
                      </div>
                      <div>
                        <p className="font-medium">Loan Terms</p>
                        <p className="text-muted-foreground">15 or 30-year fixed</p>
                      </div>
                      <div>
                        <p className="font-medium">Property Types</p>
                        <p className="text-muted-foreground">Single-family, condos</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-medium">Foreign National Programs</h3>
                  <p className="mb-4 text-sm">
                    Specialized mortgage programs designed specifically for non-US citizens without permanent residency.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="font-medium">Down Payment</p>
                        <p className="text-muted-foreground">25-30%</p>
                      </div>
                      <div>
                        <p className="font-medium">Loan Terms</p>
                        <p className="text-muted-foreground">30-year fixed</p>
                      </div>
                      <div>
                        <p className="font-medium">Documentation</p>
                        <p className="text-muted-foreground">Enhanced requirements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/assessment/start">Start Pre-Qualification</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="glossary" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Mortgage Glossary</CardTitle>
                <CardDescription>
                  Key terms for understanding mortgages as a foreign national or US expat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <h3 className="font-medium">DSCR (Debt Service Coverage Ratio)</h3>
                    <p className="text-sm text-muted-foreground">
                      The ratio of a property's net operating income to its debt service, used to determine if rental
                      income is sufficient to cover mortgage payments.
                    </p>
                  </div>
                  <div className="border-b pb-2">
                    <h3 className="font-medium">Foreign National</h3>
                    <p className="text-sm text-muted-foreground">
                      A person who is not a citizen or permanent resident of the country in which they are seeking a
                      mortgage. Foreign nationals typically face different lending requirements.
                    </p>
                  </div>
                  <div className="border-b pb-2">
                    <h3 className="font-medium">DTI (Debt-to-Income Ratio)</h3>
                    <p className="text-sm text-muted-foreground">
                      The percentage of your monthly gross income that goes toward paying debts. Lenders use this to
                      determine your ability to manage monthly payments.
                    </p>
                  </div>
                  <div className="border-b pb-2">
                    <h3 className="font-medium">Reserves</h3>
                    <p className="text-sm text-muted-foreground">
                      Liquid assets that remain available after making the down payment and paying closing costs.
                      Typically required to cover several months of mortgage payments.
                    </p>
                  </div>
                  <div className="border-b pb-2">
                    <h3 className="font-medium">Secondary Home</h3>
                    <p className="text-sm text-muted-foreground">
                      A property that is not your primary residence but is used by you for part of the year. Not
                      primarily used as a rental property.
                    </p>
                  </div>
                  <div className="border-b pb-2">
                    <h3 className="font-medium">Investment Property</h3>
                    <p className="text-sm text-muted-foreground">
                      Real estate purchased with the intention of earning a return through rental income, future resale,
                      or both.
                    </p>
                  </div>
                  <div className="border-b pb-2">
                    <h3 className="font-medium">LTV (Loan-to-Value Ratio)</h3>
                    <p className="text-sm text-muted-foreground">
                      The ratio of the loan amount to the appraised value of the property. Lower LTV ratios typically
                      result in better loan terms.
                    </p>
                  </div>
                  <div className="border-b pb-2">
                    <h3 className="font-medium">Escrow</h3>
                    <p className="text-sm text-muted-foreground">
                      A third-party account that holds funds for taxes and insurance, which are paid along with your
                      mortgage payment.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/assessment/start">Start Pre-Qualification</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="expertise" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Our Specialized Expertise</CardTitle>
                <CardDescription>Why we're uniquely qualified to help foreign nationals and US expats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-medium">Exclusive Focus on International Clients</h3>
                  <p className="mb-4 text-sm">
                    Unlike most mortgage providers who primarily serve local citizens, we focus exclusively on foreign
                    nationals and US expats seeking to purchase US property. This specialized focus gives us unique
                    insights into the challenges you face.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Most banks and traditional lenders are unfamiliar with the complexities of international income
                    verification, foreign credit histories, and cross-border transactions. Our team has years of
                    experience navigating these exact challenges.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-medium">Flexible Qualification Options</h3>
                  <p className="mb-4 text-sm">
                    We understand that international clients have unique financial situations that don't fit traditional
                    lending models.
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-sm">
                    <li>We can qualify you based on foreign income sources</li>
                    <li>We offer non-income based qualification options like DSCR loans</li>
                    <li>We work with clients who have limited or no US credit history</li>
                    <li>We understand international asset verification requirements</li>
                  </ul>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-medium">International Document Processing</h3>
                  <p className="mb-4 text-sm">
                    We've streamlined the mortgage process for clients who aren't physically present in the US.
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-sm">
                    <li>Remote notary services for countries under the Hague Convention</li>
                    <li>Guidance on using US embassies for obtaining Apostille Seals</li>
                    <li>Digital document submission and verification processes</li>
                    <li>Coordination across multiple time zones</li>
                    <li>Currency exchange considerations and guidance</li>
                  </ul>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-medium">Specialized Loan Officer Team</h3>
                  <p className="mb-4 text-sm">
                    Our loan officers specialize in international mortgage financing and understand the unique
                    challenges faced by foreign nationals and US expats.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    When you work with us, you'll be paired with a loan officer who has extensive experience with
                    clients from your region and understands the specific documentation requirements and financial
                    considerations relevant to your situation.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/assessment/start">Start Pre-Qualification</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

