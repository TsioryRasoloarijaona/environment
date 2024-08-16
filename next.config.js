module.exports = {
    images: {
        remotePatterns: [
            /*{
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/**',
            },*/
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '/**',
            },
        ],
    },
    env: {
        baseUrl: process.env.BASE_URL,
      },
};