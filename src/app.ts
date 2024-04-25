import { envs } from './config/envs';
import { AppRoutes } from './routes/index.routes';
import { Server } from "./server/server";



(async () => {
  main()
})();

//  Create server instance with env variables and routes
function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
    public_path: envs.PUBLIC_PATH
  });

  server.start();

}