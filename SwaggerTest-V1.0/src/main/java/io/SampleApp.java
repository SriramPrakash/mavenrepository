package io;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import io.swagger.jaxrs.config.BeanConfig;
import java.util.Set;
import java.util.HashSet;
import javax.ws.rs.core.Application;
import javax.ws.rs.Path;

public class SampleApp extends Application
{

  public SampleApp(){

      BeanConfig beanConfig = new BeanConfig();
      beanConfig.setVersion("1.0");
      beanConfig.setSchemes(new String[]{"http"});
      beanConfig.setHost("localhost:8080");
      beanConfig.setBasePath("SwaggerTest-V1.0/rest");
      beanConfig.setResourcePackage(RestService.class.getPackage().getName());
      beanConfig.setDescription("A temperature converter service.");
      beanConfig.setScan(true);
  }
/*  @Override
  public Set<Class<?>> getClasses(){
    Set<Class<?>> resources = new HashSet<Class<?>>();
    resources.add(RestService.class);
    //resources.add(io.SampleApp.class);
    return resources;
  }*/

}
