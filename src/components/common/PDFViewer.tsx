'use client';

import { useMediaQuery } from '@/lib/hooks/use-media-query';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


const PDFViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const isDesktop = useMediaQuery('(min-width: 768px)');
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    const onDocumentLoadSuccess = (pdf: pdfjs.PDFDocumentProxy) => {
        setNumPages(pdf.numPages);
    };

    return (
        <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div>Loading PDF Document...</div>}
        >
            {Array.from(new Array(numPages), (el, index) => (
                <div key={`page_${index + 1}`} style={{ position: 'relative' }}>
                    <Page
                        pageNumber={index + 1}
                        onRenderSuccess={(page) => {
                            const viewport = page.getViewport({ scale: 1 });
                        }}
                        width={isDesktop ? 1200 : 370}
                    />
                </div>
            ))}
        </Document>
    );
};

export default PDFViewer;