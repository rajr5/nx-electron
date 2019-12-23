import { Rule, chain } from '@angular-devkit/schematics';
import { addDepsToPackageJson, updateJsonInTree, addPackageWithInit, updateWorkspace, formatFiles } from '@nrwl/workspace';
import { Schema } from './schema';
import { nxElectronVersion, electronVersion, electronPackagerVersion, rimrafVersion } from '../../utils/versions';
import { JsonObject } from '@angular-devkit/core';

function addDependencies(): Rule {
  return addDepsToPackageJson(
    {},
    {
      'nx-electron': nxElectronVersion,
      'electron': electronVersion,
      'electron-packager': electronPackagerVersion,
      'rimraf': rimrafVersion
    }
  );
}

function moveDependency(): Rule {
  return updateJsonInTree('package.json', json => {
    json.dependencies = json.dependencies || {};

    delete json.dependencies['nx-electron'];
    delete json.dependencies['electron'];
    delete json.dependencies['electron-packager'];
    delete json.dependencies['rimraf'];

    return json;
  });
}

function setDefault(): Rule {
  return updateWorkspace(workspace => {
    workspace.extensions.cli = workspace.extensions.cli || {};

    const defaultCollection: string =
      workspace.extensions.cli &&
      ((workspace.extensions.cli as JsonObject).defaultCollection as string);

    if (!defaultCollection || defaultCollection === '@nrwl/workspace') {
      (workspace.extensions.cli as JsonObject).defaultCollection = 'nx-electron';
    }
  });
}

export default function(schema: Schema) {
  return chain([
    setDefault(),
    addPackageWithInit('@nrwl/jest'),
    addDependencies(),
    moveDependency(),
    formatFiles(schema)
  ]);
}
