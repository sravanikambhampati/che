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
package org.eclipse.che.api.workspace.server.devfile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.io.Serializable;
import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

/**
 * Helps to store and read serializable values of the preferences map in {@code Component} to/from
 * database.
 *
 * @author Max Shaposhnyk
 */
@Converter(autoApply = true)
public class SerializableConverter implements AttributeConverter<Serializable, String> {

  private ObjectMapper objectMapper;

  public SerializableConverter() {
    this.objectMapper = new ObjectMapper();
    objectMapper.enableDefaultTyping(ObjectMapper.DefaultTyping.OBJECT_AND_NON_CONCRETE);
  }

  @Override
  public String convertToDatabaseColumn(Serializable value) {
    try {
      return objectMapper.writeValueAsString(value);
    } catch (JsonProcessingException e) {
      e.printStackTrace();
    }
    return null;
  }

  @Override
  public Serializable convertToEntityAttribute(String dbData) {
    System.out.println("~~~~~~~~~~~~~~~~~~~~:" + new String(dbData));
    try {
      return objectMapper.readValue(dbData, Serializable.class);
    } catch (IOException e) {
      e.printStackTrace();
    }
    return null;
  }
}
