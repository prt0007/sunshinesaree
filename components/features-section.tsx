import { CheckCircle, Zap, Shield, BarChart } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides all the tools you need to succeed in today's competitive market.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Zap className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Lightning Fast</h3>
            <p className="text-center text-sm text-muted-foreground">
              Optimized for speed and performance to keep your business moving.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Shield className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Secure</h3>
            <p className="text-center text-sm text-muted-foreground">
              Enterprise-grade security to protect your valuable data.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <CheckCircle className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Reliable</h3>
            <p className="text-center text-sm text-muted-foreground">
              99.9% uptime guarantee so you're always up and running.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <BarChart className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Analytics</h3>
            <p className="text-center text-sm text-muted-foreground">
              Detailed insights to help you make data-driven decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

