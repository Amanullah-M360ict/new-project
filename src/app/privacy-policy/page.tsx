import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
                    <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
                            <p>M360 ICT LTD. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by M360 ICT LTD. and its affiliates.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
                            <p>We collect information that you provide directly to us when you use our software products, register for an account, or communicate with us. This may include your name, email address, phone number, and company details.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
                            <p>We use the information we collect primarily to provide, maintain, and improve our services. This includes responding to your requests, sending you technical notices, and providing customer support.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
                            <p>We implement appropriate technical and organizational measures to protect the personal information that we collect and process about you. The measures we use are designed to provide a level of security appropriate to the risk of processing your personal information.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Email: info@m360ict.com</li>
                                <li>Phone: +8809638336699</li>
                                <li>Address: House# 74 Road# 7, Block# H, Banani, Dhaka-1213</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
