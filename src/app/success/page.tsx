'use client';

import { Suspense } from 'react';
import Image from 'next/image';

const SuccessPage = () => {
  

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full text-center overflow-hidden">
        <h1 className="text-3xl font-semibold text-green-600 mb-6">Payment Successful!</h1>
        <p className="text-lg font-medium text-gray-700 mb-4">Thank you for your purchase.</p>
        
           <div className="flex flex-col items-center justify-center py-16">
                  <div className="bg-gray-100 p-8  shadow-xl mb-6">
                    <Image
                      src="/pay.jpg"
                      alt="Empty Cart"
                      className="w-60 h-44 "
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
          </div>
       
        
      
        <div className="mt-8">
          <button
            onClick={() => window.location.href = '/shop'}
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border transition duration-300"
          >
            Go to Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default function WrappedSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPage />
    </Suspense>
  );
}