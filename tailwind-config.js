tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', '"Noto Sans TC"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            colors: {
                slate: {
                    850: '#1e293b',
                    900: '#0f172a',
                },
                primary: '#38bdf8', // Sky 400
                accent: '#818cf8',  // Indigo 400
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
}