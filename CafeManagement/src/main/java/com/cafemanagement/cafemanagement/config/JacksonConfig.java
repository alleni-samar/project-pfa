package com.cafemanagement.cafemanagement.config;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JacksonConfig {

    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonGenerator.Feature.WRITE_BIGDECIMAL_AS_PLAIN, true);
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        // Configurer la profondeur maximale
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL); // Exclut les valeurs nulles si nécessaire
        mapper.setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE); // Configurer la stratégie de nommage des propriétés
        return mapper;
    }
}
