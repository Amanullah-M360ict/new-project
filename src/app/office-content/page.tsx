import React from 'react'
import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';

const OfficeContentPage = () => {
    const rawVideos = [
        { id: 1, videoId: "8iGMVVngmc8", title: "M360ICT & Aviation.com.bd Present the First-Ever Travel Industry Job Portal" },
        { id: 2, videoId: "6nNJD49HBsw", title: "We are proud to be recognized as a member of the American Chamber of Commerce in Bangladesh." },
        { id: 3, videoId: "QpBRybSql9s", title: "M360 ICT Wins South Asian Business Excellence Award 2025 | Honored by Former President of Sri Lanka" },
        { id: 4, videoId: "IEBE_xbNIaE", title: "Hassle-free Meet & Greet service in Dhaka Airport with Sohi Airport Service" },
        { id: 5, videoId: "oSHNPfJd6eo", title: "We had an incredible experience at this year’s Asian Tourism Fair 2025" },
        { id: 6, videoId: "l-P9TXVV-WM", title: "Transform Your Travel Agency with TRABILL | Bangladesh’s #1 Travel Management Software ✈️" },
        { id: 7, videoId: "C6sMfIS2pBw", title: "আপনার ট্রাভেল এজেন্সিকে ডিজিটাল করুন TRABILL দিয়ে | বাংলাদেশের #১ Travel Management Software ✈️" },
        { id: 8, videoId: "aCbFXbOHmnc", title: "Transform Your Travel Agency with TRABILL | Bangladesh’s #1 Travel Management Software ✈️" },
        { id: 9, videoId: "P1Gb1IHXzt8", title: "আপনার ট্রাভেল এজেন্সিকে ডিজিটাল করুন TRABILL দিয়ে | বাংলাদেশের #১ Travel Management Software ✈️" },
        { id: 10, videoId: "02DN7b-9jm0", title: "Asian Tourism Fair 2025" },
        { id: 11, videoId: "JbpWrG3xUjA", title: "M360ICT – The King of OTA Development | Complete AI-Powered Travel Agency Solution" },
        { id: 12, videoId: "Y5XofHrTi9E", title: "BTTF2025 - Demo" },
        { id: 17, videoId: "9YBfczA7p4I", title: "Inside M360ICT: Where Code Meets Culture & Innovation Thrives | From Vision to Execution" },
        { id: 21, videoId: "lMnw0d6V3tQ", title: "Asian Tourism Fair 2025 | Unveil the Wonders at | M360ICT" },
        { id: 22, videoId: "ypO0pJ4-2cE", title: "M360ICT পরিবারের পক্ষ থেকে সবাইকে জানাই ঈদ উল আযহার আন্তরিক শুভেচ্ছা 'ঈদ মোবারক'" },
        { id: 27, videoId: "KYvI3SnF_Fk", title: "Asian Tourism Fair 2025 - Demo" },
        { id: 28, videoId: "wBLyE10GG6o", title: "🌍 Trabill is Joining Chittagong Travel Mart 2025 | Experience Travel Like Never Before!" },
        { id: 29, videoId: "kxlNXxu6nfY", title: "Entity Belief | M360 ICT" },
    ];

    const officeContentList = rawVideos.map(v => ({
        ...v,
        youtubeUrl: `https://www.youtube.com/watch?v=${v.videoId}`,
        category: "M360ICT Content",
        thumbnail: `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`
    }));

    return (
        <div className='container'>

        </div>
    )
}

export default OfficeContentPage