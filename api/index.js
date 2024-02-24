async function loadServer() {
  const serverModule = await import('../dist/apps/nx-clean2/server/server.mjs');
  return serverModule.app;
}

export default loadServer().then((app) => app());
