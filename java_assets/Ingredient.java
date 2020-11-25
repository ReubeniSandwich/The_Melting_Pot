
public class Ingredient {
	
	private final String name; // Initialized in Constructor
	private final String unitOfMeasure; // Initialized in Constructor
	private double chosenQuantity; // Initialized to 0
	private final boolean isRefrigerated; // Initialized in Constructor
	private boolean visible; // Initialized to False
	
	public Ingredient(String name, String unitOfMeasure, boolean isRefrigerated) {
		this.name = name;
		this.unitOfMeasure = unitOfMeasure;
		this.chosenQuantity = 0;
		this.isRefrigerated = isRefrigerated;
		this.visible = false;
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getUnit() {
		return this.unitOfMeasure;
	}
	
	public double getChosenQuantity() {
		return this.chosenQuantity;
	}
	
	public void setChosenQuantity(double chosenQuantity) {
		this.chosenQuantity = chosenQuantity;
	}
	
	public boolean isRefrigerated() {
		return this.isRefrigerated;
	}
	
	public boolean getVisibility() {
		return this.visible;
	}
	
	public void setVisibility(boolean visible) {
		this.visible = visible;
	}

}
