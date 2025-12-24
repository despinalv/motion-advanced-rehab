import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  price?: string;
  description: string;
  features: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface MethodItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}