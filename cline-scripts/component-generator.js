#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function generateComponent(componentName) {
  return `import React from 'react';

interface ${componentName}Props {
  className?: string;
}

export default function ${componentName}({ className = '' }: ${componentName}Props) {
  return (
    <div className={\`p-6 rounded-lg border \${className}\`}>
      <h2 className="text-2xl font-bold mb-4">${componentName}</h2>
      <p className="text-gray-600">Component content goes here</p>
    </div>
  );
}
`;
}

function generateTest(componentName) {
  return `import { render, screen } from '@testing-library/react';
import ${componentName} from './${componentName}';

describe('${componentName}', () => {
  it('renders the component', () => {
    render(<${componentName} />);
    expect(screen.getByText('${componentName}')).toBeInTheDocument();
  });
});
`;
}

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Usage: node component-generator.js ComponentName');
  process.exit(1);
}

const componentsDir = path.join(__dirname, '..', 'src', 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const componentFile = path.join(componentsDir, `${componentName}.tsx`);
const testFile = path.join(componentsDir, `${componentName}.test.tsx`);

fs.writeFileSync(componentFile, generateComponent(componentName));
fs.writeFileSync(testFile, generateTest(componentName));

console.log(`✅ Generated: src/components/${componentName}.tsx`);
console.log(`✅ Generated: src/components/${componentName}.test.tsx`);
