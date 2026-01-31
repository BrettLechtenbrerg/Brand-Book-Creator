"use client";

import { Download } from "lucide-react";

interface PdfDownloadButtonProps {
  companyName: string;
}

export function PdfDownloadButton({ companyName }: PdfDownloadButtonProps) {
  const handleDownload = () => {
    // Set the document title temporarily for the PDF filename
    const originalTitle = document.title;
    document.title = `${companyName} - Brand Book`;
    window.print();
    document.title = originalTitle;
  };

  return (
    <button
      onClick={handleDownload}
      className="print:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl hover:from-blue-800 hover:to-blue-600 transition-all"
    >
      <Download className="w-4 h-4" />
      Download PDF
    </button>
  );
}
