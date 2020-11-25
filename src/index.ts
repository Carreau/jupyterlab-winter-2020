import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for quansight/jupyterlab-winter-2020
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@quansight/jupyterlab-winter-2020:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@quansight/jupyterlab-winter-2020/index.css';

    manager.register({
      name: 'jupyterlab-winter-2020',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
