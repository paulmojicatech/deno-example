import { serve } from 'https://deno.land/std@0.58.0/http/server.ts';


const server = serve({ port: 8000});
console.log('Server started on port 8000');
for await (const req of server) {
    req.respond({ body: 'HERE I AM'});
}