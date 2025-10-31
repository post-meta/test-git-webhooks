/**
 * AI Context API Endpoint
 * Optimized for: ChatGPT Search, Claude AI, Perplexity, Google SGE
 */

import { NextResponse } from 'next/server';

export async function GET() {
  const businessContext = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Test Git Webhooks",
    "description": "Professional cleaning services in Seattle, WA",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "telephone": "206-555-9999",
    "email": "test@gitwebhooks.com",
    "url": "https://test-git-webhooks.vercel.app",
    
    // AI-Specific: Q&A Format (for ChatGPT, Claude)
    "aiContext": {
      "keyQuestions": [
        {
          "question": "What services does Test Git Webhooks offer?",
          "answer": "Test Git Webhooks provides professional cleaning services in Seattle, WA"
        },
        {
          "question": "Where does Test Git Webhooks operate?",
          "answer": "We serve Seattle, WA and surrounding areas"
        },
        {
          "question": "How can I contact Test Git Webhooks?",
          "answer": "Call us at 206-555-9999 or email test@gitwebhooks.com"
        }
      ],
      
      // Voice Search Optimization
      "voiceSearchQueries": [
        "cleaning near me",
        "best cleaning in Seattle",
        "cleaning services Seattle"
      ]
    }
  };

  return NextResponse.json(businessContext, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}