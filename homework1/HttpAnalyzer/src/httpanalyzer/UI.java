package httpanalyzer;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import javafx.application.Application;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.TextField;
import javafx.scene.layout.ColumnConstraints;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Priority;
import javafx.scene.layout.RowConstraints;
import javafx.stage.Stage;

public class UI extends Application{
	private String url;
	@Override
	public void start(Stage stage) throws Exception {
		GridPane gridPane = new GridPane();
		
		ColumnConstraints cons1 = new ColumnConstraints();
        cons1.setHgrow(Priority.NEVER);
        gridPane.getColumnConstraints().add(cons1);
        ColumnConstraints cons2 = new ColumnConstraints();
        cons2.setHgrow(Priority.ALWAYS);
        gridPane.getColumnConstraints().addAll(cons1, cons2);
        RowConstraints rcons1 = new RowConstraints();
        rcons1.setVgrow(Priority.NEVER);
        RowConstraints rcons2 = new RowConstraints();
        rcons2.setVgrow(Priority.ALWAYS);
        gridPane.getRowConstraints().addAll(rcons1, rcons2);
		
		Label label = new Label("  Enter the URL: ");
        TextField urlField = new TextField();
        urlField.setPrefColumnCount(10);
        Button analyzeButton = new Button("Analyze");
        ListView<StringBuilder> view = new ListView<>();
        
        gridPane.add(label, 0, 0);
        gridPane.add(urlField, 1, 0, 2, 1);
        gridPane.add(analyzeButton, 6, 0);
        gridPane.add(view, 0, 1, 8, 2);
        
        
        Scene scene = new Scene(gridPane, 1000, 600);
        stage.setTitle("Http Analyzer");
        stage.setScene(scene);
        stage.show();
        
        urlField.textProperty().addListener(new ChangeListener<String>() {
            @Override
            public void changed(ObservableValue<? extends String> observable, String oldValue, String newValue) {
                url = urlField.getText().toString();
            }
        });
        analyzeButton.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                try {
                    Analyzer h = new Analyzer(new URL(url));
                    ObservableList<StringBuilder> items = FXCollections.observableArrayList(
                            h.serverInformation(), h.SupportedServerMethods(),h.cookieInformation(),h.cacheInformation()
                            ,h.authenticationInformation(),h.getStatusCode(),
                            new StringBuilder("7: \n supports persistent connections"));
                    view.setItems(items);
                } catch (MalformedURLException e) {
                	e.printStackTrace();
                } 
                catch (IOException e) {
                	e.printStackTrace();
                }

            }
        });
		
	}

	public static void main(String[] args) {
		 launch(args);
	}
}
