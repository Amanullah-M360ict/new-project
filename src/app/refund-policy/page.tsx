import React from 'react';

export default function RefundPolicy() {
    return (
        <main className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold mb-6 text-gray-900">Refund Policy</h1>
                    <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. General Refund Terms</h2>
                            <p>At M360 ICT LTD., we strive to ensure our customers are completely satisfied with our software solutions. Because our products are digital services and software licenses, refunds are subject to specific conditions outlined below.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Eligibility for Refunds</h2>
                            <p>Refund requests are generally accepted under the following circumstances:</p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>The software product fails to function substantially as described in our documentation.</li>
                                <li>A duplicate charge was incorrectly applied to your payment method.</li>
                                <li>You request a cancellation within the initial cooling-off period (usually 7 days) if expressly provided in your Service Level Agreement (SLA).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Non-Refundable Items</h2>
                            <p>The following are generally non-refundable:</p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Custom software development services after work has commenced.</li>
                                <li>Setup, integration, and onboarding fees.</li>
                                <li>Subscription renewals that were not canceled prior to the billing date.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Requesting a Refund</h2>
                            <p>To request a refund, please contact our support team at info@m360ict.com with your order details and a detailed explanation of why you are requesting a refund. We will review your request and notify you of the approval or rejection within 5-7 business days.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Processing</h2>
                            <p>If your refund is approved, it will be processed, and a credit will automatically be applied to your original method of payment. Please note that it may take some time for your bank or credit card company to process and post the refund.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
