import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import contactHandler from './api/contact.js';

// Local Vite dev server plugin to emulate Vercel Serverless Function /api/contact locally
function vercelApiDevPlugin() {
  return {
    name: 'vercel-api-dev-plugin',
    config(config, { mode }) {
      // Load .env and .env.local variables into Node's process.env during local dev
      const env = loadEnv(mode, process.cwd(), '');
      for (const key in env) {
        if (process.env[key] === undefined) {
          process.env[key] = env[key];
        }
      }
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || '';
        if (url === '/api/contact' || url.startsWith('/api/contact?')) {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              req.body = body ? JSON.parse(body) : {};
            } catch (e) {
              req.body = {};
            }

            // Standard Vercel Serverless res helper methods
            res.status = (statusCode) => {
              res.statusCode = statusCode;
              return res;
            };
            res.json = (data) => {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
              return res;
            };

            try {
              await contactHandler(req, res);
            } catch (err) {
              console.error('Vite Dev API Handler Error:', err);
              if (!res.headersSent) {
                res.status(500).json({
                  success: false,
                  message: err.message || 'Internal Server Error in API handler',
                });
              }
            }
          });
          return;
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercelApiDevPlugin()],
});
