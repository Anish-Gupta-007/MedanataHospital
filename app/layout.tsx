import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medanta - The Medicity | World's Best Hospitals",
  description: "Medanta exact UI replica with tailored medical design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          body { font-family: 'Montserrat', sans-serif; }
          .font-serif { font-family: 'Playfair Display', serif; }
        `}} />
      </head>
      <body className="bg-[#fcfcfc] text-[#222] min-h-screen relative">
        {children}

        {/* --- Global Unfixed Side Widgets --- */}
        <div className="fixed right-0 top-[280px] z-50 flex flex-col items-end">
          {/* Emergency 1068 Button */}
          <div className="bg-[#e8402a] text-white w-14 h-16 rounded-l-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#c73520] transition-colors mb-2 shadow-md">
            <svg className="w-6 h-6 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405C18.21 14.79 18 13.9 18 13V9a6 6 0 00-9-5.197M9 21h6a3 3 0 01-6 0z" />
            </svg>
            <span className="text-[11px] font-bold">1068</span>
          </div>
          {/* Secondary Button */}
          <div className="bg-white text-gray-700 w-12 h-12 rounded-l-lg shadow-md border-y border-l border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
        </div>

      </body>
    </html>
  );
}
