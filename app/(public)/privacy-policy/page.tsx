import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Hani M3ek",
  description: "Privacy Policy for Hani M3ek application",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto prose dark:prose-invert">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: December 25, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Hani M3ek ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our mobile application (the "App").
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our App. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use the App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="mb-4">
          We may collect information about you in a variety of ways. The information we may collect via the App depends on the content and materials you use, and includes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Data:</strong> Demographic and other personally identifiable information (such as your name and email address) that you voluntarily give to us when choosing to participate in various activities related to the App, such as chat, posting messages in comment sections or in our forums, liking posts, sending feedback, and responding to surveys.
          </li>
          <li>
            <strong>Derivative Data:</strong> Information our servers automatically collect when you access the App, such as your native actions that are integral to the App, including liking, re-blogging, or replying to a post, as well as other interactions with the App and other users via server log files.
          </li>
          <li>
            <strong>Geo-Location Information:</strong> We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using the App, to provide location-based services. If you wish to change our access or permissions, you may do so in your device's settings.
          </li>
          <li>
            <strong>Mobile Device Access:</strong> We may request access or permission to certain features from your mobile device, including your mobile device's bluetooth, calendar, camera, contacts, microphone, reminders, sensors, SMS messages, social media accounts, storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Use of Your Information</h2>
        <p className="mb-4">
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Create and manage your account.</li>
          <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
          <li>Email you regarding your account or order.</li>
          <li>Enable user-to-user communications.</li>
          <li>Fulfill and manage purchases, orders, payments, and other transactions related to the App.</li>
          <li>Generate a personal profile about you to make future visits to the App more personalized.</li>
          <li>Increase the efficiency and operation of the App.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the App.</li>
          <li>Notify you of updates to the App.</li>
          <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
          <li>Perform other business activities as needed.</li>
          <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          <li>Process payments and refunds.</li>
          <li>Request feedback and contact you about your use of the App.</li>
          <li>Resolve disputes and troubleshoot problems.</li>
          <li>Respond to product and customer service requests.</li>
          <li>Send you a newsletter.</li>
          <li>Solicit support for the App.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Disclosure of Your Information</h2>
        <p className="mb-4">
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Data Deletion</h2>
        <p>
          You have the right to request the deletion of your personal data. You can delete your account directly within the App settings, or you can submit a deletion request via our <a href="/data-deletion" className="text-primary hover:underline">Data Deletion Request</a> page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Policy for Children</h2>
        <p>
          We do not knowingly solicit information from or market to children under the age of 13. If you become aware that any data has been collected from children under age 13, please contact us using the contact information provided below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="mb-4">
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p className="font-semibold">Hani M3ek Support</p>
        <p>Email: support@hanim3ek.com</p>
      </section>
    </div>
  );
}
