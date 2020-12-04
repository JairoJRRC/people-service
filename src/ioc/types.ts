import { AdapterTypes } from './types/AdapterTypes';
import { RepositoryTypes } from './types/RepositoryTypes';
import { ServiceTypes } from './types/ServiceTypes';
import { DomainTypes } from './types/DomainTypes';
import { HandlerTypes } from './types/HandlerTypes';
import { ModelTypes } from './types/ModelTypes';
import { SearchEngineTypes } from './types/SearchEngineTypes';
import { ValidationTypes } from './types/ValidationTypes';

const TYPES = {
  Adapters: AdapterTypes,
  Repositories: RepositoryTypes,
  Services: ServiceTypes,
  Domain: DomainTypes,
  Handlers: HandlerTypes,
  Models: ModelTypes,
  Validation: ValidationTypes,
  SearchEngine: SearchEngineTypes,
  ResourceManager: Symbol.for('ResourceManager'),
  Sequelize: Symbol.for('Sequelize')
};

const TAGS = {};

export { TYPES, TAGS };
