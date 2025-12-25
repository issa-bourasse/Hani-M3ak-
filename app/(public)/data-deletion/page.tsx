import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Deletion Request - Hani M3ek",
  description: "Request deletion of your account and associated data",
};

export default function DataDeletionPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Data Deletion Request</h1>
      
      <div className="bg-card border rounded-lg p-6 shadow-sm mb-8">
        <p className="mb-4 text-muted-foreground">
          At Hani M3ek, we respect your privacy and your right to control your personal data. 
          If you wish to delete your account and all associated data, you can do so using one of the methods below.
        </p>
        
        <div className="space-y-6 mt-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Method 1: In-App Deletion (Recommended)</h2>
            <p className="text-sm text-muted-foreground mb-3">
              The fastest way to delete your account is directly through the mobile application.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open the <strong>Hani M3ek</strong> app on your device.</li>
              <li>Go to your <strong>Profile</strong> tab.</li>
              <li>Tap on <strong>Settings</strong> (gear icon).</li>
              <li>Scroll down and tap on <strong>Delete Account</strong>.</li>
              <li>Confirm your choice. Your data will be permanently deleted.</li>
            </ol>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-2">Method 2: Request via Email</h2>
            <p className="text-sm text-muted-foreground mb-3">
              If you cannot access the app, you may request account deletion by contacting our support team.
            </p>
            <div className="bg-muted/50 p-4 rounded-md">
              <p className="text-sm font-medium mb-2">Please send an email to:</p>
              <a href="mailto:support@hanim3ek.com" className="text-primary hover:underline font-semibold">
                support@hanim3ek.com
              </a>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Subject:</strong> Account Deletion Request<br />
                <strong>Body:</strong> Please include your registered email address or phone number so we can verify your identity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        <h3 className="font-semibold mb-2">What happens when I delete my account?</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your profile information will be removed.</li>
          <li>Your trip history and chat logs will be deleted.</li>
          <li>Any active bookings will be cancelled.</li>
          <li>This action is irreversible.</li>
        </ul>
      </div>
      
      <div className="mt-8">
        <Link href="/privacy-policy">
            <Button variant="outline">View Privacy Policy</Button>
        </Link>
      </div>
    </div>
  );
}
