import { ModuleManager } from './libraries/module'
import { global } from './store/global'

export const moduleManager = new ModuleManager<'global', typeof global>()

moduleManager.register('global', global)
