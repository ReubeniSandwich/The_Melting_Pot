import java.util.ArrayList;

public class Recipe {

	/** The name of the Recipe */
	private final String name; // Initialized with Constructor
	
	/** The Instructions in the Recipe */
	private final ArrayList<Instruction> instructions; // Initialized with Constructor
	
	/** The instructions completed so far in the Recipe */
	private ArrayList<Instruction> completedInstructions; // Initialized to be empty
	
	/** The current Instruction being completed */
	private Instruction currentInstruction; // Initialized to null
	
	/** Whether the Recipe has been completed at least once */
	private boolean completedOnce; // Initialized to false, and set to true with isComplete()
	
	/** The prerequisite Recipes to unlock this Recipe */
	private final ArrayList<Recipe> prereqs; // Initialized with Constructor

	/** The Ingredients in the Recipe */
	private final ArrayList<Ingredient> ingredients; // Initialized with generateLists() method
	
	/** The Tools required to complete this Recipe */
	private final ArrayList<Tool> tools; // Initialized with generateLists() method
	
	public Recipe(String name, ArrayList<Instruction> instructions, ArrayList<Recipe> prereqs) {
		this.name = name;
		this.instructions = instructions;
		this.completedInstructions = new ArrayList<Instruction>();
		this.currentInstruction = null;
		this.completedOnce = false;
		this.prereqs = prereqs;
		this.ingredients = new ArrayList<Ingredient>();
		this.tools = new ArrayList<Tool>();
		fillLists();
	}

	public String getName() {
		return this.name;
	}
	
	public ArrayList<Instruction> getInstructions() {
		return this.instructions;
	}
	
	public ArrayList<Instruction> getCompletedInstructions() {
		return this.completedInstructions;
	}
	
	/**
	 * Reset the Recipe
	 */
	public void Reset() {
		this.completedInstructions.clear();
	}
	
	public boolean isComplete() {
		if (this.instructions.equals(completedInstructions)) {
			this.completedOnce = true;
			return true;
		} else {
			return false;
		}
	}
	
	public Instruction getCurrentInstruction() {
		return this.currentInstruction;
	}
	
	public boolean completeInstruction(Instruction instruction) {
		try {
			instruction.complete();
			return true;
		} catch (Exception e) {
			// TODO Fix exception and write some code here - Wesley
		}
		return true;
	}
	
	/**
	 * Returns a value for whether the recipe has already been completed at least once.
	 * Note: isComplete must be ran at least once upon completion for this method to return true.
	 */
	public boolean isCompletedOnce() {
		return this.completedOnce;
	}
	
	/**
	 * 
	 */
	public ArrayList<Recipe> getPrereqs() {
		return this.prereqs;
	}
	
	public ArrayList<Ingredient> getIngredients() {
		return this.ingredients;
	}
	
	public ArrayList<Tool> getTools() {
		return this.tools;
	}
	
	private void fillLists() {
		// Loop through all the instructions for this Recipe to add the tool and ingredients of each instruction
		for (Instruction instruction : this.instructions) {
			// Add the tool
			this.tools.add(instruction.getTool());
			
			// Loop through the ingredients for a particular instruction
			for (Ingredient ingredient : instruction.getIngredients()) {
				// If the ingredient hasn't been added yet, add it.
				if (!this.ingredients.contains(ingredient)) {
					ingredients.add(ingredient);
				}
			}
		}
	}
	
}
