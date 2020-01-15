/*
 * Copyright (c) 2012-2018 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
package org.eclipse.che.multiuser.keycloak.server.deploy;

import com.google.inject.Injector;
import javax.inject.Inject;
import javax.inject.Named;
import javax.inject.Provider;
import javax.inject.Singleton;
import org.eclipse.che.commons.annotation.Nullable;
import org.eclipse.che.multiuser.keycloak.server.oauth2.DelegatedOAuthAPI;
import org.eclipse.che.security.oauth.EmbeddedOAuthAPI;
import org.eclipse.che.security.oauth.OAuthAPI;

/**
 * Provides appropriate OAuth Authentication API depending on configuration.
 *
 * @author Mykhailo Kuznietsov.
 * @author Sergii Kabashniuk.
 */
@Singleton
public class OAuthAPIProvider implements Provider<OAuthAPI> {
  private final OAuthAPI oAuthAPI;

  @Inject
  public OAuthAPIProvider(
      @Nullable @Named("che.oauth.service_mode") String oauthType, Injector injector) {

    switch (oauthType) {
      case "embedded":
        oAuthAPI = injector.getInstance(EmbeddedOAuthAPI.class);
        break;
      case "delegated":
        oAuthAPI = injector.getInstance(DelegatedOAuthAPI.class);
        break;
      default:
        throw new RuntimeException(
            "Unknown value configured for \"che.oauth.service_mode\", must be either \"embedded\", or \"delegated\"");
    }
  }

  @Override
  public OAuthAPI get() {
    return oAuthAPI;
  }
}
