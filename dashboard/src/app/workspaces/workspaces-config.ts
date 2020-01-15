/*
 * Copyright (c) 2015-2018 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
'use strict';

import {ListWorkspacesCtrl} from './list-workspaces/list-workspaces.controller';
import {CheWorkspaceItem} from './list-workspaces/workspace-item/workspace-item.directive';
import {CheWorkspaceStatus} from './list-workspaces/workspace-status-action/workspace-status.directive';
import {WorkspaceStatusController} from './list-workspaces/workspace-status-action/workspace-status.controller';
import {WorkspaceItemCtrl} from './list-workspaces/workspace-item/workspace-item.controller';
import {WorkspaceEditModeOverlay} from './workspace-edit-mode/workspace-edit-mode-overlay.directive';
import {WorkspaceEditModeToolbarButton} from './workspace-edit-mode/workspace-edit-mode-toolbar-button.directive';
import {NamespaceSelectorController} from './create-workspace/ready-to-go-stacks/namespace-selector/namespace-selector.controller';
import {NamespaceSelectorSvc} from './create-workspace/ready-to-go-stacks/namespace-selector/namespace-selector.service';
import {NamespaceSelector} from './create-workspace/ready-to-go-stacks/namespace-selector/namespace-selector.directive';
import {ProjectSourceSelectorController} from './create-workspace/ready-to-go-stacks/project-source-selector/project-source-selector.controller';
import {ProjectSourceSelectorService} from './create-workspace/ready-to-go-stacks/project-source-selector/project-source-selector.service';
import {ProjectSourceSelector} from './create-workspace/ready-to-go-stacks/project-source-selector/project-source-selector.directive';
import {AddImportProjectController} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/add-import-project.controller';
import {AddImportProjectService} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/add-import-project.service';
import {AddImportProject} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/add-import-project.directive';
import {ImportBlankProjectController} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-blank-project/import-blank-project.controller';
import {ImportBlankProjectService} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-blank-project/import-blank-project.service';
import {ImportBlankProject} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-blank-project/import-blank-project.directive';
import {ImportGitProjectController} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-git-project/import-git-project.controller';
import {ImportGitProjectService} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-git-project/import-git-project.service';
import {ImportGitProject} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-git-project/import-git-project.directive';
import {ImportZipProjectController} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-zip-project/import-zip-project.controller';
import {ImportZipProjectService} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-zip-project/import-zip-project.service';
import {ImportZipProject} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-zip-project/import-zip-project.directive';
import {ImportGithubProjectController} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-github-project/import-github-project.controller';
import {ImportGithubProjectService} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-github-project/import-github-project.service';
import {ImportGithubProject} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-github-project/import-github-project.directive';
import {GithubRepositoryItem} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/import-github-project/github-repository-item/github-repository-item.directive';
import {TemplateSelectorController} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/template-selector/template-selector.controller';
import {TemplateSelectorSvc} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/template-selector/template-selector.service';
import {TemplateSelector} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/template-selector/template-selector.directive';
import {TemplateSelectorItem} from './create-workspace/ready-to-go-stacks/project-source-selector/add-import-project/template-selector/template-selector-item/template-selector-item.directive';
import {EditProjectController} from './create-workspace/ready-to-go-stacks/project-source-selector/edit-project/edit-project.controller';
import {EditProject} from './create-workspace/ready-to-go-stacks/project-source-selector/edit-project/edit-project.directive';
import {EditProjectService} from './create-workspace/ready-to-go-stacks/project-source-selector/edit-project/edit-project.service';
import {ProjectMetadataController} from './create-workspace/ready-to-go-stacks/project-source-selector/edit-project/project-metadata/project-metadata.controller';
import {ProjectMetadataService} from './create-workspace/ready-to-go-stacks/project-source-selector/edit-project/project-metadata/project-metadata.service';
import {ProjectMetadata} from './create-workspace/ready-to-go-stacks/project-source-selector/edit-project/project-metadata/project-metadata.directive';
import {CheWorkspaceRamAllocationSliderController} from './workspace-ram-slider/che-workspace-ram-allocation-slider.controller';
import {CheWorkspaceRamAllocationSlider} from './workspace-ram-slider/che-workspace-ram-allocation-slider.directive';
import {WorkspaceStatus} from './workspace-status/workspace-status.directive';
import {WorkspaceStatusIndicator} from './workspace-status/workspace-status-indicator.directive';
import {CreateWorkspaceController} from './create-workspace/create-workspace.controller';
import {CreateWorkspaceSvc} from './create-workspace/create-workspace.service';
import {ShareWorkspaceController} from './share-workspace/share-workspace.controller';
import {ShareWorkspace} from './share-workspace/share-workspace.directive';
import {AddDeveloperController} from './share-workspace/add-developers/add-developers.controller';
import {AddMemberController} from './share-workspace/add-members/add-members.controller';
import {UserItemController} from './share-workspace/user-item/user-item.controller';
import {UserItem} from './share-workspace/user-item/user-item.directive';
import {WorkspaceConfigService} from './workspace-config.service';
import {WorkspaceDetailsConfig} from './workspace-details/workspace-details-config';
import {WorkspaceWarnings} from './workspace-details/warnings/workspace-warnings.directive';
import {WorkspaceWarningsController} from './workspace-details/warnings/workspace-warnings.controller';
import {WorkspacesService} from './workspaces.service';
import {WorkspacePluginsConfig} from './workspace-details/workspace-plugins/workspace-plugins-config';
import {WorkspaceEditorsConfig} from './workspace-details/workspace-editors/workspace-editors-config';
import {DevfileSelector} from './create-workspace/ready-to-go-stacks/devfile-selector/devfile-selector.directive';
import {DevfileSelectorController} from './create-workspace/ready-to-go-stacks/devfile-selector/devfile-selector.controller';
import {ReadyToGoStacksController} from './create-workspace/ready-to-go-stacks/ready-to-go-stacks.controller';
import {ReadyToGoStacks} from './create-workspace/ready-to-go-stacks/ready-to-go-stacks.directive';
import {DevfileSourceSelector} from './create-workspace/import-custom-stack/devfile-source-selector/devfile-source-selector.directive';
import {DevfileByUrl} from './create-workspace/import-custom-stack/devfile-by-url/devfile-by-url.directive';
import {DevfileByUrlController} from './create-workspace/import-custom-stack/devfile-by-url/devfile-by-url.controller';
import {ImportStackController} from './create-workspace/import-custom-stack/import-custom-stack.controller';
import {ImportStack} from './create-workspace/import-custom-stack/import-custom-stack.directive';
import {KubernetesNamespaceSelectorController} from './create-workspace/kubernetes-namespace-selector/kubernetes-namespace-selector.controller';
import {KubernetesNamespaceSelectorDirective} from './create-workspace/kubernetes-namespace-selector/kubernetes-namespace-selector.directive';

/**
 * @ngdoc controller
 * @name workspaces:WorkspacesConfig
 * @description This class is used for configuring all workspaces stuff.
 * @author Ann Shumilova
 */
export class WorkspacesConfig {

  constructor(register: che.IRegisterService) {

    /* tslint:disable */
    new WorkspaceDetailsConfig(register);
    new WorkspacePluginsConfig(register);
    new WorkspaceEditorsConfig(register);
    /* tslint:enable */

    register.controller('ListWorkspacesCtrl', ListWorkspacesCtrl);
    register.directive('cheWorkspaceItem', CheWorkspaceItem);
    register.controller('WorkspaceItemCtrl', WorkspaceItemCtrl);
    register.directive('cheWorkspaceStatus', CheWorkspaceStatus);
    register.controller('WorkspaceStatusController', WorkspaceStatusController);
    register.directive('workspaceEditModeOverlay', WorkspaceEditModeOverlay);
    register.directive('workspaceEditModeToolbarButton', WorkspaceEditModeToolbarButton);
    register.controller('CheWorkspaceRamAllocationSliderController', CheWorkspaceRamAllocationSliderController);
    register.directive('cheWorkspaceRamAllocationSlider', CheWorkspaceRamAllocationSlider);
    register.directive('workspaceStatus', WorkspaceStatus);
    register.directive('workspaceStatusIndicator', WorkspaceStatusIndicator);
    register.directive('workspaceWarnings', WorkspaceWarnings);
    register.controller('WorkspaceWarningsController', WorkspaceWarningsController);
    register.directive('devfileSelector', DevfileSelector);
    register.controller('DevfileSelectorController', DevfileSelectorController);
    register.controller('NamespaceSelectorController', NamespaceSelectorController);
    register.service('namespaceSelectorSvc', NamespaceSelectorSvc);
    register.directive('namespaceSelector', NamespaceSelector);
    register.controller('ProjectSourceSelectorController', ProjectSourceSelectorController);
    register.service('projectSourceSelectorService', ProjectSourceSelectorService);
    register.directive('projectSourceSelector', ProjectSourceSelector);
    register.controller('AddImportProjectController', AddImportProjectController);
    register.service('addImportProjectService', AddImportProjectService);
    register.directive('addImportProject', AddImportProject);
    register.controller('ImportBlankProjectController', ImportBlankProjectController);
    register.service('importBlankProjectService', ImportBlankProjectService);
    register.directive('importBlankProject', ImportBlankProject);
    register.controller('ImportGitProjectController', ImportGitProjectController);
    register.service('importGitProjectService', ImportGitProjectService);
    register.directive('importGitProject', ImportGitProject);
    register.controller('ImportGithubProjectController', ImportGithubProjectController);
    register.service('importGithubProjectService', ImportGithubProjectService);
    register.directive('importGithubProject', ImportGithubProject);
    register.directive('githubRepositoryItem', GithubRepositoryItem);
    register.controller('ImportZipProjectController', ImportZipProjectController);
    register.service('importZipProjectService', ImportZipProjectService);
    register.directive('importZipProject', ImportZipProject);
    register.controller('TemplateSelectorController', TemplateSelectorController);
    register.service('templateSelectorSvc', TemplateSelectorSvc);
    register.directive('templateSelector', TemplateSelector);
    register.directive('templateSelectorItem', TemplateSelectorItem);
    register.controller('EditProjectController', EditProjectController);
    register.directive('editProject', EditProject);
    register.service('editProjectService', EditProjectService);
    register.controller('ProjectMetadataController', ProjectMetadataController);
    register.service('projectMetadataService', ProjectMetadataService);
    register.directive('projectMetadata', ProjectMetadata);
    register.controller('CreateWorkspaceController', CreateWorkspaceController);
    register.service('createWorkspaceSvc', CreateWorkspaceSvc);
    register.controller('ShareWorkspaceController', ShareWorkspaceController);
    register.directive('shareWorkspace', ShareWorkspace);
    register.controller('AddDeveloperController', AddDeveloperController);
    register.controller('AddMemberController', AddMemberController);
    register.controller('UserItemController', UserItemController);
    register.directive('userItem', UserItem);
    register.service('workspaceConfigService', WorkspaceConfigService);
    register.service('workspacesService', WorkspacesService);
    register.controller('ReadyToGoStacksController', ReadyToGoStacksController);
    register.directive('readyToGoStacks', ReadyToGoStacks);
    register.directive('devfileSourceSelector', DevfileSourceSelector);
    register.directive('devfileByUrl', DevfileByUrl);
    register.controller('DevfileByUrlController', DevfileByUrlController);
    register.controller('ImportStackController', ImportStackController);
    register.directive('importStack', ImportStack);
    register.controller('KubernetesNamespaceSelectorController', KubernetesNamespaceSelectorController);
    register.directive('kubernetesNamespaceSelector', KubernetesNamespaceSelectorDirective);

    // config routes
    register.app.config(['$routeProvider', ($routeProvider: che.route.IRouteProvider) => {
      $routeProvider.accessWhen('/workspaces', {
        title: 'Workspaces',
        templateUrl: 'app/workspaces/list-workspaces/list-workspaces.html',
        controller: 'ListWorkspacesCtrl',
        controllerAs: 'listWorkspacesCtrl'
      })
        .accessWhen('/create-workspace', {
          title: 'New Workspace',
          templateUrl: 'app/workspaces/create-workspace/create-workspace.html',
          controller: 'CreateWorkspaceController',
          controllerAs: 'createWorkspaceController',
          reloadOnSearch: false,
          resolve: {
            initData: ['workspaceConfigService', (workspaceConfigService: WorkspaceConfigService) => {
              return workspaceConfigService.resolveWorkspaceRoute();
            }]
          }
        });
    }]);
  }
}
