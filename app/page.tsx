import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Trash2, Lock } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
              H
            </div>
            Hani M3ek
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm font-medium hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/data-deletion" className="text-sm font-medium hover:text-primary">
              Data Deletion
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button>Admin Login</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ride Sharing Made <span className="text-primary">Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Hani M3ek connects drivers and riders for safe, reliable, and affordable trips. 
              Manage your fleet, track trips, and ensure user safety with our comprehensive admin platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/sign-in">
                <Button size="lg" className="gap-2">
                  Go to Dashboard <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/privacy-policy">
                <Button variant="outline" size="lg">
                  View Privacy Policy
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features/Info */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
                <p className="text-muted-foreground">
                  We prioritize your data privacy and security. Read our privacy policy to understand how we handle your information.
                </p>
                <Link href="/privacy-policy" className="text-primary text-sm font-medium mt-4 inline-block hover:underline">
                  Read Policy &rarr;
                </Link>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Trash2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Control</h3>
                <p className="text-muted-foreground">
                  You have full control over your data. Request account deletion or data removal at any time.
                </p>
                <Link href="/data-deletion" className="text-primary text-sm font-medium mt-4 inline-block hover:underline">
                  Data Deletion &rarr;
                </Link>
              </div>

              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Admin Access</h3>
                <p className="text-muted-foreground">
                  Restricted access for administrators to manage users, trips, and platform settings.
                </p>
                <Link href="/sign-in" className="text-primary text-sm font-medium mt-4 inline-block hover:underline">
                  Login &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Hani M3ek. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/data-deletion" className="text-sm text-muted-foreground hover:text-foreground">
              Data Deletion
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
