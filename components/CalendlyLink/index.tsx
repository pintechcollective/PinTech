'use client';
import Logo from '@/public/icons/PT - LogoMark - DBLBL.svg';
import { useEffect } from 'react';
import Image from 'next/image';
interface CalendlyWidgetProps {
  url: string;
  height?: number;
  minWidth?: number;
}

const CalendlyWidget = ({
  url,
  height = 700,
  minWidth = 320,
}: CalendlyWidgetProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full bg-white py-14">
      <div className="flex items-start justify-center">
        <Image
          src={Logo}
          alt="sas logo"
          height={150}
          width={150}
          className="text-center mb-5 object-cover"
        />
      </div>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{
          minWidth: `${minWidth}px`,
          height: `${height}px`,
        }}
      />
    </div>
  );
};

export default CalendlyWidget;
