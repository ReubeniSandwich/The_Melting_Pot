import java.util.ArrayList;

public class Scene {

	private final String name; // Initialized with constructor
	
	private final String sourceFileName; // Initialized with constructor
	
	private int dimensionX; // Initialized with constructor
	
	private int dimensionY; // Initialized with constructor
	
	private ArrayList<Tool> tools; // Initialized with constructor
	
	private ArrayList<Ingredient> ingredients; // Initialized with constructor
	
	public Scene(String name, String sourceFileName, ArrayList<Tool> tools, ArrayList<Ingredient> ingredients) {
		this.name = name;
		this.sourceFileName = sourceFileName;
		this.dimensionX = 0;
		this.dimensionY = 0;
		this.tools = tools;
		this.ingredients = ingredients;
	}
	
	public Scene(String name, String sourceFileName, ArrayList<Tool> tools, ArrayList<Ingredient> ingredients, int dimensionX, int dimensionY) {
		this.name = name;
		this.sourceFileName = sourceFileName;
		this.dimensionX = dimensionX;
		this.dimensionY = dimensionY;
		this.tools = tools;
		this.ingredients = ingredients;
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getSourceFile() {
		return this.sourceFileName;
	}
	
	public int getDimensionX() {
		return this.dimensionX;
	}
	
	public int getDimensionY() {
		return this.dimensionY;
	}
	
	public void setDimensions(int x, int y) {
		this.dimensionX = x;
		this.dimensionY = y;
	}
}
