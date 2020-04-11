package utilities;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Config {
    //properties are used for configurations
    private static Properties pp= new Properties();
    static {
        String path = "configuration.properties";
        try{
            FileInputStream file = new FileInputStream(path);
            pp.load(file);
            file.close();//we close inorder it not to be accessable , not let to change the data, it is recommended
        }
        catch(IOException a){
            System.out.println("Properties file not found");
        }
    }
    public static String getProperty(String keyword){
        return pp.getProperty(keyword);
    }

}
