import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import starlightHeadingBadges from 'starlight-heading-badges'
import starlightImageZoom from 'starlight-image-zoom'


// https://astro.build/config
export default defineConfig({
    site: process.env.CI
    ? 'https://jules-bens-aa.github.io' : 'http://localhost:4321',
    base: '/jb2a-wiki',
    integrations: [starlight({

// Plugins        
        plugins: [
            starlightImageZoom(),
            starlightHeadingBadges()
        ],

// Website Config        
        title: 'JB2A Wiki',
        logo: {
            light: './src/assets/img/wikilogo-light-512x128.webp',
            dark: './src/assets/img/wikilogo-dark-512x128.webp',
            replacesTitle: true
          },
        social: {
            github: 'https://github.com/Jules-Bens-Aa/jb2a-wiki',
            discord: 'https://discord.gg/gmd8MAPX4m',
            patreon: 'https://www.patreon.com/JB2A',
            youtube: 'https://www.youtube.com/channel/UCqLusRtLV7GXJo_xNNM3dOw',
        },
        editLink: {
            baseUrl: 'https://github.com/Jules-Bens-Aa/jb2a-wiki/tree/main',
          }, 
        disable404Route: true,
        favicon: '/favicon.svg',
        head: [
            // Add ICO favicon fallback for Safari.
            {
              tag: 'link',
              attrs: {
                rel: 'icon',
                href: '/favicon.ico',
                sizes: '32x32',
              },
            },
          ],
// Custom Components
        components: {
            //Override *.astro
            SocialIcons: './src/components/CustomSocialIcons.astro',
            Hero: './src/components/CustomHero.astro',
             },  
        
// Custom Css files        
        customCss: [
            './src/styles/custom.css',
          ],

// Sidebar config          
        sidebar: [
            { 
                label: 'Home',
                link: '/',
            },
            {
                label: '',
                link: '',
                attrs: {style: '  border-top: 1px solid var(--sl-color-hairline); border-radius: 0px; opacity: 1'}
            },
            {
                label: 'Getting Started',
                // badge: 'Important',
                collapsed: true,
                items: [
                    'getting-started/prerequisites',
                    'getting-started/our-content',
                    'getting-started/jb2a-fvtt'
                ]
            },
            {
                label: '',
                link: '',
                attrs: {style: '  border-bottom: 1px solid var(--sl-color-hairline); border-radius: 0px; opacity: 1'}
            },
            {
                label: 'Frequently Asked Questions',
                collapsed: true,
                items: [
                    'faq/mcq',
                    'faq/about-jb2a',
                    'faq/about-fvtt'
                ]
            },
            {
                label: 'Troubleshooting',
                collapsed: true,
                items: [
                    'troubleshooting/mci',
                    'troubleshooting/jb2a',
                    'troubleshooting/fvtt'
                ]
            },
            {
                label: 'External Resources',
                collapsed: true,
                items: [
                    'external-resources/sfx',
                    'external-resources/useful-tools',
                ]
            },
            {
                label: 'Patch Notes',
                collapsed: true,
                items: [
                    'patchnotes/pn-demo',
                    'patchnotes/pn-main'
                ]
            },
            {
                label: 'Template',
                
                collapsed: true,
                badge: 'Admin',
                items: [
                    'template/template',
                    'template/website-cmd',
                    'template/todolist'
                ]
            }
        ],

// Table of contents global config
        tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
		}),
    ],
});