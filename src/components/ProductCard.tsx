import React from 'react';

interface ProductCardProps {
  className?: string;
}

export default function ProductCard({ className = '' }: ProductCardProps) {
  return (
    <div className={`p-6 rounded-lg border ${className}`}>
      <h2 className="text-2xl font-bold mb-4">ProductCard</h2>
      <p className="text-gray-600">Component content goes here</p>
    </div>
  );
}
