import java.util.ArrayList;

public class Instruction {
	
	/** The String representation of the Instruction */
	private final String narrative; // Initialized with Constructor
	
	/** The time the instruction takes */
	private final double cookTime; // Initialized with Constructor
	
	/** The tool used for the instruction */
	private final Tool tool; // Initialized with Constructor
	
	/** Whether the instruction has been completed */
	private boolean completed; // Initialized to false
	
	/** The ingredients involved in the instruction */
	private final ArrayList<Ingredient> ingredients; // Initialized with Constructor
	
	public Instruction(String narrative, double cookTime, Tool tool, ArrayList<Ingredient> ingredients) {
		this.narrative = narrative;
		this.cookTime = cookTime;
		this.tool = tool;
		this.completed = false;
		this.ingredients = ingredients;
	}
	
	public String getNarrative() {
		return this.narrative;
	}
	
	public double getCookTime() {
		return this.cookTime;
	}
	
	public Tool getTool() {
		return this.tool;
	}
	
	public void complete() {
		this.completed = true;
	}
	
	public boolean isCompleted() {
		return this.completed;
	}
	
	public ArrayList<Ingredient> getIngredients() {
		return this.ingredients;
	}

}
