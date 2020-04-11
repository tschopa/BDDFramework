package runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        glue = "step_definitions",
        plugin = {"html:target/cucumber","json:target/report.json"},
        tags = "@teachersPaysTeachers",
        dryRun = false
)
public class CukesRunner {

}
