import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-bg-base)',
        surface: 'var(--color-bg-surface)',
        subtle: 'var(--color-bg-subtle)',
        hover: 'var(--color-bg-hover)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          light: 'var(--color-primary-light)'
        },
        line: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)'
        },
        main: 'var(--color-text-main)',
        body: 'var(--color-text-body)',
        muted: 'var(--color-text-muted)',
        'on-primary': 'var(--color-text-on-primary)',
        'brand-star': 'var(--color-brand-star)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        info: 'var(--color-info)'
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)'
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        hover: 'var(--shadow-hover)'
      },
      fontSize: {
        h1: ['var(--font-h1)', { lineHeight: '1.25', fontWeight: '700' }],
        h2: ['var(--font-h2)', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['var(--font-h3)', { lineHeight: '1.4', fontWeight: '600' }],
        stat: ['var(--font-stat)', { lineHeight: '1.2', fontWeight: '700' }],
        body: ['var(--font-body)', { lineHeight: '1.6', fontWeight: '400' }],
        caption: ['var(--font-caption)', { lineHeight: '1.4', fontWeight: '500' }]
      }
    }
  },
  plugins: []
};

export default config;
