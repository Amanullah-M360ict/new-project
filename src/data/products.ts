export interface Product {
    id: string;
    productName: string;
    logo: string;
    href: string;
    desc: string;
    image?: string;
    images?: string[];
    title?: string;
    longDesc?: string;
    features?: string[];
}

export const PRODUCTS: Product[] = [
    {
        id: "OTA",
        productName: "Online Travel Agency",
        logo: "/images/products/ota.png",
        href: "https://ota-promotion-web.vercel.app/",
        desc: "Travel OTA",
        image: "/images/products/ota.png",
        images: ["/images/products/ota.png"],
        title: "Comprehensive Booking Solution",
        longDesc: "Our OTA solution provides a seamless booking experience for flights, hotels, and tours. Built with the latest technology, it offers real-time availability and secure payment processing.",
        features: ["B2B & B2C Modules", "Real-time API Integration", "Dynamic Pricing Engine", "Advanced Search Filters"]
    },
    {
        id: "trabill",
        productName: "TRABILL",
        logo: "/images/products/trabill.png",
        href: "https://travell-flow-engine.lovable.app/",
        desc: "Bangladesh’s #1 Travel Management Software",
        image: "/images/products/trabill.png",
        title: "The Ultimate Travel ERP",
        longDesc: "Trabill is a specialized ERP solution designed for travel agencies. It automates invoicing, financial reporting, and client management, making it the most trusted travel tech in the region.",
        features: ["Auto Invoicing", "Airlines API Integration", "Advanced Accounts Management", "Customizable Dashboards"]
    },
    {
        id: "recruit360",
        productName: "Recruitment Software",
        logo: "/images/products/recruitment.png",
        href: "https://recruitment-website-six.vercel.app/",
        desc: "Recruitment & HR software",

    },


    {
        id: "thehotel360",
        productName: "The Hotel 360",
        logo: "/images/products/reservation1.png",
        href: "https://thehotel360.com/",
        desc: "Hotel & Restaurant Management",

    },

    {
        id: "dokani",
        productName: "POS Software",
        logo: "/images/products/dokani.png",
        href: "https://dokani-website.vercel.app/",
        desc: "Sales software for retail shops",

    },

    {
        id: "erpbd",
        productName: "ERP Software",
        logo: "/images/products/erp.png",
        href: "https://erp-informative-website.vercel.app/",
        desc: "Enterprise Resource Planning",

    },

    {
        id: "crm360",
        productName: "CRM360",
        logo: "/images/products/CRM.png",
        href: "https://employee.crm360world.com/",
        desc: "Customer Relationship Management",

    },
    {
        id: "hajj",
        productName: "Hajj Management Software",
        logo: "/images/products/hajj.webp",
        href: "https://hajj-management-plum.vercel.app/",
        desc: "Hajj Management ",

    },
    {
        id: "sohi",
        productName: "Sohi",
        logo: "/images/products/sohi.webp",
        href: "https://sohi.com.bd/",
        desc: "Airport Services",

    },


];