import React from 'react';

export default function TermsAndConditions() {
    return (
        <main className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold mb-6 text-gray-900">Terms & Conditions</h1>
                    <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                            <p>By accessing or using the services provided by M360 ICT LTD., you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access our services or software.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. License to Use</h2>
                            <p>Subject to your compliance with these Terms, M360 ICT LTD. grants you a limited, non-exclusive, non-transferable, and revocable license to use our software products for your internal business purposes.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
                            <p>You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Intellectual Property</h2>
                            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of M360 ICT LTD. and its licensors. Our trademarks may not be used in connection with any product or service without our prior written consent.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
                            <p>In no event shall M360 ICT LTD., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
