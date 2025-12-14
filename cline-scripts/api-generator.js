#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function generateAPIRoute(routeName) {
  return `import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const data = {
      message: '${routeName} endpoint',
      timestamp: new Date().toISOString(),
    };
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
`;
}

const routeName = process.argv[2];

if (!routeName) {
  console.error('❌ Usage: node api-generator.js RouteName');
  process.exit(1);
}

const apiDir = path.join(__dirname, '..', 'app', 'api', routeName.toLowerCase());
fs.mkdirSync(apiDir, { recursive: true });

const routeFile = path.join(apiDir, 'route.ts');
fs.writeFileSync(routeFile, generateAPIRoute(routeName));

console.log(`✅ Generated: app/api/${routeName.toLowerCase()}/route.ts`);
