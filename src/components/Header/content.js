export const headerContent = {
    head: {
        form: {
            placeholder: 'Search'
        },
        nav: [
            {
                text: 'Products',
                href: '',
                dropdown: [
                    {
                        title: 'Build',
                        id: 'build',
                        icon: '/static/images/v3/icons/icon-build.svg',
                        links: [
                            {
                                text: 'Edge Application',
                                href: '/en/products/edge-application/',
                                class: 'category'
                            },
                            {
                                text: 'Application Acceleration',
                                href: '/en/products/application-acceleration/'
                            },
                            {
                                text: 'Edge Caching',
                                href: '/en/products/edge-caching/'
                            },
                            {
                                text: 'Edge Functions',
                                href: '/en/products/edge-functions/'
                            },
                            {
                                text: 'Image Processor',
                                href: '/en/products/image-processor/'
                            },
                            {
                                text: 'Load Balancer',
                                href: '/en/products/load-balancer/'
                            }
                        ]
                    },
                    {
                        title: 'Secure',
                        id: 'secure',
                        icon: '/static/images/v3/icons/icon-secure.svg',
                        links: [
                            {
                                text: 'Edge Firewall',
                                href: '/en/products/edge-firewall/',
                                class: 'category'
                            },
                            {
                                text: 'DDoS Protection',
                                href: '/en/products/ddos-protection/'
                            },
                            {
                                text: 'Network Layer Protection',
                                href: '/en/products/network-layer-protection/'
                            },
                            {
                                text: 'Web Application Firewall',
                                href: '/en/products/web-application-firewall/'
                            },
                            {
                                text: 'Intelligent DNS',
                                href: '/en/products/intelligent-dns/',
                                class: 'category p-adjust'
                            }
                        ]
                    },
                    {
                        title: 'Deliver',
                        id: 'deliver',
                        icon: '/static/images/v3/icons/icon-deliver.svg',
                        links: [
                            {
                                text: 'Edge Orchestrator',
                                href: '/en/products/edge-orchestrator/',
                                class: 'category'
                            },
                            {
                                text: 'Azion Edge Network',
                                href: '/en/products/edge-network/',
                                class: 'azion-edge-network'
                            }
                        ]
                    },
                    {
                        title: 'Observe',
                        id: 'observe',
                        icon: '/static/images/v3/icons/icon-observe.svg',
                        links: [
                            {
                                text: 'Data Streaming',
                                href: '/en/products/data-streaming/',
                                class: 'category'
                            },
                            {
                                text: 'Edge Pulse',
                                href: '/en/products/edge-pulse/',
                                class: 'category p-adjust'
                            },
                            {
                                text: 'Real-Time Metrics',
                                href: '/en/products/real-time-metrics/',
                                class: 'category p-adjust'
                            },
                            {
                                text: 'Real-Time Events',
                                href: '/en/products/real-time-events/',
                                class: 'category p-adjust'
                            }
                        ]
                    }
                ],
                highlights: [
                    {
                        title: 'Documentation',
                        id: 'documentation',
                        description:
                            'The help you need to build your serverless applications at the edge with Azion',
                        href: '/en/documentation/',
                        icon: '/static/images/v3/icons/icon-documentation.svg'
                    },
                    {
                        title: 'Success Stories',
                        id: 'success-stories',
                        description: 'Find customer stories and success cases',
                        href: '/en/success-case/',
                        icon: '/static/images/v3/icons/icon-use-cases.svg'
                    },
                    {
                        title: 'Support',
                        id: 'support',
                        description:
                            'Engineer-to-engineer support with the transparency you’ve come to expect',
                        href: '/en/support/',
                        icon: '/static/images/v3/icons/icon-support.svg'
                    }
                ]
            },
            {
                text: 'Pricing',
                href: '/en/pricing/'
            },
            {
                text: 'About us',
                href: '/en/about-us/'
            },
            {
                text: 'Blog',
                href: '/en/blog'
            },
            {
                text: 'Documentation',
                href: '/en/documentation/'
            }
        ],
        navRight: [
            {
                text: 'Sign in',
                href: 'https://sso.azion.com/',
                icon: false,
                class: 'btn-tertiary-dark btn-link-menu'
            },
            {
                text: 'Contact',
                href: '/en/contact-sales/',
                icon: false,
                class: 'btn-tertiary-dark btn-link-menu'
            }
        ],
        buttons: [
            {
                text: 'free account',
                icon: true,
                href: 'https://manager.azion.com/signup/',
                class: 'btn-secondary-dark btn-free-account'
            }
        ]
    },
    sidebar: {
        nav_weak: [
            {
                text: 'Careers',
                href: '/en/careers/',
                flag: {
                    text: 'We`re hiring!'
                }
            },
            {
                text: 'Success stories',
                href: '/en/success-case/'
            },
            {
                text: 'Privacy policy',
                href: '/en/documentation/agreements/privacy-policy/'
            }
        ],
        buttons: [
            {
                text: 'Contact',
                href: '/en/contact-sales/',
                icon: true,
                primary: 'light'
            },
            {
                text: 'Sign in',
                href: 'https://sso.azion.com/',
                icon: true,
                tertiary: 'light'
            }
        ]
    }
};
