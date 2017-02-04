const PROJECT_CONFIG = require('./_config/project')

module.exports = {
  PROJECT_NAME: PROJECT_CONFIG.PROJECT_NAME,
  ORGANISM_FACTORY: PROJECT_CONFIG.ORGANISM_FACTORY,
  MOLECULE_FACTORY: PROJECT_CONFIG.MOLECULE_FACTORY,
  QUARKS_PATH: PROJECT_CONFIG.QUARKS_PATH,
  ATOMS_PATH: PROJECT_CONFIG.ATOMS_PATH,
  ROUTER: 'routerExpress',
  ROUTES: 'routesExpress'
}